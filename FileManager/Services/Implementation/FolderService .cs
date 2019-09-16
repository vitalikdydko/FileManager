using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using FileManager.Services.Interfaces;
using FileManager.ViewModels;
using Models;
using Repositories.Interfaces;

namespace FileManager.Services.Implementation
{
    public class FolderService : IFolderService
    {
        IFolderRepository _folderRepository;

        public FolderService(IFolderRepository folderRepository)
        {
            _folderRepository = folderRepository;
        }

        public async Task<List<Folder>> GetFolders()
        {
            var result = await _folderRepository.GetFoldersAsync();
            return result;
        }

        public async Task AddFolder(AddNewFolder folder)
        {
            var dbFolder = new Folder();
            dbFolder.Name = folder.Name;
            dbFolder.Date = DateTime.Now;
            await _folderRepository.AddFolder(dbFolder);
        }

        public async Task UpdateFolder(UpdateFolder folder)
        {
            var dbFolder = await _folderRepository.GetFolderAsync(folder.FolderId);
            dbFolder.Name = folder.Name;
            dbFolder.Date = DateTime.Now;
            await _folderRepository.UpdateFolder(dbFolder);
        }

        public async Task DeleteFolder(int folderId)
        {
            await _folderRepository.DeleteFolder(folderId);
        }
    }
}
