using Microsoft.AspNetCore.Mvc;
using Models;
using Data;

namespace StarDeck.Controllers;

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
    public async Task<Card> createCard([FromBody]Card card)
    {
        using (_db)
        {
            if(_db.Cards != null)
            {
                Card? cardFound = await _db.Cards.FindAsync(card.Key);
                if(cardFound == null)
                {
                    _db.Cards.Add(card);
                    await _db.SaveChangesAsync();
                    return card;
                }
            }
        
            return new Card();
        }
    }
}