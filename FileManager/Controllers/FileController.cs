using FileManager.Services.Interfaces;
using FileManager.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Threading.Tasks;

namespace FileManager.Controllers
{
    [Route("api/[controller]")]
    public class FileController : Controller
    {
        IFileService _fileService;

        public FileController(IFileService fileService)
        {
            _fileService = fileService;
        }

        [Route("files")]
        [HttpGet]
        public async Task<FilesViewModel> GetFiles(int folderId)
        {
            FilesViewModel model = new FilesViewModel();
            model.FileList = await _fileService.GetFiles(folderId);
            return model;
        }

        [Route("files")]
        [HttpPost]
        public async Task UploadFile([FromForm]IFormFile body, int folderId)
        {
            var filename = body.FileName;
            var contentType = body.ContentType;

           await _fileService.SaveFileToDatabase(folderId, filename, contentType);
        }

        [Route("files")]
        [HttpDelete]
        public async Task DeleteFile(int fileId)
        {
            await _fileService.DeleteFile(fileId);
        }

    }
}