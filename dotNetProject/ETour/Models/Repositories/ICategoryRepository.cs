using Demo.Models;
using Microsoft.AspNetCore.Mvc;

namespace Demo.Models.Repositories
{
    public interface ICategoryRepository
    {
        Task<ActionResult<Category>?> GetCategory_Master(int Id);
        Task<ActionResult<IEnumerable<Category>>> GetAllCategory_Master();
        Task<ActionResult<Category>> Add(Category Category_Master);
        Task<Category> Delete(int Id);

        Task<ActionResult<IEnumerable<Category>>> GetcategoriesById(string Id);
    }
}
