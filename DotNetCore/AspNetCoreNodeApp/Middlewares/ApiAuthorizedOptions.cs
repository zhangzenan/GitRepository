using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCoreNodeApp.Middlewares
{
    public class ApiAuthorizedOptions
    {
        public string EncryptKey { get; set; }

        public int ExpiredSecond { get; set; }
    }
}
