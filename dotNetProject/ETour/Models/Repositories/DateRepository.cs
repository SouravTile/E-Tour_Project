using Demo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Demo.Models.Repositories
{
    public class DateRepository : IDateRepository
    {
        private readonly EtourContext context;

        public DateRepository(EtourContext context)
        {
            this.context = context;
        }
        public Task<ActionResult<Date>> Add(Date Date_Master)
        {
            throw new NotImplementedException();
        }

        public Task<Date> Delete(int Id)
        {
            throw new NotImplementedException();
        }

        public Task<ActionResult<IEnumerable<Date>>> GetAllDate_Master()
        {
            throw new NotImplementedException();
        }

        public async Task<ActionResult<IEnumerable<Date>>> GetDatesByCatId(int catId)
        {
            if (context.Dates == null)
            {
                return null;
            }
            //var sql = string.Format("SELECT * FROM Categories where subCatId ={0}", Id);
            //var categories = context.Categories.FromSqlRaw(sql);
            //return await categories.ToListAsync();
            return await context.Dates.FromSql($"SELECT * FROM Dates where CatMasterId={catId}").ToListAsync();
        }

        public async Task<ActionResult<Date>?> GetDate_Master(int Id)
        {
            if (context.Dates == null)
            {
                return null;
            }
            var package = await context.Dates.FindAsync(Id);

            if (package == null)
            {
                return null;
            }

            return package;
        }

        public async Task<ActionResult<IEnumerable<Date>>> GetPackByDate(DateTime date, DateTime ind)
        {
            if (context.Dates == null)
            {
                return null;
            }
            //var sql = string.Format("SELECT * FROM Categories where subCatId ={0}", Id);
            //var categories = context.Categories.FromSqlRaw(sql);
            //return await categories.ToListAsync();
            var package = await context.Dates
            .FromSql($"SELECT  * FROM Dates WHERE DepartDate >= {date} AND  DepartDate  <= {ind}")
            .ToListAsync();

            return package;
        }
    }
}
