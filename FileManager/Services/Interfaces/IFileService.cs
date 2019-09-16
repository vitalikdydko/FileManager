using Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FileManager.Services.Interfaces
{
    public interface IFileService
    {
        Task<List<File>> GetFiles(int folderId);
        Task SaveFileToDatabase(int folderId, string fileName, string contentType);
        Task DeleteFile(int fileId);
    }
}
