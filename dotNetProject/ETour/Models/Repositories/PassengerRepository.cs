using Demo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Demo.Models.Repositories
{
    public class PassengerRepository : IPassengerRepository
    {
        private readonly EtourContext context;

        public PassengerRepository(EtourContext context)
        {
            this.context = context;
        }

        public async Task<ActionResult<Pass>> AddP(Pass pm)
        {
            context.Passes.Add(pm);
          await  context.SaveChangesAsync();
            return pm;
        }

        public async Task<ActionResult<IEnumerable<Pass>>> GetAllPassengers()
        {
            if (context.Categories == null)
            {
                return null;
            }

            return await context.Passes.ToListAsync();
        }

        public async Task<ActionResult<Pass>> GetPackagesByCatId(int catId)
        {

            // Write custom SQL query to select the first package containing the specified date in the range
            var package = await context.Passes.FromSql($"select * from Passes where Custid={catId}").FirstOrDefaultAsync();

            return package;
        }
        public async Task<ActionResult<int>> GetCount(int catId)
        {

            // Write custom SQL query to select the first package containing the specified date in the range
                var c = (from rg in context.Passes where rg.CustId==catId select rg).ToList().Count();
            //int a=  context.Passes.FromSql($"select count(*) from Passes where custid={catId}")

            return c;
        }
        public async Task<ActionResult<int>> Gettotal(int catId)
        {
         int amt= (from rg in context.Passes where rg.CustId == catId select rg.PassengerAmount).Sum();


            // Write custom SQL query to select the first package containing the specified date in the range
            //var variable = await context.Passes.FromSqlRaw($"select sum(PassengerAmount) from Passes where custid={catId}");

            return amt;
        }

        public async Task<ActionResult<IEnumerable<Pass>>> GetPassengers(int catId)
        {
    
            return   await context.Passes.FromSql($"select * from Passes where custid={catId}").ToListAsync();   
        }
    }
}

