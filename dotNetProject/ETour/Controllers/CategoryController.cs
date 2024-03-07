
using Demo.Models;
using Demo.Models.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Query;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _repository;

        public CategoryController(ICategoryRepository repository)
        {
            _repository = repository;
        }
        // GET: api/<CategoryController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>?>> GetCategories()
        {
            if (await _repository.GetAllCategory_Master() == null)
            {
                return NotFound();
            }

            return await _repository.GetAllCategory_Master();
        }

        // GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> GetCategory_Master(int id)
        {
            var category = await _repository.GetCategory_Master(id);
            return category == null ? NotFound() : category;
        }
        //GET api/<CategoryController>/bycatId/DOM
        [HttpGet("/bycatId/{id}")]
        public async Task<ActionResult<IEnumerable<Category>?>> GetCategory_MasterbycatId(String id)
        {
            if (await _repository.GetcategoriesById(id) == null)
            {
                return NotFound();
            }
            return await _repository.GetcategoriesById(id);
        }

        // POST api/<CategoryController>
        [HttpPost]
        public async Task<ActionResult<Category>> Post(Category category)
        {
            await _repository.Add(category);
            return CreatedAtAction("PostCategory", new { id = category.CatMasterId }, category);
        }


        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            if (_repository.GetAllCategory_Master() == null)
            {
                return NotFound();
            }
            var category = await _repository.Delete(id);
            if (category == null)
            {
                return NotFound();
            }

            // await _repository.Delete(employee.Id);


            return NoContent();
        }
    }
}
