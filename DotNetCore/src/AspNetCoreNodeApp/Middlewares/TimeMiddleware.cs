using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCoreNodeApp.Middlewares
{
    /// <summary>
    /// 计时器中间件
    /// </summary>
    public class TimeMiddleware
    {
        private RequestDelegate _next;
        private StopWatch _watch;

        public TimeMiddleware(RequestDelegate next,StopWatch watch)
        {
            _next = next;
            _watch = watch;
        }

        public async Task Invoke(HttpContext context)
        {
            _watch?.Start();
            await _next.Invoke(context);//调用后面中间件
            await context.Response.WriteAsync($"<div>共耗时：{_watch?.GetMillionSeconds()}毫秒</div>");
        }
    }
}
