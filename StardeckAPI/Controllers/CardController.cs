using Microsoft.AspNetCore.Mvc;
using Models;
using Data;

namespace Controllers;

[ApiController]
[Route("[controller]")]

/// <summary>
/// Controlador de las cartas
/// </summary>
public class CardController : ControllerBase
{
    /// <summary>
    /// Atributos de la clase CardController
    /// </summary>
    private readonly ILogger<CardController> _logger;
    private readonly IConfiguration _configuration;
    private readonly PostgresDBContext _db;

    /// <summary>
    /// Constructor de la clase CardController
    /// </summary>
    /// <param name="logger"></param>
    /// <param name="configuration"></param>
    /// <param name="db"></param>
    public CardController(ILogger<CardController> logger, IConfiguration configuration, PostgresDBContext db)
    {
        _logger = logger;
        _configuration = configuration;
        _db = db;
    }

    /// <summary>
    /// POST de una carta
    /// </summary>
    /// <param name="card"></param>
    /// <returns></returns>
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

    /// <summary>
    /// GET de todas las cartas
    /// </summary>
    /// <returns></returns>
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

    /// <summary>
    /// GET de una carta por su nombre
    /// </summary>
    /// <param name="name"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("get/byName/{name}")]
    public IActionResult getCardByName(string name)
    {
        if (_db.Cards != null)
        {
            Card? cardFound = _db.Cards.Where(card => card.Name == name).FirstOrDefault<Card>();
            if (cardFound == null) return NotFound();
            return Ok(cardFound);
        }
        return Conflict();
    }

    /// <summary>
    /// GET de una carta por su ID
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("get/byId/{id}")]
    public IActionResult getCardById(string id)
    {
        if (_db.Cards != null)
        {
            Card? cardFound = _db.Cards.Find(id);
            if (cardFound == null) return NotFound();
            return Ok(cardFound);
        }
        return Conflict();
    }

    /// <summary>
    /// GET de una lista de cartas que pertenecen a un mazo
    /// </summary>
    /// <param name="deck"></param>
    /// <returns></returns>
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

    /// <summary>
    /// GET de una lista de cartas en orden aleatorio que pertenecen a un mazo
    /// </summary>
    /// <param name="deck"></param>
    /// <returns></returns>
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

    /// <summary>
    /// Ordena aleatoriamente una lista de cartas
    /// </summary>
    /// <param name="cardDecks"></param>
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

    /// <summary>
    /// Retorna una lista de cartas que pertenecen a un mazo
    /// </summary>
    /// <param name="deck"></param>
    /// <returns></returns>
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