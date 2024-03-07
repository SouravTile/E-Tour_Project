using Demo.Models;
using Demo.Models.Repositories;
using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol.Core.Types;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PassengerController : ControllerBase
    {
        private readonly IPassengerRepository _repository;

        public PassengerController(IPassengerRepository repository)
        {
            _repository = repository;
        }
        // GET: api/<PassengerController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pass>?>> GetCategories()
        {
            if (await _repository.GetAllPassengers() == null)
            {
                return NotFound();
            }

            return await _repository.GetAllPassengers();
        }
        // GET api/<PassengerController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<PassengerController>
        [HttpPost("add")]
        public async Task<ActionResult<Pass>> Post( Pass passenger)
        {
            await _repository.AddP(passenger);
            return passenger;
        }

        // PUT api/<PassengerController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PassengerController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        [HttpGet("/pass/bycatId/{id}")]
        public async Task<ActionResult<Pass>?> GetPassbycatId(int id)
        {
            if (await _repository.GetPackagesByCatId(id) == null)
            {
                return NotFound();
            }
            return await _repository.GetPackagesByCatId(id);
        }
        [HttpGet("/pass/count/{id}")]
        public async Task<ActionResult<int>?> GetCountPax(int id)
        {
            if (await _repository.GetCount(id) == null)
            {
                return NotFound();
            }

            return await _repository.GetCount(id);
        }

        [HttpGet("/pass/pass/{id}")]
        public async Task<ActionResult<IEnumerable<Pass>>> GetPassengers(int id)
        {
            if (await _repository.GetPassengers(id) == null)
            {
                return NotFound();
            }

            return await _repository.GetPassengers(id);
        }
        [HttpGet("/pass/total/{id}")]
        public async Task<ActionResult<int>> GetTotal(int id)
        {
            if (await _repository.Gettotal(id) == null)
            {
                return NotFound();
            }

            return await _repository.Gettotal(id);
        }
    }
    
}
