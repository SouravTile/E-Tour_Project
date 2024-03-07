using Demo.Models;
using Demo.Models.Repositories;
using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol.Core.Types;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerRepository _repository;

        public CustomerController(ICustomerRepository repository)
        {
            _repository = repository;
        }
        // GET: api/<CustomerController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CustomerMaster>?>> GetCategories()
        {
            if (await _repository.GetAllCustomers() == null)
            {
                return NotFound();
            }

            return await _repository.GetAllCustomers();
        }

        [HttpGet("login/{username}/{password}")]
        public async Task<ActionResult<CustomerMaster>> Getcustomer(string username,string password)
        {
            if (await _repository.Login(username,password) == null)
            {
                return NotFound();
            }

            return await _repository.Login(username, password);
        }
        // GET api/<CustomerController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CustomerMaster>> GetCustomer(int id)
        {
            var category = await _repository.GetCustomer(id);
            return category == null ? NotFound() : category;
        }
        [HttpPost]
        public async Task<ActionResult<CustomerMaster>> Post(CustomerMaster cat)
        {
            await _repository.Add(cat);
            return CreatedAtAction("GetCustomer", new { id = cat.CustId }, cat);
        }

        // PUT api/<CustomerController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CustomerController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
