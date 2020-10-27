using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using react_aspnet.models;

namespace react_aspnet.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CatController : ControllerBase
    {

        private readonly ILogger<CatController> _logger;
        private readonly IConfiguration _configuration;

        public CatController(ILogger<CatController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<Cat> Get()
        {
            var BASE_URL = "https://api.thecatapi.com";

            using var client = new HttpClient();
            client.DefaultRequestHeaders.Add("x-api-key", _configuration["CatApiKey"]);

            var resp = await client.GetStringAsync(BASE_URL + "/v1/images/search");
            var cats = JsonSerializer.Deserialize<Cat[]>(resp);

            return cats[0];
        }
    }
}
