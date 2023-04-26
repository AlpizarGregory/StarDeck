using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Npgsql;
using NpgsqlTypes;
using StarDeck.Data;
using StarDeck.Models;
using System.Data;
using System.Numerics;
using System.Text.RegularExpressions;

namespace StarDeck.Controllers
{
    [ApiController]
    [Route("player")]
    public class PlayerController : Controller
    {
        private readonly PostgresDbContext _db;

        public PlayerController(PostgresDbContext db)
        {
            _db = db;
        }
        

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
               Player tempPlayer = _db.Players.Where(row => row.email == player.email).AsNoTracking().FirstOrDefault();

                if (tempPlayer != null)
                {
                    player.username = tempPlayer.username;
                    if (tempPlayer.enable)
                    {
                        player.enable = tempPlayer.enable;

                        if (player.password == tempPlayer.password)
                        {
                            player.username = tempPlayer.username;
                            Console.WriteLine(player.username);
                            Console.WriteLine(tempPlayer.username);
                            Response.Redirect("/player/main-menu/" + tempPlayer.username);
                        }
                        else
                        {
                            player.failedattempts = tempPlayer.failedattempts + 1;
                            player.disabledate = tempPlayer.disabledate;
                            _db.Players.Update(player);
                            _db.SaveChanges();

                            if (player.failedattempts == 3)
                            {
                                player.enable = false;
                                DateTime actualTime = DateTime.Now;
                                player.disabledate = actualTime.ToString("dd/MM/yyyy HH:mm:ss");
                                _db.Players.Update(player);
                                _db.SaveChanges();
                                ViewData["errorMessage"] = "Este usuario ha sido deshabilitado. Vuelva a intentar en 15 segundos" +
                                    " o contacte al equipo de soporte";
                                return View("Login");
                            }
                            ViewData["errorMessage"] = "La información ingresada no es correcta";
                            return View("Login");

                        }
                    } 
                    else
                    {
                        int seconds = (int)(DateTime.Now - DateTime.Parse(tempPlayer.disabledate)).TotalSeconds;
                        if (seconds > 15)
                        {
                            player.enable = true;
                            player.failedattempts = 0;
                            _db.Update(player);
                            _db.SaveChanges();
                            return View("Login");
                        }
                        ViewData["errorMessage"] = "Este usuario ha sido deshabilitado. Vuelva a intentar en 15 segundos" +
                            " o contacte al equipo de soporte";
                        return View("Login");
                    }

                } 
                else
                {
                    ViewData["errorMessage"] = "La información ingresada no es correcta";
                    return View("Login");
                }
            } 
            else
            {
                ViewData["errorMessage"] = "El formato del correo electronico ingresado no es correcto";
                return View("Login");
            }
            return View("Login");
        }

        internal bool EmailFormatValidation(string emailInput)
        {
            Regex emailRegex = new Regex(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$", RegexOptions.IgnoreCase);

            return emailRegex.IsMatch(emailInput);
        }

        internal string connectionString()
        {
            return "Server=localhost;Port=5432;User Id=postgres;Password=password;Database=stardeck;";
        }
    }
}
