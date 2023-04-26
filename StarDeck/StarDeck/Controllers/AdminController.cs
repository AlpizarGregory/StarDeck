using Microsoft.AspNetCore.Mvc;
using Models;
using StarDeck.Data;
using Util;

namespace StarDeck.Controllers;

[ApiController]
[Route("[controller]")]
public class AdminController : ControllerBase
{

    private readonly ILogger<AdminController> _logger;

    private readonly IConfiguration _configuration;

    private readonly PostgresDbContext _db;

    public AdminController(ILogger<AdminController> logger, IConfiguration configuration, PostgresDbContext db)
    {
        _logger = logger;
        _configuration = configuration;
        _db = db;
    }

    [HttpPost]
    [Route("login/administrator")]
    public async Task<Administrator> loginAdministrator([FromBody]Administrator admin)
    {
        using (_db)
        {
            if(_db.Administrators != null)
            {
                Administrator? adminFound = await _db.Administrators.FindAsync(admin.Username);
                if(adminFound != null)
                {
                    if(adminFound.Password == admin.Password)
                    {
                        return adminFound;
                    }
                }
            }
            return new Administrator();
        }
    }
}