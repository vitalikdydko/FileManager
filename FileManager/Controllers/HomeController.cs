﻿using Microsoft.AspNetCore.Mvc;

namespace FileManager.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}