using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    [Table("Cartas_Jugador")]
    public class CardPlayer
    {
        [Key]
        [Column("jugador")]
        public string Player { get; set; } = null!;

        [Column("carta")]
        public string Card { get; set; } = null!;
    }
}