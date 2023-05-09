using Microsoft.AspNetCore.Mvc;
using Models;
using Data;

namespace Controllers;

[ApiController]
[Route("[controller]")]

/// <summary>
/// Controlador de las barajas
/// </summary>
public class DeckController : ControllerBase
{
    private readonly ILogger<DeckController> _logger;
    private readonly IConfiguration _configuration;
    private readonly PostgresDBContext _db;

    /// <summary>
    /// Constructor de la clase DeckController
    /// </summary>
    /// <param name="logger"></param>
    /// <param name="configuration"></param>
    /// <param name="db"></param>
    public DeckController(ILogger<DeckController> logger, IConfiguration configuration, PostgresDBContext db)
    {
        _logger = logger;
        _configuration = configuration;
        _db = db;
    }

    /// <summary>
    /// POST de una baraja
    /// </summary>
    /// <param name="deck"></param>
    /// <returns></returns>
    [HttpPost]
    [Route("create")]
    public async Task<IActionResult> createDeck([FromBody] Deck deck)
    {
        if (_db.Decks != null)
        {
            Deck? cardFound = await _db.Decks.FindAsync(deck.Name);
            if (cardFound == null)
            {
                _db.Decks.Add(deck);
                await _db.SaveChangesAsync();
                return Ok(deck);
            }
            return BadRequest("Card already exists");
        }
        return Conflict();
    }

    /// <summary>
    /// GET de todas las barajas
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [Route("getAll")]
    public IActionResult getAllDecks()
    {
        if (_db.Decks != null)
        {
            List<Deck> cards = _db.Decks.ToList<Deck>();
            return Ok(cards);
        }
        return NotFound();
    }

    /// <summary>
    /// GET de una baraja por nombre
    /// </summary>
    /// <param name="name"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("get/byName/{name}")]
    public IActionResult getDeckByName(string name)
    {
        if (_db.Decks != null)
        {
            Deck? deckFound =  _db.Decks.Where(deck => deck.Name == name).FirstOrDefault<Deck>();
            if (deckFound == null) return NotFound();
            return Ok(deckFound);
        }
        return NotFound();
    }

    /// <summary>
    /// GET de las barajas de un jugador
    /// </summary>
    /// <param name="player"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("get/byPlayer/{player}")]
    public IActionResult getDeckByPlayer(string player)
    {
        if (_db.Decks != null)
        {
            List<Deck> decks = _db.Decks.Where(deck => deck.Player == player).ToList<Deck>();
            if (decks == null) return NotFound();
            return Ok(decks);
        }
        return NotFound();
    }

    /// <summary>
    /// POST de una carta a una baraja
    /// </summary>
    /// <param name="cardDeck"></param>
    /// <returns></returns>
    [HttpPost]
    [Route("addCard")]
    public async Task<IActionResult> addCardToDeck([FromBody] CardDeck cardDeck)
    {
        if (_db.CardDecks != null)
        {
            CardDeck? cardDeckFound = await _db.CardDecks.FindAsync(cardDeck.Deck, cardDeck.Card);
            if (cardDeckFound == null)
            {
                _db.CardDecks.Add(cardDeck);
                await _db.SaveChangesAsync();
                return Ok(cardDeck);
            }
            return BadRequest("Card already exists in deck");
        }
        return Conflict();
    }

    /// <summary>
    /// DELETE de una carta de una baraja
    /// </summary>
    /// <param name="cardDeck"></param>
    /// <returns></returns>
    [HttpDelete]
    [Route("removeCard/")]
    public async Task<IActionResult> removeCardFromDeck([FromBody] CardDeck cardDeck)
    {
        if (_db.CardDecks != null)
        {
            CardDeck? cardDeckFound = await _db.CardDecks.FindAsync(cardDeck.Deck, cardDeck.Card);
            if (cardDeckFound != null)
            {
                _db.CardDecks.Remove(cardDeckFound);
                await _db.SaveChangesAsync();
                return Ok(cardDeck);
            }
            return BadRequest("Card does not exist in deck");
        }
        return Conflict();
    }

}