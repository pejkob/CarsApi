using CarsApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarsApi.Controllers
{
    [Route("cars")]
    [ApiController]
    public class CarController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Car>> Get()
        {
            using (var context = new CarContext())
            {
                return Ok(context.Cars.ToList());
            }

        }

        [HttpGet("{id}")]
        public ActionResult<Car> GetById(Guid id) 
        {
            using (var context = new CarContext()) 
            {
                var result = context.Cars.First(x => x.Id == id);
                return Ok(result.AsDto());
            }
        }


        [HttpPost]
        public ActionResult<CarDto> Post(CreatedCarDto car) 
        {
            using (var context = new CarContext())
            {
                var request = new Car
                {
                    Id = Guid.NewGuid(),
                    Name = car.Name,
                    Description = car.Description,
                    Color = car.Color,
                    CreatedTime = DateTime.Now
                };

                context.Cars.Add(request);
                context.SaveChanges();

                return Ok(request.AsDto());
            }
 
        }

        [HttpPut("{id}")]
        public ActionResult<Car> Put(Guid id, UpdateCarDto updateCarDto)
        {
            using (var context = new CarContext()) 
            {
                var modifyCar = context.Cars.First(x => x.Id == id);
                
                modifyCar.Name = updateCarDto.Name;
                modifyCar.Description = updateCarDto.Description;
                modifyCar.Color = updateCarDto.Color;

                context.Cars.Update(modifyCar);
                context.SaveChanges();

                return Ok(modifyCar.AsDto());
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<Car> Delete(Guid id) 
        {
            using (var context = new CarContext())
            {
                var deleteCar = context.Cars.First(x => x.Id == id);

                context.Cars.Remove(deleteCar);
                context.SaveChanges();
                return Ok(deleteCar.AsDto());
            }
        }
    }
}
