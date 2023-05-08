using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    [Table("Planeta")]
    public class Planet
    {
        [Key]
        [Column("llave")]
        public string Key { get; set; } = null!;

        [Column("nombre")]
        public string Name { get; set; } = null!;

        [Column("imagen_pl")]
        public string ImagePL { get; set; } = null!;

        [Column("descripcion")]
        public string Description { get; set; } = null!;

        [Column("tipo")]
        public string Type { get; set; } = null!;

        [Column("estado")]
        public string Status { get; set; } = null!;

        [Column("imagen_cd")]
        public string ImageCD { get; set; } = null!;
    }
}
