using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace StarDeck.Models
{
    [Table("player")]
    public class Player
    {
        [Key]
        public string email { get; set; }
        public string password { get; set; }
        public bool enable { get; set; }
        public string username { get; set; }
        public int failedAttempts { get; set; }
        public DateOnly disableDate { get; set; }
        public TimeOnly disableTime { get; set; }

        public Player()
        {
            username = "username";
        }
    }
}
