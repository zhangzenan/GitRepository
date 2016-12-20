using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.NodeServices;



namespace AspNetCoreNodeApp.Controllers
{
    /// <summary>
    /// NodeAPI
    /// </summary>
    [Route("api/[controller]")]
    public class NodeController : Controller
    {    

        /// <summary>
        /// NodeJs调用
        /// </summary>
        /// <param name="nodeServices"></param>
        /// <returns></returns>
        [Route("Order")]
        [HttpGet]
        public async Task<IActionResult> Get([FromServices] INodeServices nodeServices)
        {
            var result = await nodeServices.InvokeAsync<int>("./Node/addNumbers", 1, 2);
            return Content("1+2=" + result);
        }
    }
}
