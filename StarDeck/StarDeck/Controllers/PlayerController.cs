using Microsoft.AspNetCore.Mvc;
using Npgsql;
using StarDeck.Models;
using System.Text.RegularExpressions;


namespace StarDeck.Controllers
{
    [ApiController]
    [Route("player")]
    public class PlayerController : Controller
    {
        private NpgsqlConnection connection = new NpgsqlConnection();
        private NpgsqlCommand command = new NpgsqlCommand();
        private NpgsqlDataReader dataReader;
        private int failedAttemps = 0;
        

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("login")]
        public ActionResult Login()
        {
            return View();
        }

        [HttpGet("main-menu/{username}")]
        public ActionResult MainMenu(string username) 
        {
            ViewData["email"] = username;
            Console.WriteLine(ViewData["email"]);
            return View(); 
        }

        [HttpPost("verification")]
        public ActionResult Verify([FromForm] Player player)
        {
            bool emailIsValid = EmailFormatValidation(player.email);
            if (emailIsValid)
            {
                connectionString();
                connection.Open();
                command.Connection = connection;
                command.CommandText = "SELECT email, password, username, enable, failed_attempts, disable_date, disable_time" +
                    " FROM public.player WHERE email='" + player.email + "'";
                dataReader = command.ExecuteReader();

                if (dataReader.Read())
                {
                    bool dbEnable = dataReader.GetBoolean(3);

                    if (dbEnable)
                    {
                        player.enable = dbEnable;
                        string dbPassword = dataReader.GetString(1);

                        if (player.password == dbPassword)
                        {
                            player.username = dataReader.GetString(2);
                            Response.Redirect("/player/main-menu/" + player.username);
                        }
                        else
                        {
                            failedAttemps++;
                            if (failedAttemps > 2)
                            {
                                Console.WriteLine("Usuario Deshabilitado");
                                // Deshabilitar por 15 segundos y "Este usuario ha sido deshabilitado. Vuelva
                                // a intentar en 15 segundos o contacte al equipo de soporte."
                            }

                        }
                    }

                } 
                else
                {
                    Console.WriteLine("Invalid user");
                }
            } 
            else
            {
                return View("Error"); // El formato del correo electronico ingresado no es correcto
            }

            return View("Error");
        }

        internal bool EmailFormatValidation(string emailInput)
        {
            Regex emailRegex = new Regex(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$", RegexOptions.IgnoreCase);

            return emailRegex.IsMatch(emailInput);
        }

        internal void connectionString()
        {
            connection.ConnectionString = "Server=localhost;Port=5432;User Id=postgres;Password=password;Database=stardeck;";
        }
    }
}
