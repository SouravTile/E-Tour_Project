
using Demo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Demo.Models.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly EtourContext context;

        public CategoryRepository(EtourContext context)
        {
            this.context = context;
        }
        public async Task<ActionResult<Category>> Add(Category Category_Master)
        {
            context.Categories.Add(Category_Master);
            await context.SaveChangesAsync();
            return Category_Master;
        }

        public async Task<Category> Delete(int Id)
        {
            Category category = context.Categories.Find(Id);
            if (category != null)
            {
                context.Categories.Remove(category);
                await context.SaveChangesAsync();
            }
            return category;
        }

        public async Task<ActionResult<IEnumerable<Category>>> GetAllCategory_Master()
        {
            if (context.Categories == null)
            {
                return null;
            }

            return await context.Categories.ToListAsync();
        }

        public async Task<ActionResult<IEnumerable<Category>>> GetcategoriesById(string Id)
        {

            if (context.Categories == null)
            {
                return null;
            }
            //var sql = string.Format("SELECT * FROM Categories where subCatId ={0}", Id);
            //var categories = context.Categories.FromSqlRaw(sql);
            //return await categories.ToListAsync();
            var value = Id;
            return await context.Categories.FromSql($"SELECT * FROM Categories where subCatId ={value}").ToListAsync();
        }

        public async Task<ActionResult<Category>?> GetCategory_Master(int Id)
        {
            if (context.Categories == null)
            {
                return null;
            }
            var category = await context.Categories.FindAsync(Id);

            if (category == null)
            {
                return null;
            }

            return category;
        }
    }
}
