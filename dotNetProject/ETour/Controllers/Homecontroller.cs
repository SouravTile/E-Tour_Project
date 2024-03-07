using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Homecontroller : ControllerBase
    {
        // GET: api/<Homecontroller>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<Homecontroller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<Homecontroller>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<Homecontroller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<Homecontroller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
