﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCoreNodeApp.Middlewares
{
    public class BaseResponseResult
    {
        public string Code { get; set; }
        public string Message { get; set; }
    }
}
