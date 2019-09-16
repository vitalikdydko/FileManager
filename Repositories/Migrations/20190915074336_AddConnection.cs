using Microsoft.EntityFrameworkCore.Migrations;

namespace Repositories.Migrations
{
    public partial class AddConnection : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CreatedDate",
                table: "Folders",
                newName: "Date");

            migrationBuilder.RenameColumn(
                name: "CreatedDate",
                table: "Files",
                newName: "Date");

            migrationBuilder.AddColumn<int>(
                name: "FolderId",
                table: "Files",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Files_FolderId",
                table: "Files",
                column: "FolderId");

            migrationBuilder.AddForeignKey(
                name: "FK_Files_Folders_FolderId",
                table: "Files",
                column: "FolderId",
                principalTable: "Folders",
                principalColumn: "FolderId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Files_Folders_FolderId",
                table: "Files");

            migrationBuilder.DropIndex(
                name: "IX_Files_FolderId",
                table: "Files");

            migrationBuilder.DropColumn(
                name: "FolderId",
                table: "Files");

            migrationBuilder.RenameColumn(
                name: "Date",
                table: "Folders",
                newName: "CreatedDate");

            migrationBuilder.RenameColumn(
                name: "Date",
                table: "Files",
                newName: "CreatedDate");
        }
    }
}
