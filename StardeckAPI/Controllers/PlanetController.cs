using Microsoft.AspNetCore.Mvc;
using Models;
using Data;

namespace Controllers;

[ApiController]
[Route("[controller]")]

public class PlanetController : ControllerBase
{
    private readonly ILogger<PlanetController> _logger;
    private readonly IConfiguration _configuration;
    private readonly PostgresDBContext _db;

    public PlanetController(ILogger<PlanetController> logger, IConfiguration configuration, PostgresDBContext db)
    {
        _logger = logger;
        _configuration = configuration;
        _db = db;
    }

    [HttpPost]
    [Route("create")]
    public async Task<IActionResult> createPlanet([FromBody] Planet planet)
    {
        if (_db.Planets != null)
        {
            Planet? planetFound = await _db.Planets.FindAsync(planet.Name);
            if (planetFound == null)
            {
                _db.Planets.Add(planet);
                await _db.SaveChangesAsync();
                return Ok(planet);
            }
            return BadRequest("Planet already exists");
        }
        return Conflict();
    }

    [HttpGet]
    [Route("getAll")]
    public IActionResult getAllPlanets()
    {
        if (_db.Planets != null)
        {
            List<Planet> planets = _db.Planets.ToList<Planet>();
            return Ok(planets);
        }
        return NotFound();
    }

    [HttpGet]
    [Route("get/byName/{name}")]
    public IActionResult getPlanetByName(string name)
    {
        if (_db.Planets != null)
        {
            Planet? planetFound =  _db.Planets.Where(planet => planet.Name == name).FirstOrDefault<Planet>();
            if (planetFound == null) return NotFound();
            return Ok(planetFound);
        }
        return NotFound();
    }
}