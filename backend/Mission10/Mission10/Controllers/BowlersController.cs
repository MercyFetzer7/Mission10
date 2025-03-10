using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mission10.Data;

namespace Mission10.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlersController : ControllerBase
    {
        private BowlingLeagueContext _bowlerContext;

        public BowlersController(BowlingLeagueContext temp)
        {
            _bowlerContext = temp;
        }
        
        [HttpGet (Name = "GetBowlers")]
        public IEnumerable<Bowler> Get()
        {
            var bowlerList = _bowlerContext.Bowlers
                .Include(b => b.Team) // includes Team table
                .ToList();
            return (bowlerList);
        }
    }
}
