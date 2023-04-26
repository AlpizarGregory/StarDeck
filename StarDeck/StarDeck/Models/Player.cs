using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace StarDeck.Models
{   /// <summary>
    /// Class <c>Player</c> models the information of a StarDeck player
    /// </summary>
    [Table("Jugador")]
    public class Player
    {
        [Key]
        [Column("correo")]
        public string email { get; set; }
        [Column("contrasena")]
        public string password { get; set; }
        [Column("estado_cuenta")]
        public string enable { get; set; }
        [Column("nickname")]
        public string username { get; set; }
        [Column("failed_attempts")]
        public int failedattempts { get; set; }
        [Column("disabled_date")]
        public string disabledate { get; set; }

        public Player()
        {
            username = "username";
            disabledate = "01/01/1990 01:01:01";
            enable = "activo";
        }
    }
}
