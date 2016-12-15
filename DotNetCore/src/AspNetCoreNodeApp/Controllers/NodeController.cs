using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.NodeServices;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AspNetCoreNodeApp.Controllers
{
    [Route("api/[controller]")]
    public class NodeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// NodeJs调用
        /// </summary>
        /// <param name="nodeServices"></param>
        /// <returns></returns>
        [Route("Order")]
        public async Task<IActionResult> Get([FromServices] INodeServices nodeServices)
        {
            var result = await nodeServices.InvokeAsync<int>("./Node/addNumbers",1,2);
            return Content("1+2="+result);
        }
    }
}
