using Demo.Models;
using Demo.Models.Repositories;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly IBookingRepository _repository;

        public BookingController(IBookingRepository repository)
        {
            _repository = repository;
        }
        // GET: api/<BookingController>

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Booking>?>> GetCategories()
        {
            if (await _repository.GetAllBookings() == null)
            {
                return NotFound();
            }

            return await _repository.GetAllBookings();
        }

        // GET api/<BookingController>/5

        [HttpGet("{id}")]
        public async Task<ActionResult<Booking>> Getbooking(int id)
        {
            var category = await _repository.GetBooking(id);
            return category == null ? NotFound() : category;
        }

        // POST api/<BookingController>
        [HttpPost]
        public async Task<ActionResult<Booking>> Post(Booking category)
        {
            await _repository.Add(category);
            return CreatedAtAction("Getbooking", new { id = category.BookingId }, category);
        }

        // PUT api/<BookingController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<BookingController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
