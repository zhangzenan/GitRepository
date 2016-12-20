using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AspNetCoreNodeApp.Middlewares;

namespace AspNetCoreNodeApp.Controllers
{
    /// <summary>
    /// 测试API
    /// </summary>
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
       /// <summary>
       /// 获取内存中所有的字符串值。
       /// </summary>
       /// <returns></returns>
        [HttpGet]
        [Auth]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        /// <summary>
        /// 根据id获取指定的字符串的值。
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        /// <summary>
        /// 更改字符串的值。
        /// </summary>
        /// <param name="value"></param>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        /// <summary>
        /// 新增字符串的值。
        /// </summary>
        /// <param name="id"></param>
        /// <param name="value"></param>
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        /// <summary>
        /// 删除字符串的值。
        /// </summary>
        /// <param name="id"></param>
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
