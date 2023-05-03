using Microsoft.AspNetCore.Mvc;
using Models;
using Data;
using Util;

namespace Controllers;

[ApiController]
[Route("[controller]")]
public class AuthenticationController : ControllerBase
{

    private readonly ILogger<AuthenticationController> _logger;

    private readonly IConfiguration _configuration;

    private readonly PostgresDBContext _db;

    public AuthenticationController(ILogger<AuthenticationController> logger, IConfiguration configuration, PostgresDBContext db)
    {
        _logger = logger;
        _configuration = configuration;
        _db = db;
    }

    [HttpPost]
    [Route("login/administrator")]
    public IActionResult loginAdministrator([FromBody] Administrator admin)
    {
        if (_db.Administrators != null)
        {
            Administrator? adminFound = _db.Administrators.Find(admin.Username);
            if (adminFound == null) return NotFound();
            if (checkIncomingAndStoredPasswords(admin.Password, adminFound.Password)) return Ok(adminFound);
        }

        return BadRequest("Invalid credentials");
    }

    
    [HttpPost]
    [Route("login/player")]
    public IActionResult loginPlayer([FromBody] PlayerLogin player)
    {
        if (_db.Players != null)
        {
            Player? playerFound = _db.Players.Find(player.Email);
            if (playerFound == null) return NotFound();
            if (playerFound.Status == "inactivo")
            {
                unblockUserAfterDelay(playerFound);
                return BadRequest("Usuario bloqueado");
            }

            if (!checkIncomingAndStoredPasswords(player.Password, playerFound.Password))
            {
                addAttemptsAndBlockUserIfNecessary(playerFound);
                return BadRequest("Invalid credentials. Usuario: " + playerFound.Nickname + " lleva " + playerFound.FailedAttempts + " intentos fallidos.");
            }
            playerFound.FailedAttempts = 0;
            _db.SaveChanges();
            return Ok(playerFound);
        }
        return BadRequest("Database is null");

    }

    private void unblockUserAfterDelay(Player playerFound)
    {
        // If the user is not blocked, do nothing
        if (playerFound.Status.Equals("activo, sin partida")) return;

        TimeSpan difference = getTimeSinceUserWasBlocked(playerFound);

        // If the user has been blocked for less than 15 seconds, do nothing
        if (difference.Seconds < 15) return;

        unblockUser(playerFound);

    }

    private TimeSpan getTimeSinceUserWasBlocked(Player playerFound)
    {
        DateTime currentTime = DateTime.Now;
        DateTime timeUserWasBlocked = DateTime.Parse(playerFound.DisabledDate);
        return currentTime.Subtract(timeUserWasBlocked);

    }

    private void addAttemptsAndBlockUserIfNecessary(Player playerFound)
    {
        playerFound.FailedAttempts++;
        _db.SaveChanges();
        if (playerFound.FailedAttempts >= 3) blockUser(playerFound);
    }

    private void blockUser(Player playerFound)
    {
        playerFound.Status = "inactivo";
        playerFound.DisabledDate = DateTime.Now.ToString();
        _db.SaveChanges();
        unblockUserAfterDelay(playerFound);

    }

    private void unblockUser(Player playerFound)
    {
        playerFound.Status = "activo, sin partida";
        playerFound.FailedAttempts = 0;
        playerFound.DisabledDate = "";
        _db.SaveChanges();

    }

    [HttpPost]
    [Route("register/player")]
    public async Task<IActionResult> registerPlayer([FromBody] Player player)
    {
        if (_db.Players != null)
        {
            Player? playerFound = await _db.Players.FindAsync(player.Email);
            if (playerFound == null)
            {
                _db.Players.Add(player);
                await _db.SaveChangesAsync();
                return Ok(player);
            }

        }
        return Conflict();
    }

    bool checkIncomingAndStoredPasswords(string incommingPassword, string storedHash)
    {
        return Encription.encriptPassword(incommingPassword) == storedHash;
    }
}