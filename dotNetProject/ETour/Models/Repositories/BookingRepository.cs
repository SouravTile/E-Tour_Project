using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Demo.Models.Repositories
{
    public class BookingRepository:IBookingRepository
    {
        private readonly EtourContext context;

        public BookingRepository(EtourContext context)
        {
            this.context = context;
        }
        public async Task<ActionResult<Booking>> Add(Booking book)
        {
            context.Bookings.Add(book);
            await context.SaveChangesAsync();
            return book;
        }
        public async Task<ActionResult<IEnumerable<Booking>>> GetAllBookings()
        {
            if (context.Bookings == null)
            {
                return null;
            }

            return await context.Bookings.ToListAsync();
        }

        

        public async Task<ActionResult<Booking>?> GetBooking(int Id)
        {
            if (context.Bookings == null)
            {
                return null;
            }
            var category = await context.Bookings.FindAsync(Id);

            if (category == null)
            {
                return null;
            }

            return category;
        }
    }
}
