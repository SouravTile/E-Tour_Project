using Demo.Models;
using Microsoft.AspNetCore.Mvc;

namespace Demo.Models.Repositories
{
    public interface IPackageRepository
    {
        Task<ActionResult<Package>?> GetPackage_Master(int Id);
        Task<ActionResult<IEnumerable<Package>>> GetAllPackage_Master();
        Task<ActionResult<Package>> Add(Package Package_Master);
        Task<Package> Delete(int Id);

        Task<ActionResult<IEnumerable<Package>>> GetPackagesByCatId(int catId);
        Task<ActionResult<Package>?> GetPackidbycatdat(int catmasterid, int departid);
        //Task<int?> GetPackageId(int value1, int value2);
    }
}
