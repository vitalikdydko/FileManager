using Microsoft.EntityFrameworkCore;
using Models;

namespace Repositories
{
    public class RepositoryContext : DbContext
    {
        public RepositoryContext(DbContextOptions<RepositoryContext> options) : base(options)
        {

        }

        public DbSet<Folder> Folders { get; set; }
        public DbSet<File> Files { get; set; }
    }
}
