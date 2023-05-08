using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    [Table("Carta_Deck")]
    public class CardDeck
    {
        [Key]
        [Column("deck")]
        public string Deck { get; set; } = null!;

        [Column("carta")]
        public string Card { get; set; } = null!;
    }
}