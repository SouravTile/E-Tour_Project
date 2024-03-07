using Demo.Models;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Globalization;

namespace Demo.Models.Repositories
{
    public class CostRepository : ICostRepository
    {
        private readonly EtourContext context;

        public CostRepository(EtourContext context)
        {
            this.context = context;
        }
        public Task<ActionResult<Cost>> Add(Cost Cost)
        {
            throw new NotImplementedException();
        }

        public Task<Cost> Delete(int Id)
        {
            throw new NotImplementedException();
        }

        public Task<ActionResult<IEnumerable<Cost>>> GetAllCost()
        {
            throw new NotImplementedException();
        }

        public async Task<ActionResult<Cost>?> GetCost(int Id)
        {
            if (context.Costs == null)
            {
                return null;
            }
            var package = await context.Costs.FindAsync(Id);

            if (package == null)
            {
                return null;
            }

            return package;
        }

        //public async Task<ActionResult<Cost>> GetCostsByDate(string date)
        //{
        //    if (context.Costs == null)
        //    {
        //        return null;
        //    }
        //    //var sql = string.Format("SELECT * FROM Categories where subCatId ={0}", Id);
        //    //var categories = context.Categories.FromSqlRaw(sql);
        //    //return await categories.ToListAsync();
        //    return await context.Costs.FromSql($"SELECT * FROM Cost where ValidFrom<={date} and ValidTo>={date}").CountAsync;
        //}

        //public async Task<PackageMaster> GetPackagesByDate(string date)
        //{
        //    Console.WriteLine(date);
        //    // Convert string date to DateTime object
        //    DateTime parsedDate = DateTime.Parse(date);

        //    // Write custom SQL query to select packages containing the specified date in the range
        //    var packages = await context.Packages
        //        .FromSqlRaw($"SELECT * FROM PackageMaster WHERE ValidFrom <= {parsedDate} AND ValidTo >= {parsedDate}")
        //        .FirstOrDefaultAsync();

        //    return packages;
        //}

        public async Task<Cost> GetPackagesByDate(DateTime date)
        {
            // Remove surrounding quotes from the date string if present


            string formattedDate = date.ToString("yyyy-MM-ddTHH:mm:ss");

            // Write custom SQL query to select the first package containing the specified date in the range
            var package = await context.Costs
                .FromSql($"SELECT top 1 * FROM Costs WHERE ValidFrom <= {date} AND ValidTo >= {date}")
                .FirstOrDefaultAsync();

            return package;
        }


        public async Task<ActionResult<IEnumerable<Cost>>> GetCostsById(int Id)
        {
            if (context.Costs == null)
            {
                return null;
            }
            //var sql = string.Format("SELECT * FROM Categories where subCatId ={0}", Id);
            //var categories = context.Categories.FromSqlRaw(sql);
            //return await categories.ToListAsync();
            return await context.Costs.FromSql($"SELECT * FROM Costs where CatMasterId={Id}").ToListAsync();
        }
        public async Task<ActionResult<IEnumerable<Cost>>> GetCostsbycost(int Id)
        {
            if (context.Costs == null)
            {
                return null;
            }
            //var sql = string.Format("SELECT * FROM Categories where subCatId ={0}", Id);
            //var categories = context.Categories.FromSqlRaw(sql);
            //return await categories.ToListAsync();
            return await context.Costs.FromSql($"SELECT * FROM Costs where Cost={Id}").ToListAsync();
        }

    }
}
