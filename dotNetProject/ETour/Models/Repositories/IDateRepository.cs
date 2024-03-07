using Demo.Models;
using Microsoft.AspNetCore.Mvc;

namespace Demo.Models.Repositories
{
    public interface IDateRepository
    {
        Task<ActionResult<Date>?> GetDate_Master(int Id);
        Task<ActionResult<IEnumerable<Date>>> GetAllDate_Master();
        Task<ActionResult<Date>> Add(Date Date_Master);
        Task<Date> Delete(int Id);

        Task<ActionResult<IEnumerable<Date>>> GetDatesByCatId(int catId);
        Task<ActionResult<IEnumerable<Date>>> GetPackByDate(DateTime Id,DateTime ind);
    }
}
