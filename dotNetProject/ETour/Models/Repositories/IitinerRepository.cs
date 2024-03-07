using Demo.Models;
using Microsoft.AspNetCore.Mvc;

namespace Demo.Models.Repositories
{
    public interface IitinerRepository
    {
        public Task<ActionResult<IEnumerable<ItineraryMaster>>> Getcatbyid(int id);
    }
}
