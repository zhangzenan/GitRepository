using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCoreNodeApp.Middlewares
{
    public class RequestInfo
    {
        public string ApplicationId { get; set; }

        public string Timestamp { get; set; }

        public string Nonce { get; set; }

        public string ApplicationPassword { get; set; }

        public string Sinature { get; set; }
    }
}
