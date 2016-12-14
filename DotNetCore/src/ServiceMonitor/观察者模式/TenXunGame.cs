using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServiceMonitor.观察者模式
{
    /// <summary>
    /// 具体订阅号类
    /// </summary>
    public class TenXunGame : TenXun
    {
        public TenXunGame(string symbol, string info) : base(symbol, info)
        {
        }
    }
}
