using Microsoft.AspNetCore.Mvc;
using Models;
using Data;
using Util;

namespace Controllers;

[ApiController]
[Route("[controller]")]

/// <summary>
/// Controlador de autenticación
/// </summary>
public class AuthenticationController : ControllerBase
{
    /// <summary>
    /// 
    /// </summary>
    private readonly ILogger<AuthenticationController> _logger;
    private readonly IConfiguration _configuration;
    private readonly PostgresDBContext _db;

    /// <summary>
    /// Constructor de la clase AuthenticationController
    /// </summary>
    /// <param name="logger"></param>
    /// <param name="configuration"></param>
    /// <param name="db"></param>
    public AuthenticationController(ILogger<AuthenticationController> logger,IConfiguration configuration, PostgresDBContext db)
    {
        _logger = logger;
        _configuration = configuration;
        _db = db;
    }

    /// <summary>
    /// Login de un administrador
    /// </summary>
    /// <param name="admin"></param>
    /// <returns></returns>
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

    /// <summary>
    /// Login de un jugador
    /// </summary>
    /// <param name="player"></param>
    /// <returns></returns>
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

    /// <summary>
    /// Desbloquea al usuario si han pasado 15 segundos desde que fue bloqueado
    /// </summary>
    /// <param name="playerFound"></param>
    private void unblockUserAfterDelay(Player playerFound)
    {
        // If the user is not blocked, do nothing
        if (playerFound.Status.Equals("activo, sin partida")) return;

        TimeSpan difference = getTimeSinceUserWasBlocked(playerFound);

        // If the user has been blocked for less than 15 seconds, do nothing
        if (difference.Seconds < 15) return;

        unblockUser(playerFound);

    }

    /// <summary>
    /// Retorna el tiempo que ha pasado desde que el usuario fue bloqueado
    /// </summary>
    /// <param name="playerFound"></param>
    /// <returns></returns>
    private TimeSpan getTimeSinceUserWasBlocked(Player playerFound)
    {
        DateTime currentTime = DateTime.Now;
        DateTime timeUserWasBlocked = DateTime.Parse(playerFound.DisabledDate);
        return currentTime.Subtract(timeUserWasBlocked);

    }

    /// <summary>
    /// Añade un intento fallido al usuario y lo bloquea si llega a 3
    /// </summary>
    /// <param name="playerFound"></param>
    private void addAttemptsAndBlockUserIfNecessary(Player playerFound)
    {
        playerFound.FailedAttempts++;
        _db.SaveChanges();
        if (playerFound.FailedAttempts >= 3) blockUser(playerFound);
    }

    /// <summary>
    /// Bloquea al usuario
    /// </summary>
    /// <param name="playerFound"></param>
    private void blockUser(Player playerFound)
    {
        playerFound.Status = "inactivo";
        playerFound.DisabledDate = DateTime.Now.ToString();
        _db.SaveChanges();
        unblockUserAfterDelay(playerFound);

    }

    /// <summary>
    /// Desbloquea al usuario
    /// </summary>
    /// <param name="playerFound"></param>
    private void unblockUser(Player playerFound)
    {
        playerFound.Status = "activo, sin partida";
        playerFound.FailedAttempts = 0;
        playerFound.DisabledDate = "";
        _db.SaveChanges();

    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="player"></param>
    /// <returns></returns>
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
            return BadRequest("Player already exists");
        }
        return Conflict();
    }

    /// <summary>
    /// Compara la contraseña que viene en el body con la contraseña encriptada que está almacenada en la base de datos
    /// </summary>
    /// <param name="incommingPassword"></param>
    /// <param name="storedHash"></param>
    /// <returns></returns>
    bool checkIncomingAndStoredPasswords(string incommingPassword, string storedHash)
    {
        return Encription.encriptPassword(incommingPassword) == storedHash;
    }
}