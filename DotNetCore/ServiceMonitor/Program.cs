using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace ServiceMonitor
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            Console.WriteLine("This is my first dotnetCore console application!");
            Console.WriteLine("中文测试");

            var test = new Test();
            test.Quest();

            Console.ReadKey();
        }

          
    }
}
