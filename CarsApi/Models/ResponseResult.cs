﻿namespace CarsApi.Models
{
    public class ResponseResult
    {
        public object Result { get; set; }
        public bool IsSuccess { get; set; }=false;

        public string Message { get; set; }
    }
}
