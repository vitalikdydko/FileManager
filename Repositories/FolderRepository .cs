using Microsoft.EntityFrameworkCore;
using Models;
using Repositories.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repositories
{
    public class FolderRepository : BaseRepository, IFolderRepository
    {
        public FolderRepository(string connectionString, IRepositoryContextFactory contextFactory) : base(connectionString, contextFactory) { }

        public async Task<List<Folder>> GetFoldersAsync()
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                return await context.Folders.ToListAsync();
            }

        }

        public async Task AddFolder(Folder folder)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                context.Folders.Add(folder);
                await context.SaveChangesAsync();
            }
        }

        public async Task UpdateFolder(Folder folder)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                context.Folders.Update(folder);
                await context.SaveChangesAsync();
            }
        }

        public async Task DeleteFolder(int folderId)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var folder = await context.Folders.FindAsync(folderId);
                context.Folders.Remove(folder);
                await context.SaveChangesAsync();
            }
        }

        public async Task<Folder> GetFolderAsync(int folderId)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                return await context.Folders.FindAsync(folderId);
            }

        }
    }
}
