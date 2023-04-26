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
        public int failedattempts { get; set; }
        public string disabledate { get; set; }

        public Player()
        {
            username = "username";
            disabledate = "01/01/1990 01:01:01";
        }
    }
}
