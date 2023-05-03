using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    [Table("Jugador")]
    public class Player
    {
        [Column("llave")]
        public string Key { get; set; } = null!;

        [Column("nombre")]
        [MinLength(1)]
        [MaxLength(30)]
        public string Name { get; set; } = null!;

        [Column("nickname")]
        [Required]
        public string? Nickname { get; set; } = null!;

        [Key]
        [Column("correo")]
        [Required]
        public string Email { get; set; } = null!;

        [Column("nacionalidad")]
        public string Nationality { get; set; } = null!;

        [Column("contrasena")]
        [Required]
        public string Password { get; set; } = null!;

        [Column("estado_cuenta")]
        public string Status { get; set; } = null!;

        [Column("rango")]
        public int Rank { get; set; } = 0;

        [Column("monedas")]
        public int Coins { get; set; } = 20;

        [Column("avatar")]
        public string Avatar { get; set; }  = null!;

        [Column("failed_attempts")]
        public int FailedAttempts { get; set; } = 0;
        
        [Column("disabled_date")]
        public string DisabledDate { get; set; } = null!;
    }
}