using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Models;
using StarDeck.Models;

namespace StarDeck.Data
{
    public class PostgresDbContext : DbContext
    {

        public PostgresDbContext(DbContextOptions<PostgresDbContext> options) : base(options) { }
        public DbSet<Player> Players => Set<Player>();
        public DbSet<Administrator> Administrators => Set<Administrator>();
        public DbSet<Card> Cards => Set<Card>();

    }
}
