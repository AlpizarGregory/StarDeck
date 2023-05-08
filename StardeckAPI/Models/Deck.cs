using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    [Table("Deck")]
    public class Deck
    {
        [Key]
        [Column("llave")]
        public string Key { get; set; } = null!;

        [Column("nombre")]
        public string Name { get; set; } = null!;

        [Column("jugador")]
        public string Player { get; set; } = null!;
    }
}