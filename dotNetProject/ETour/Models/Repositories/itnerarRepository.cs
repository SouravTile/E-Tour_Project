using Demo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Demo.Models.Repositories
{
    public class itnerarRepository: IitinerRepository
    {
        private readonly EtourContext context;

        public itnerarRepository(EtourContext context)
        {
            this.context = context;
        }
        //public async Task<ActionResult<IEnumerable<ItineraryMaster>>> Getcatbyid(int id)
        // {
        //     if (context.ItineraryMasters == null)
        //     {
        //         return null;
        //     }
        //     //var sql = string.Format("SELECT * FROM Categories where subCatId ={0}", Id);
        //     //var categories = context.Categories.FromSqlRaw(sql);
        //     //return await categories.ToListAsync();
        //     return await context.ItineraryMasters.FromSql($"SELECT * FROM  ItineraryMasters where CatMasterId={id}").ToListAsync();
        // }
        public async Task<ActionResult<IEnumerable<ItineraryMaster>>> Getcatbyid(int id)
        {
            var itineraryMasters = await context.ItineraryMasters
                                                .FromSqlRaw($"SELECT * FROM ItineraryMasters WHERE CatMasterId = {id}")
                                                .ToListAsync();

            if (itineraryMasters == null || !itineraryMasters.Any())
            {
                return null; // Or return an appropriate response indicating no records found
            }

            return itineraryMasters;
        }


    }
}
