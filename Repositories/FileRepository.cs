using Microsoft.EntityFrameworkCore;
using Models;
using Repositories.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repositories
{
    public class FileRepository : BaseRepository, IFileRepository
    {
        public FileRepository(string connectionString, IRepositoryContextFactory contextFactory) : base(connectionString, contextFactory) { }

        public async Task<List<File>> GetFilesAsync(int folderId)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                return await context.Files.Where(x => x.Folder.FolderId == folderId).ToListAsync();
            }
        }

        public async Task AddFile(File file)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                context.Files.Add(file);
                await context.SaveChangesAsync();
            }
        }

        public async Task DeleteFile(int fileId)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var file = await context.Files.FindAsync(fileId);
                context.Files.Remove(file);
                await context.SaveChangesAsync();
            }
        }

        public async Task UpdateFile(File file)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                context.Files.Update(file);
                await context.SaveChangesAsync();
            }
        }
    }
}
