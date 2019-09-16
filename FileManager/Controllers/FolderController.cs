using FileManager.Services.Interfaces;
using FileManager.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace FileManager.Controllers
{
    [Route("api/[controller]")]
    public class FolderController : Controller
    {
        IFolderService _folderService;
        IFileService _fileService;

        public FolderController(IFolderService folderService, IFileService fileService)
        {
            _folderService = folderService;
            _fileService = fileService;
        }

        [Route("folders")]
        [HttpGet]
        public async Task<FoldersViewModel> GetFolders()
        {
            FoldersViewModel model = new FoldersViewModel();
            model.FolderList = await _folderService.GetFolders();
            return model;
        }

        [Route("folders")]
        [HttpPut]
        public async Task AddFolder([FromBody]AddNewFolder newFolder)
        {
            await _folderService.AddFolder(newFolder);
        }

        [Route("folders")]
        [HttpPost]
        public async Task UpdateFolder([FromBody]UpdateFolder folder)
        {
            await _folderService.UpdateFolder(folder);
        }

        [Route("folders")]
        [HttpDelete]
        public async Task DeleteFolder(int folderId)
        {
            await _folderService.DeleteFolder(folderId);
        }
    }
}