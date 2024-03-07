using Microsoft.AspNetCore.Mvc;

namespace Demo.Models.Repositories
{
    public interface IBookingRepository
    {
        Task<ActionResult<Booking>?> GetBooking(int Id);
        Task<ActionResult<IEnumerable<Booking>>> GetAllBookings();
        Task<ActionResult<Booking>> Add(Booking booking);
    }
}
