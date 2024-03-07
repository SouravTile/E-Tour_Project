using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol.Plugins;

namespace Demo.Models.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly EtourContext context;

        public CustomerRepository(EtourContext context)
        {
            this.context = context;
        }
        public async Task<ActionResult<CustomerMaster>> Add(CustomerMaster cust)
        {
             context.CustomerMasters.Add(cust);
            await context.SaveChangesAsync();
            return cust;
        }
        public async Task<ActionResult<IEnumerable<CustomerMaster>>> GetAllCustomers()
        {
            if (context.CustomerMasters == null)
            {
                return null;
            }

            return await context.CustomerMasters.ToListAsync();
        }
        
        public async Task<ActionResult<CustomerMaster>> Login(String model,String mode2)
        {
                var customer = await context.CustomerMasters.FirstOrDefaultAsync(c => c.Username == model && c.Password == mode2);

                if (customer == null)
                {
                    return null;
                }
                else
                {
                    return customer;
                }
        }
        public async Task<ActionResult<CustomerMaster>?> GetCustomer(int Id)
        {
            if (context.CustomerMasters == null)
            {
                return null;
            }
            var category = await context.CustomerMasters.FindAsync(Id);

            if (category == null)
            {
                return null;
            }

            return category;
        }

    }
}

    

