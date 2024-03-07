using Demo.Models;
using Demo.Models.Repositories;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItrController : ControllerBase
    {

        private readonly IitinerRepository _repository;

        public ItrController(IitinerRepository repository)
        {
            _repository = repository;
        }
        // GET: api/<ItrController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<ItrController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ItrController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ItrController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ItrController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
       [HttpGet("/bycat/{id}")]
        public async Task<ActionResult<IEnumerable<ItineraryMaster>?>> Getbycat(int id)
        {
            var it = await _repository.Getcatbyid(id);
            return it == null ? NotFound() : it;
        }
    }
}
