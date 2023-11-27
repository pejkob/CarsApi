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
                optionsBuilder.UseMySql("server=192.168.50.232; database=Cars; user=root; password=password", ServerVersion.AutoDetect("server=192.168.50.232; database=Cars; user=root; password=password"));
            }
        }

        public DbSet<Car> Cars { get; set; } = null!;
    }
}
