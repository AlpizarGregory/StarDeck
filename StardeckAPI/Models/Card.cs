using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    [Table("Carta")]
    public class Card
    {
        [Key]
        [Column("llave")]
        public string Key { get; set; } = null!;

        [Column("nombre")]
        [MinLength(5)]
        [MaxLength(30)]
        [Required]
        public string Name { get; set; } = null!;

        [Column("energia")]
        [Range(-100, 100)]
        public int Energy { get; set; } = 0;

        [Column("costo")]
        [Range(0, 100)]
        public int Cost { get; set; } = 0;

        [Column("tipo")]
        public string Type { get; set; } = null!;

        [Column("raza")]
        public string Race { get; set; } = null!;

        [Column("estado")]
        public string Attribute { get; set; } = null!;

        [Column("descripcion")]
        [MaxLength(1000)]
        public string Description { get; set; } = null!;

        [Column("imagen")]
        public string Image { get; set; } = null!;

    }
}