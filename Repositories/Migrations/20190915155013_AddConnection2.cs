using Microsoft.EntityFrameworkCore.Migrations;

namespace Repositories.Migrations
{
    public partial class AddConnection2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Files_Folders_FolderId",
                table: "Files");

            migrationBuilder.AlterColumn<int>(
                name: "FolderId",
                table: "Files",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Files_Folders_FolderId",
                table: "Files",
                column: "FolderId",
                principalTable: "Folders",
                principalColumn: "FolderId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Files_Folders_FolderId",
                table: "Files");

            migrationBuilder.AlterColumn<int>(
                name: "FolderId",
                table: "Files",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Files_Folders_FolderId",
                table: "Files",
                column: "FolderId",
                principalTable: "Folders",
                principalColumn: "FolderId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
