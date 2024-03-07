using Demo.Models;
using Microsoft.AspNetCore.Mvc;

namespace Demo.Models.Repositories
{
    public interface IPassengerRepository
    {
       Task<ActionResult<Pass>> GetPackagesByCatId(int catId);
        Task<ActionResult<Pass>> AddP(Pass pm);
        Task<ActionResult<IEnumerable<Pass>>> GetAllPassengers();
        Task<ActionResult<int>> Gettotal(int catId);
        Task<ActionResult<int>> GetCount(int catId);
        Task<ActionResult<IEnumerable<Pass>>> GetPassengers(int catId);
    }
}
