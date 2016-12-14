using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServiceMonitor.观察者模式
{
    /// <summary>
    /// 具体订阅者类
    /// </summary>
    public class Subscriber
    {
        public string Name { get; set; }
        public Subscriber(string name)
        {
            this.Name = name;
        }

        public void ReceiveAndPrint(Object obj)
        {
            TenXun tenxun = obj as TenXun;

            if (tenxun != null)
            {
                Console.WriteLine("Notified {0} of {1}'s" + " Info is: {2}", Name, tenxun.Symbol, tenxun.Info);
            }
        }
    }
}
