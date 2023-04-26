using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StarDeck.Data;
using StarDeck.Models;
using System.Data;
using System.Text.RegularExpressions;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;

namespace StarDeck.Controllers
{
    /// <summary>
    /// Class <c>PlayerController</c> manipulates the information of players
    /// </summary>
    [ApiController]
    [Route("")]
    public class PlayerController : Controller
    {
        private readonly PostgresDbContext _db;

        public PlayerController(PostgresDbContext db)
        {
            _db = db;
        }
        
        /// <summary>
        /// Method <c>Index</c> shows the details of the player model.
        /// </summary>
        /// <returns>The Index view</returns>
        [HttpGet("index")]
        public IActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Method <c>Login</c> Shows a form for the user to login the game
        /// </summary>
        /// <returns>Login view</returns>
        [HttpGet]
        public ActionResult Login()
        {
            ClaimsPrincipal claimUser = HttpContext.User;

            if (claimUser.Identity.IsAuthenticated)
            {
                ViewData["Action"] = "Logout";
                ViewData["Controller"] = "Player";
                ViewData["LogText"] = "Logout";
                HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
                return View();
            }
            ViewData["Action"] = "Login";
            ViewData["Controller"] = "Player";
            ViewData["LogText"] = "Login";
            return View();
        }

        [HttpGet("logout")]
        public ActionResult Logout()
        {
            ClaimsPrincipal claimUser = HttpContext.User;

            if (claimUser.Identity.IsAuthenticated)
            {
                HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            }
            ViewData["Action"] = "Login";
            ViewData["Controller"] = "Player";
            ViewData["LogText"] = "Login";
            return RedirectToAction("Login", "Player");
        }

        /// <summary>
        /// Method <c>MainMenu</c> shows the player's username
        /// </summary>
        /// <param name="username">the username to be shown on screen</param>
        /// <returns>MainMenu view</returns>
        [HttpGet("main-menu/{username}")]
        public ActionResult MainMenu(string username) 
        {
            ClaimsPrincipal claimUser = HttpContext.User;

            if (claimUser.Identity.IsAuthenticated)
            {
                ViewData["username"] = username;
                ViewData["Action"] = "Logout";
                ViewData["Controller"] = "Player";
                ViewData["LogText"] = "Logout";
                return View();
            }
            else
            {
                ViewData["Action"] = "Login";
                ViewData["Controller"] = "Player";
                ViewData["LogText"] = "Login";
                return RedirectToAction("Login", "Player");
            }
        }

        /// <summary>
        /// Method <c>Verify</c> Validates the given info and authenticates the credential for login
        /// </summary>
        /// <param name="player">A Player instance with the email and the password entered</param>
        /// <returns>The Main Menu view or login with error messages</returns>
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
                            List<Claim> claims = new List<Claim>()
                            {
                                new Claim(ClaimTypes.NameIdentifier, player.email),
                                new Claim("Other properties", "Player role")
                            };

                            ClaimsIdentity claimsIdentity = new ClaimsIdentity(claims,
                                CookieAuthenticationDefaults.AuthenticationScheme);

                            AuthenticationProperties properties = new AuthenticationProperties()
                            {
                                AllowRefresh = true,
                                IsPersistent = true
                            };

                            HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme,
                                new ClaimsPrincipal(claimsIdentity), properties); 
                            ViewData["Action"] = "Logout";
                            ViewData["Controller"] = "Player";
                            ViewData["LogText"] = "Logout";
                            Response.Redirect("/main-menu/" + tempPlayer.username);
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
                                ViewData["Action"] = "Login";
                                ViewData["Controller"] = "Player";
                                ViewData["LogText"] = "Login";
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
                            ViewData["Action"] = "Login";
                            ViewData["Controller"] = "Player";
                            ViewData["LogText"] = "Login";
                            return View("Login");
                        }
                        ViewData["errorMessage"] = "Este usuario ha sido deshabilitado. Vuelva a intentar en 15 segundos" +
                            " o contacte al equipo de soporte";
                        ViewData["Action"] = "Login";
                        ViewData["Controller"] = "Player";
                        ViewData["LogText"] = "Login";
                        return View("Login");
                    }

                } 
                else
                {
                    ViewData["errorMessage"] = "La información ingresada no es correcta";
                    ViewData["Action"] = "Login";
                    ViewData["Controller"] = "Player";
                    ViewData["LogText"] = "Login";
                    return View("Login");
                }
            } 
            else
            {
                ViewData["errorMessage"] = "El formato del correo electronico ingresado no es correcto";
                ViewData["Action"] = "Login";
                ViewData["Controller"] = "Player";
                ViewData["LogText"] = "Login";
                return View("Login");
            }
            ViewData["Action"] = "Login";
            ViewData["Controller"] = "Player";
            ViewData["LogText"] = "Login";
            return View("Login");
        }

        /// <summary>
        /// Method <c>EmailFormatValidation</c> verifies if the email has the right format.
        /// </summary>
        /// <param name="emailInput">The email entered</param>
        /// <returns>True or false</returns>
        internal bool EmailFormatValidation(string emailInput)
        {
            Regex emailRegex = new Regex(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$", RegexOptions.IgnoreCase);

            return emailRegex.IsMatch(emailInput);
        }
    }
}
