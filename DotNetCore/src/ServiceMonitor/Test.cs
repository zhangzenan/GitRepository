using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace ServiceMonitor
{
    public class Test
    {
        private HttpClient _client;
        private string applicationId = "1";
        private string applicationPassword = "123";
        private string timestamp = (DateTime.UtcNow - new DateTime(1970, 1, 1)).TotalSeconds.ToString();
        private string nonce = new Random().Next(1000, 9999).ToString();
        private string signature = string.Empty;
        public Test()
        {
            _client = new HttpClient();
            _client.BaseAddress = new Uri("http://localhost:8091/");
            _client.DefaultRequestHeaders.Clear();
            signature = $"{applicationId}-{timestamp}-{nonce}";
        }

        public async Task  Quest()
        {
            string queryString = $"applicationId={applicationId}&timestamp={timestamp}&nonce={nonce}&signature={signature}&applicationPassword={applicationPassword}";

            HttpResponseMessage message = await _client.GetAsync($"api/book/4939?{queryString}");
        }
    }
}
