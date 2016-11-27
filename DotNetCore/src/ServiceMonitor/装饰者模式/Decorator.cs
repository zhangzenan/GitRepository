using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServiceMonitor.装饰者模式
{
    /// <summary>
    /// 装饰抽象类,要让装饰完全取代抽象组件，所以必须继承自Photo
    /// </summary>
    public abstract class Decorator:Phone
    {
        private Phone phone;

        public Decorator(Phone p)
        {
            this.phone = p;
        }

        public override void Print()
        {
            if(phone!=null)
            {
                phone.Print();
            }
        }
    }
}
