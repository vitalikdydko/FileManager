using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using FileManager.Services.Interfaces;
using FileManager.ViewModels;
using Models;
using Repositories.Interfaces;

namespace FileManager.Services.Implementation
{
    public class FileService : IFileService
    {
        IFileRepository _fileRepository;

        public FileService(IFileRepository fileRepository)
        {
            _fileRepository = fileRepository;
        }


        public async Task<List<File>> GetFiles(int folderId)
        {
            return await _fileRepository.GetFilesAsync(folderId);
        }

        public async Task SaveFileToDatabase(int folderId, string fileName, string contentType)
        {
            var dbFile = new File();
            dbFile.Name = fileName;
            dbFile.FolderId = folderId;
            dbFile.Extension = contentType;
            dbFile.Date = DateTime.Now;
            await _fileRepository.AddFile(dbFile);
        }

        public async Task UpdateFile(UpdateFile file)
        {
            //var dbFile = await _fileRepository.GetFilesAsync(file.FileId);
            //dbFolder.Name = folder.Name;
            //dbFolder.Date = DateTime.Now;
            //await _folderRepository.UpdateFolder(dbFolder);
        }

        public async Task DeleteFile(int fileId)
        {
            await _fileRepository.DeleteFile(fileId);
        }

    }
}
