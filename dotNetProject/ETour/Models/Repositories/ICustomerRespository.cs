using Microsoft.AspNetCore.Mvc;

namespace Demo.Models.Repositories
{
    public interface ICustomerRepository
    {
        Task<ActionResult<CustomerMaster>> Add(CustomerMaster cust);

        Task<ActionResult<CustomerMaster>?> GetCustomer(int Id);
        Task<ActionResult<IEnumerable<CustomerMaster>>> GetAllCustomers();
        Task<ActionResult<CustomerMaster>> Login(String model, String mode2);
    }
}
