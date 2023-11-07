using Microsoft.EntityFrameworkCore;

namespace CarsApi.Models
{
    public class CarContext : DbContext
    {
        public CarContext() { }
        public CarContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("server=localhost; database=cars; user=root; password=", ServerVersion.AutoDetect("server=localhost; database=cars; user=root; password="));
            }
        }

        public DbSet<Car> Cars { get; set; } = null!;
    }
}
