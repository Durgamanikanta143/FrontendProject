using EduSphere.Api.Data;
using EduSphere.Api.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EduSphere.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly EduSphereDbContext _context;

        public AuthController(EduSphereDbContext context)
        {
            _context = context;
        }

        [HttpGet("test")]
        public IActionResult Test()
        {
            return Ok("EduSphere API is working!");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginRequestDto request)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(x => x.Email == request.Email);

            if (user == null)
            {
                return Unauthorized("Invalid email or password.");
            }

            return Ok(new
            {
                message = "User found",
                userId = user.Id,
                fullName = user.FullName,
                role = user.Role
            });
        }
    }
}