using Demo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Demo.Models.Repositories
{
    public class PackageRepository : IPackageRepository
    {
        private readonly EtourContext context;

        public PackageRepository(EtourContext context)
        {
            this.context = context;
        }
        public Task<ActionResult<Package>> Add(Package Package_Master)
        {
            throw new NotImplementedException();
        }

        public Task<Package> Delete(int Id)
        {
            throw new NotImplementedException();
        }

        public Task<ActionResult<IEnumerable<Package>>> GetAllPackage_Master()
        {
            throw new NotImplementedException();
        }

        //public async Task<int?> GetPackageId(int value1, int value2)
        //{
        //    if (context.Packages == null)
        //    {
        //        return null; // Indicate that the data is not available
        //    }

        //    var packageId = await context.Packages
        //        .FromSqlRaw($"SELECT PackageId FROM Package WHERE CatMasterId={value1} AND DepartureId={value2}")
        //        .FirstOrDefaultAsync();

        //    return packageId == 0 ? null : packageId; // Return null if package ID is not found
        //}



        public async Task<ActionResult<IEnumerable<Package>>> GetPackagesByCatId(int catId)
        {
            if (context.Packages == null)
            {
                return null;
            }
            //var sql = string.Format("SELECT * FROM Categories where subCatId ={0}", Id);
            //var categories = context.Categories.FromSqlRaw(sql);
            //return await categories.ToListAsync();
            return await context.Packages.FromSql($"SELECT * FROM Package where CatMasterId={catId}").ToListAsync();
        }

        public async Task<ActionResult<Package>?> GetPackage_Master(int Id)
        {
            if (context.Packages == null)
            {
                return null;
            }
            var package = await context.Packages.FindAsync(Id);

            if (package == null)
            {
                return null;
            }

            return package;
        }

        public async Task<ActionResult<Package?>> GetPackidbycatdat(int catmasterid, int departid)
        {

            // Write custom SQL query to select the first package containing the specified date in the range
            var package = await context.Packages
            .FromSql($"SELECT top 1 * FROM packages where CatMasterId={catmasterid} and DepartureId={departid}")
            .FirstOrDefaultAsync();

            return package;
        }
    }
}
