using Demo.Models;
using Demo.Models.Repositories;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DateController : ControllerBase
    {
        private readonly IDateRepository _repository;

        public DateController(IDateRepository repository)
        {
            _repository = repository;
        }
        // GET: api/<DateController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<DateController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Date>> Get(int id)
        {
            var package = await _repository.GetDate_Master(id);
            return package == null ? NotFound() : package;
        }

        // POST api/<DateController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<DateController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<DateController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        [HttpGet("/date/bycatId/{id}")]
        public async Task<ActionResult<IEnumerable<Date>?>> GetPackageMasterbycatId(int id)
        {
            if (await _repository.GetDatesByCatId(id) == null)
            {
                return NotFound();
            }
            return await _repository.GetDatesByCatId(id);
        }
        [HttpGet("/date/bydate/{date}/{date2}")]
        public async Task<ActionResult<IEnumerable<Date>>> GetCostbycatId(DateTime date,DateTime date2)
        {
            if (await _repository.GetPackByDate(date,date2) == null)
            {
                return NotFound();
            }
            var package = await _repository.GetPackByDate(date,date2);
            return package;
        }
    }
}
