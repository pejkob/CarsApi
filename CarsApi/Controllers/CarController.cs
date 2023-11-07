using CarsApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarsApi.Controllers
{
    [Route("cars")]
    [ApiController]

    public class CarController : ControllerBase
    {
        public ResponseResult response;
        public CarController()
        {
            response = new();
        }

        [HttpGet]
        public ActionResult<IEnumerable<Car>> Get()
        {
            using (var context = new CarContext())
            {
                var result = context.Cars.ToList();
                if (result != null)
                {
                    response.Result = result;
                    response.IsSuccess = true;
                    response.Message = "Sikeres lekérdezés";
                    return StatusCode(200,response);
                }
                else
                {
                    response.IsSuccess = false;
                    response.Message = "Hiba";
                    return BadRequest(response);
                }
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Car> GetById(Guid id)
        {
            using (var context = new CarContext())
            {
                var result = context.Cars.First(x => x.Id == id);
                if (result != null)
                {
                    response.Result = result;
                    response.IsSuccess = true;
                    response.Message = "Sikeres lekérdezés";

                    return Ok(response);
                }
                else
                {
                    response.Message = "Hiba";
                    return BadRequest(response.Message);
                }
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
                if (request != null)
                {
                    context.Cars.Add(request);
                    context.SaveChanges();

                    response.Result = request;
                    response.IsSuccess = true;
                    response.Message = "Sikeres hozzáadás";

                    return StatusCode(201,response);
                }
                else
                {
                    response.Message = "Hiba";
                    return BadRequest(response.Message);
                }
            }

        }

        [HttpPut("{id}")]
        public ActionResult<Car> Put(Guid id, UpdateCarDto updateCarDto)
        {
            using (var context = new CarContext())
            {
                var modifyCar = context.Cars.First(x => x.Id == id);
                if (modifyCar != null)
                {
                    response.Result = modifyCar;
                    response.IsSuccess = true;
                    response.Message = "Sikeres módosítás";

                    modifyCar.Name = updateCarDto.Name;
                    modifyCar.Description = updateCarDto.Description;
                    modifyCar.Color = updateCarDto.Color;

                    context.Cars.Update(modifyCar);
                    context.SaveChanges();

                    return Ok(response);
                }
                else
                {
                    response.Message = "Hiba";
                    return BadRequest(response);
                }
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<Car> Delete(Guid id)
        {
            using (var context = new CarContext())
            {
                var deleteCar = context.Cars.FirstOrDefault(x => x.Id == id);

                if (deleteCar != null)
                {
                    response.Result = deleteCar;
                    response.IsSuccess = true;
                    response.Message = "Sikeres törlés";
                    context.Cars.Remove(deleteCar);
                    context.SaveChanges();
                    return Ok(response);
                }
                else
                {
                    response.Message = "Hiba";
                    return BadRequest(response);
                }
            }
        }
    }
}
