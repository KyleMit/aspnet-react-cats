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
    public class BreedsController : ControllerBase
    {

        private readonly ILogger<BreedsController> _logger;
        private readonly IConfiguration _configuration;

        public BreedsController(ILogger<BreedsController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<IEnumerable<Breed>> Get()
        {
            var BASE_URL = "https://api.thecatapi.com";

            using var client = new HttpClient();
            client.DefaultRequestHeaders.Add("x-api-key", _configuration["CatApiKey"]);

            var resp = await client.GetStringAsync(BASE_URL + "/v1/breeds");
            var breeds = JsonSerializer.Deserialize<Breed[]>(resp);

            return breeds;
        }
    }
}
