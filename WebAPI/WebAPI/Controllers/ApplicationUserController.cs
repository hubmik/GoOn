using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Infrastructure;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUserController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _signInManager;

        public ApplicationUserController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost]
        [Route("RegisterUser")]
        //POST : /api/ApplicationUser/Register
        public async Task<object> PostApplicationUser(Models.ApplicationUser model)
        {
            var applicationUser = new ApplicationUser
            {
                UserName = model.UserName,
                FullName = model.FullName,
                Email = model.Email
            };

            var result = await _userManager.CreateAsync(applicationUser, model.Password);

            return Ok(result);
        }
    }
}
