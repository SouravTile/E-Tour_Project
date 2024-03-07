using Demo.Models;
using Microsoft.AspNetCore.Mvc;

namespace Demo.Models.Repositories
{
    public interface ICostRepository
    {
        Task<ActionResult<Cost>?> GetCost(int Id);
        Task<ActionResult<IEnumerable<Cost>>> GetAllCost();
        Task<ActionResult<Cost>> Add(Cost Cost);
        Task<Cost> Delete(int Id);
        Task<ActionResult<IEnumerable<Cost>>> GetCostsbycost(int Id);
        Task<ActionResult<IEnumerable<Cost>>> GetCostsById(int Id);

        Task<Cost> GetPackagesByDate(DateTime date);
    }
}
