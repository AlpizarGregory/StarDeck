using Microsoft.AspNetCore.Mvc;
using StarDeck.Models;
using System.Diagnostics;

namespace StarDeck.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            ViewData["Action"] = "Login";
            ViewData["Controller"] = "Player";
            ViewData["LogText"] = "Login";
            return View();
        }

        public IActionResult Privacy()
        {
            ViewData["Action"] = "Login";
            ViewData["Controller"] = "Player";
            ViewData["LogText"] = "Login";
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            ViewData["Action"] = "Login";
            ViewData["Controller"] = "Player";
            ViewData["LogText"] = "Login";
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}