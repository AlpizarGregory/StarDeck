using Microsoft.EntityFrameworkCore;
using Models;


namespace Data
{
    public class PostgresDBContext : DbContext
    {
        public DbSet<Player>? Players { get; set; }
        public DbSet<Card>? Cards { get; set; }
        public DbSet<Administrator>? Administrators { get; set; }
        public DbSet<Planet>? Planets { get; set; }
        public DbSet<Deck>? Decks { get; set; }
        public DbSet<CardDeck>? CardDecks { get; set; }
        public DbSet<Match>? Matches { get; set; }
        public DbSet<CardPlayer>? CardPlayers { get; set; }
        public PostgresDBContext(DbContextOptions<PostgresDBContext> options) : base(options)
        {
        }
        
    }
}