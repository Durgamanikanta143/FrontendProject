using EduSphere.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace EduSphere.Api.Data
{
    public class EduSphereDbContext : DbContext
    {
        public EduSphereDbContext(
            DbContextOptions<EduSphereDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}