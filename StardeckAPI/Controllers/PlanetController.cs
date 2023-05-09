using Microsoft.AspNetCore.Mvc;
using Models;
using Data;

namespace Controllers;

[ApiController]
[Route("[controller]")]

/// <summary>
/// Controlador de los planetas
/// </summary>
public class PlanetController : ControllerBase
{
    /// <summary>
    /// Atributos de la clase PlanetController
    /// </summary>
    private readonly ILogger<PlanetController> _logger;
    private readonly IConfiguration _configuration;
    private readonly PostgresDBContext _db;

    /// <summary>
    /// Constructor de la clase PlanetController
    /// </summary>
    /// <param name="logger"></param>
    /// <param name="configuration"></param>
    /// <param name="db"></param>
    public PlanetController(ILogger<PlanetController> logger, IConfiguration configuration, PostgresDBContext db)
    {
        _logger = logger;
        _configuration = configuration;
        _db = db;
    }

    /// <summary>
    /// POST de un planeta
    /// </summary>
    /// <param name="planet"></param>
    /// <returns></returns>
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

    /// <summary>
    /// GET de todos los planetas
    /// </summary>
    /// <returns></returns>
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

    /// <summary>
    /// GET de un planeta por su nombre
    /// </summary>
    /// <param name="name"></param>
    /// <returns></returns>
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

    /// <summary>
    /// GET de un planeta por su id
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("get/byId/{id}")]
    public IActionResult getPlanetById(string id)
    {
        if (_db.Planets != null)
        {
            Planet? planetFound = _db.Planets.Where(planet => planet.Key == id).FirstOrDefault<Planet>();
            if (planetFound == null) return NotFound();
            return Ok(planetFound);
        }
        return NotFound();
    }
}