using Microsoft.EntityFrameworkCore;
using Models;


namespace Data
{
    public class PostgresDBContext : DbContext
    {
        public DbSet<Player>? Players { get; set; }
        public DbSet<Card>? Cards { get; set; }
        public DbSet<Administrator>? Administrators { get; set; }
        public PostgresDBContext(DbContextOptions<PostgresDBContext> options) : base(options)
        {
        }
        
    }
}