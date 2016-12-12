using ServiceMonitor.Dapper;
using ServiceMonitor.装饰者模式;
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
        private readonly ProductRepository productRepository;
        public Program()
        {
            productRepository = new ProductRepository();
        }
        public static void Main(string[] args)
        {
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            //Console.WriteLine("This is my first dotnetCore console application!");
            //Console.WriteLine("中文测试");

            //var test = new Test();
            //test.Quest();

            ////装饰者模式客户端调用
            //Phone phone =new ApplePhone();

            ////现在想贴膜了
            //Decorator applePhoneWithSticker = new Sticker(phone);
            //// 扩展贴膜行为
            //applePhoneWithSticker.Print();
            //Console.WriteLine("----------------------\n");

            //// 现在我想有挂件了
            //Decorator applePhoneWithAccessories = new Accessories(phone);
            //// 扩展手机挂件行为
            //applePhoneWithAccessories.Print();
            //Console.WriteLine("----------------------\n");

            //// 现在我同时有贴膜和手机挂件了
            //Sticker sticker = new Sticker(phone);
            //Accessories applePhoneWithAccessoriesAndSticker = new Accessories(sticker);
            //applePhoneWithAccessoriesAndSticker.Print();

            //Dapper           

            var product = new Program().Get(1);
            Console.WriteLine(product.Name);
            Console.ReadKey();
        }

        public Product Get(int id)
        {
            return productRepository.GetByID(id);
        }


    }
}
