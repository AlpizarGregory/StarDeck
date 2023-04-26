using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    [Table("Admin")]
    public class Administrator
    {
        [Key]
        [Column("usuario")]
        [Required]
        public string Username { get; set; } = null!;

        [Column("contrasena")]
        [Required]
        public string Password { get; set; } = null!;
    }
}