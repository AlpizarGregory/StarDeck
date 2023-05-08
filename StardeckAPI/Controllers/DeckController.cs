using Microsoft.AspNetCore.Mvc;
using Models;
using Data;

namespace Controllers;

[ApiController]
[Route("[controller]")]

public class DeckController : ControllerBase
{
    private readonly ILogger<DeckController> _logger;
    private readonly IConfiguration _configuration;
    private readonly PostgresDBContext _db;

    public DeckController(ILogger<DeckController> logger, IConfiguration configuration, PostgresDBContext db)
    {
        _logger = logger;
        _configuration = configuration;
        _db = db;
    }

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

    [HttpGet]
    [Route("getCards/byDeck/{deck}")]
    public IActionResult getCardsByDeck(string deck)
    {
        if (_db.CardDecks != null && _db.Cards != null)
        {
            List<Card> cards = cardsInDeck(deck);
            if (!cards.Any()) return NotFound(); //Si la lista está vacía, retorna NotFound
            return Ok(cards);
        }
        return Conflict();
    }

    [HttpGet]
    [Route("getCards/byDeck/{deck}/random")]
    public IActionResult getCardsByDeckRandom(string deck)
    {
        if (_db.CardDecks != null && _db.Cards != null)
        {
            List<Card> cards = cardsInDeck(deck);
            if (!cards.Any()) return NotFound(); //Si la lista está vacía, retorna NotFound
            randomizeCards(cards);
            return Ok(cards);
        }
        return Conflict();
    }

    private void randomizeCards(List<Card> cardDecks)
    {
        Random random = new Random();
        for (int i = 0; i < cardDecks.Count; i++)
        {
            int randomIndex = random.Next(cardDecks.Count);
            Card temp = cardDecks[i];
            cardDecks[i] = cardDecks[randomIndex];
            cardDecks[randomIndex] = temp;
        }
    }

    private List<Card> cardsInDeck(string deck)
    {
        if (_db.CardDecks != null && _db.Cards != null)
        {
            List<CardDeck> cardDecks = _db.CardDecks.Where(cardDeck => cardDeck.Deck == deck).ToList<CardDeck>();
            List<Card> cards = new List<Card>();
            foreach (CardDeck cardDeck in cardDecks)
            {
                Card? cardFound = _db.Cards.Where(card => card.Key == cardDeck.Card).FirstOrDefault<Card>();
                if (cardFound != null) cards.Add(cardFound);
            }
            return cards;
        }
        return new List<Card>();
    }

}