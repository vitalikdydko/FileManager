using Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repositories.Interfaces
{
    public interface IFolderRepository
    {
        Task <List<Folder>> GetFoldersAsync();
        Task AddFolder(Folder folder);
        Task UpdateFolder(Folder folder);
        Task DeleteFolder(int folderId);
        Task<Folder> GetFolderAsync(int folderId);
    }
}
