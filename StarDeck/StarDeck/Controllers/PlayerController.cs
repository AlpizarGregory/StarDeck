﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Npgsql;
using NpgsqlTypes;
using StarDeck.Data;
using StarDeck.Models;
using System.Data;
using System.Numerics;
using System.Text.RegularExpressions;
using Util;

namespace StarDeck.Controllers
{
    /// <summary>
    /// Class <c>PlayerController</c> manipulates the information of players
    /// </summary>
    [ApiController]
    [Route("player")]
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
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Method <c>Login</c> Shows a form for the user to login the game
        /// </summary>
        /// <returns>Login view</returns>
        [HttpGet("login")]
        public ActionResult Login()
        {
            return View();
        }

        /// <summary>
        /// Method <c>MainMenu</c> shows the player's username
        /// </summary>
        /// <param name="username">the username to be shown on screen</param>
        /// <returns>MainMenu view</returns>
        [HttpGet("main-menu/{username}")]
        public ActionResult MainMenu(string username) 
        {
            ViewData["email"] = username;
            Console.WriteLine(ViewData["email"]);
            return View(); 
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


        /// <summary>
        /// Method <c>Register</c> Registers a new player
        /// </summary>
        /// <returns>Register view</returns>
        [HttpPost("register")]
        public ActionResult Register([FromForm] Player player)
        {
            bool emailIsValid = EmailFormatValidation(player.email);
            if (emailIsValid)
            {
                Player tempPlayer = _db.Players.Where(row => row.email == player.email).AsNoTracking().FirstOrDefault();
                if (tempPlayer == null)
                {
                    player.enable = true;
                    player.failedattempts = 0;
                    tempPlayer.password = Encription.encriptPassword(player.password);
                    _db.Players.Add(player);
                    _db.SaveChanges();
                    ViewData["errorMessage"] = "El usuario ha sido registrado exitosamente";
                    return View("Login");
                }
                ViewData["errorMessage"] = "El correo electronico ingresado ya se encuentra registrado";
                return View("Register");
            }
            ViewData["errorMessage"] = "El formato del correo electronico ingresado no es correcto";
            return View("Register");
        }
    }


}