using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace StarDeck.Models
{
    [Table("player")]
    public class Player
    {
        [Key]
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
