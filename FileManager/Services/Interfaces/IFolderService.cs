using FileManager.ViewModels;
using Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FileManager.Services.Interfaces
{
    public interface IFolderService
    {
        Task<List<Folder>> GetFolders();
        Task AddFolder(AddNewFolder folder);
        Task DeleteFolder(int folderId);
        Task UpdateFolder(UpdateFolder folder);
    }
}
