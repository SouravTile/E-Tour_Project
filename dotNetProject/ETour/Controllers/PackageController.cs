using Demo.Models;
using Demo.Models.Repositories;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PackageController : ControllerBase
    {
        private readonly IPackageRepository _repository;

        public PackageController(IPackageRepository repository)
        {
            _repository = repository;
        }
        // GET: api/<PackageController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<PackageController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Package>> Get(int id)
        {
            var package = await _repository.GetPackage_Master(id);
            return package == null ? NotFound() : package;
        }

        // POST api/<PackageController>
        //[HttpPost]
        //public async Task<ActionResult<int?>> Post(int value1,int value2)
        //{
        //    return await _repository.GetPackageId(value1,value2);
        //}

        // PUT api/<PackageController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PackageController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [HttpGet("/package/bycatId/{id}")]
        public async Task<ActionResult<IEnumerable<Package>?>> GetPackagebycatId(int id)
        {
            if (await _repository.GetPackagesByCatId(id) == null)
            {
                return NotFound();
            }
            return await _repository.GetPackagesByCatId(id);
        }

        [HttpGet("/package/catdat/{id}/{departid}")]
        public async Task<ActionResult<Package>?> GetPackid(int id, int departid)
        {
            if (await _repository.GetPackidbycatdat(id,departid) == null)
            {
                return NotFound();
            }
            return await _repository.GetPackidbycatdat(id,departid);
        }
    }
}
