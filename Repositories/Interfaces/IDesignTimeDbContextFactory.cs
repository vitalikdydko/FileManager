using Microsoft.EntityFrameworkCore;

namespace Repositories.Interfaces
{
    public interface IDesignTimeDbContextFactory<out TContext> where TContext : DbContext
    {
        TContext CreateDbContext(string[] args);
    }
}
