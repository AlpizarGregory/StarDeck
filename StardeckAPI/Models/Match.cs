using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    [Table("Partida")]
    public class Match
    {
        [Key]
        [Column("llave")]
        public string Key { get; set; } = null!;

        [Column("jugador1")]
        public string Player1 { get; set; } = null!;

        [Column("jugador2")]
        public string Player2 { get; set; } = null!;

        [Column("planeta1")]
        public string Planet1 { get; set; } = null!;

        [Column("planeta2")]
        public string Planet2 { get; set; } = null!;

        [Column("planeta3")]
        public string Planet3 { get; set; } = null!;

        [Column("log")]
        public string Log { get; set; } = null!;

        [Column("turno")]
        public string Turn { get; set; } = null!;
    }
}