using Microsoft.AspNetCore.Mvc;
using Models;
using Data;

namespace Controllers;

[ApiController]
[Route("[controller]")]

public class CardController : ControllerBase
{
    private readonly ILogger<CardController> _logger;
    private readonly IConfiguration _configuration;
    private readonly PostgresDBContext _db;

    public CardController(ILogger<CardController> logger, IConfiguration configuration, PostgresDBContext db)
    {
        _logger = logger;
        _configuration = configuration;
        _db = db;
    }

    [HttpPost]
    [Route("create")]
    public async Task<IActionResult> createCard([FromBody] Card card)
    {
        if (_db.Cards != null)
        {
            Card? cardFound = await _db.Cards.FindAsync(card.Name);
            if (cardFound == null)
            {
                _db.Cards.Add(card);
                await _db.SaveChangesAsync();
                return Ok(card);
            }
            return BadRequest("Card already exists");
        }
        return Conflict();
    }

    [HttpGet]
    [Route("getAll")]
    public IActionResult getAllCards()
    {
        if (_db.Cards != null)
        {
            List<Card> cards = _db.Cards.ToList<Card>();
            return Ok(cards);
        }
        return Conflict();
    }

    [HttpGet]
    [Route("get/byName/{name}")]
    public IActionResult getCardByName(string name)
    {
        if (_db.Cards != null)
        {
            Card? cardFound =  _db.Cards.Where(card => card.Name == name).FirstOrDefault<Card>();
            if (cardFound == null) return NotFound();
            return Ok(cardFound);
        }
        return Conflict();
    }

    [HttpGet]
    [Route("get/byId/{id}")]
    public IActionResult getCardById(string id)
    {
        if (_db.Cards != null)
        {
            Card? cardFound =  _db.Cards.Find(id);
            if (cardFound == null) return NotFound();
            return Ok(cardFound);
        }
        return Conflict();
    }

    
}