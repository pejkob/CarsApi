namespace CarsApi
{
    public record CarDto(Guid Id, string Name, string Description,string Color, DateTime CreatedTime);
    public record CreatedCarDto(string Name, string Description,string Color);
    public record UpdateCarDto(string Name, string Description,string Color);
}

