using Demo.Models;
using Demo.Models.Repositories;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CostController : ControllerBase
    {
        private readonly ICostRepository _repository;

        public CostController(ICostRepository repository)
        {
            _repository = repository;
        }
        // GET: api/<CostController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<CostController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cost>> Get(int id)
        {
            var package = await _repository.GetCost(id);
            return package == null ? NotFound() : package;
        }

        // POST api/<CostController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CostController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CostController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        [HttpGet("/cost/bycatId/{id}")]
        public async Task<ActionResult<IEnumerable<Cost>?>> GetCostbycatId(int id)
        {
            if (await _repository.GetCostsById(id) == null)
            {
                return NotFound();
            }
            return await _repository.GetCostsById(id);
        }

        [HttpGet("/cost/bydate/{id}")]
        public async Task<ActionResult<Cost>> GetCostbycatId(DateTime id)
        {
            if (await _repository.GetPackagesByDate(id) == null)
            {
                return NotFound();
            }
            var package = await _repository.GetPackagesByDate(id);
            return package;
        }
        [HttpGet("/cost/bycost/{cost}")]
        public async Task<ActionResult<IEnumerable<Cost>?>> GetCostsbycost(int cost)
        {
            if (await _repository.GetCostsbycost(cost) == null)
            {
                return NotFound();
            }
            return await _repository.GetCostsbycost(cost);
        }
    }
}
