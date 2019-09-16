using System;

namespace Models
{
    public class File
    {
        public int FileId { get; set; }
        public string Name { get; set; }
        public string Extension { get; set; }
        public DateTime Date { get; set; }
        public int FolderId { get; set; }

        public virtual Folder Folder { get; set; }
    }
}
