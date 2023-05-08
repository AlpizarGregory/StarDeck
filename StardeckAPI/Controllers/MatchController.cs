using Microsoft.AspNetCore.Mvc;
using Models;
using Data;
using Util;

namespace Controllers;

[ApiController]
[Route("[controller]")]

public class MatchController : ControllerBase
{
    private readonly ILogger<MatchController> _logger;
    private readonly IConfiguration _configuration;

    private readonly PostgresDBContext _db;

    public MatchController(ILogger<MatchController> logger,IConfiguration configuration, PostgresDBContext db)
    {
        _logger = logger;
        _configuration = configuration;
        _db = db;
    }

    [HttpPost]
    [Route("create")]
    public async Task<IActionResult> createMatch([FromBody] Match match)
    {
        if (_db.Matches != null)
        {
            Match? matchFound = await _db.Matches.FindAsync(match.Player1, match.Player2);
            if (matchFound == null)
            {
                _db.Matches.Add(match);
                await _db.SaveChangesAsync();
                return Ok(match);
            }
            return BadRequest("Match already exists");
        }
        return Conflict();
    }

    [HttpGet]
    [Route("getAll")]
    public IActionResult getAllMatches()
    {
        if (_db.Matches != null)
        {
            List<Match> matches = _db.Matches.ToList<Match>();
            return Ok(matches);
        }
        return Conflict();
    }

    [HttpGet]
    [Route("get/byId/{id}")]
    public IActionResult getMatchById(int id)
    {
        if (_db.Matches != null)
        {
            Match? matchFound = _db.Matches.Find(id);
            if (matchFound == null) return NotFound();
            return Ok(matchFound);
        }
        return Conflict();
    }

    [HttpPut]
    [Route("update")]
    public async Task<IActionResult> updateMatch([FromBody] Match match)
    {
        if (_db.Matches != null)
        {
            Match? matchFound = await _db.Matches.FindAsync(match.Key);
            if (matchFound == null) return NotFound();
            matchFound.Player1 = match.Player1;
            matchFound.Player2 = match.Player2;
            matchFound.Planet1 = match.Planet1;
            matchFound.Planet2 = match.Planet2;
            matchFound.Planet3 = match.Planet3;
            matchFound.Log = match.Log;
            matchFound.Turn = match.Turn;
            await _db.SaveChangesAsync();
            return Ok(matchFound);
        }
        return Conflict();
    }
}