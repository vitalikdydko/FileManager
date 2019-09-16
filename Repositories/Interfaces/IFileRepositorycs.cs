using Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repositories.Interfaces
{
    public interface IFileRepository
    {
        Task<List<File>> GetFilesAsync(int folderId);
        Task AddFile(File file);
        Task DeleteFile(int fileId);
        Task UpdateFile(File file);
    }
}
