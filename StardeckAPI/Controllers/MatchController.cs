using Microsoft.AspNetCore.Mvc;
using Models;
using Data;
using Util;

namespace Controllers;

[ApiController]
[Route("[controller]")]

/// <summary>
/// Controlador de partidas
/// </summary>
public class MatchController : ControllerBase
{
    /// <summary>
    /// Atributos de la clase MatchController
    /// </summary>
    private readonly ILogger<MatchController> _logger;
    private readonly IConfiguration _configuration;
    private readonly PostgresDBContext _db;

    /// <summary>
    /// Constructor de la clase MatchController
    /// </summary>
    /// <param name="logger"></param>
    /// <param name="configuration"></param>
    /// <param name="db"></param>
    public MatchController(ILogger<MatchController> logger,IConfiguration configuration, PostgresDBContext db)
    {
        _logger = logger;
        _configuration = configuration;
        _db = db;
    }

    /// <summary>
    /// POST de una partida
    /// </summary>
    /// <param name="match"></param>
    /// <returns></returns>
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

    /// <summary>
    /// GET de todas las partidas
    /// </summary>
    /// <returns></returns>
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

    /// <summary>
    /// GET de una partida por su id
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
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

    /// <summary>
    /// PUT de una partida
    /// </summary>
    /// <param name="match"></param>
    /// <returns></returns>
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

    /// <summary>
    /// DELETE de una partida
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpDelete]
    [Route("delete/{id}")]
    public async Task<IActionResult> deleteMatch(int id)
    {
        if (_db.Matches != null)
        {
            Match? matchFound = await _db.Matches.FindAsync(id);
            if (matchFound == null) return NotFound();
            _db.Matches.Remove(matchFound);
            await _db.SaveChangesAsync();
            return Ok(matchFound);
        }
        return Conflict();
    }

    /// <summary>
    /// GET de todas las partidas de un jugador
    /// </summary>
    /// <param name="player"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("get/byPlayer/{player}")]
    public IActionResult getMatchesByPlayer(string player)
    {
        if (_db.Matches != null)
        {
            List<Match> matches = _db.Matches.Where(match => match.Player1 == player || match.Player2 == player).ToList<Match>();
            if (matches == null) return NotFound();
            return Ok(matches);
        }
        return Conflict();
    }

    /// <summary>
    /// Patch del log de la partida
    /// </summary>
    /// <param name="log"></param>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpPatch]
    [Route("update/log/{id}")]
    public async Task<IActionResult> updateMatchLog([FromBody] string log, string id)
    {
        if (_db.Matches != null)
        {
            Match? matchFound = await _db.Matches.FindAsync(id);
            if (matchFound == null) return NotFound();
            matchFound.Log += log;
            await _db.SaveChangesAsync();
            return Ok(matchFound);
        }
        return Conflict();
    }

    /// <summary>
    /// Patch del turno de la partida
    /// </summary>
    /// <param name="match"></param>
    /// <returns></returns>
    [HttpPatch]
    [Route("update/turn")]
    public async Task<IActionResult> updateMatchTurn([FromBody] Match match)
    {
        if (_db.Matches != null)
        {
            Match? matchFound = await _db.Matches.FindAsync(match.Key);
            if (matchFound == null) return NotFound();
            matchFound.Turn = match.Turn;
            await _db.SaveChangesAsync();
            return Ok(matchFound);
        }
        return Conflict();
    }

    /// <summary>
    /// Patch de los planetas de la partida
    /// </summary>
    /// <param name="match"></param>
    /// <returns></returns>
    [HttpPatch]
    [Route("update/planets")]
    public async Task<IActionResult> updateMatchPlanets([FromBody] Match match)
    {
        if (_db.Matches != null)
        {
            Match? matchFound = await _db.Matches.FindAsync(match.Key);
            if (matchFound == null) return NotFound();
            matchFound.Planet1 = match.Planet1;
            matchFound.Planet2 = match.Planet2;
            matchFound.Planet3 = match.Planet3;
            await _db.SaveChangesAsync();
            return Ok(matchFound);
        }
        return Conflict();
    }

    /// <summary>
    /// Patch de los jugadores de la partida
    /// </summary>
    /// <param name="match"></param>
    /// <returns></returns>
    [HttpPatch]
    [Route("update/players")]
    public async Task<IActionResult> updateMatchPlayers([FromBody] Match match)
    {
        if (_db.Matches != null)
        {
            Match? matchFound = await _db.Matches.FindAsync(match.Key);
            if (matchFound == null) return NotFound();
            matchFound.Player1 = match.Player1;
            matchFound.Player2 = match.Player2;
            await _db.SaveChangesAsync();
            return Ok(matchFound);
        }
        return Conflict();
    }

    /// <summary>
    /// GET del log de la partida
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("get/log/{id}")]
    public IActionResult getMatchLog(int id)
    {
        if (_db.Matches != null)
        {
            Match? matchFound = _db.Matches.Find(id);
            if (matchFound == null) return NotFound();
            return Ok(matchFound.Log);
        }
        return Conflict();
    }

    /// <summary>
    /// GET del último cambio del log de la partida
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("get/log/changes/{id}")]
    public IActionResult getMatchLogChanges(int id)
    {
        if (_db.Matches != null)
        {
            Match? matchFound = _db.Matches.Find(id);
            if (matchFound == null) return NotFound();
            string[] logs = matchFound.Log.Split(";");
            return Ok(logs[logs.Length - 1]);
        }
        return Conflict();
    }
}