using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServiceMonitor.观察者模式
{
    // 委托充当订阅者接口类
    public delegate void NotifyEventHandler(object sender);

    //抽象订阅号类
    public class TenXun
    {
        public NotifyEventHandler NotifyEvent;

        public string Symbol { get; set; }
        public string Info { get; set; }
        public TenXun(string symbol, string info)
        {
            this.Symbol = symbol;
            this.Info = info;
        }

        #region 新增对订阅号列表的维护操作

        public void AddObserver(NotifyEventHandler ob)
        {
            NotifyEvent += ob;
        }

        public void RemoveObserver(NotifyEventHandler ob)
        {
            NotifyEvent -= ob;
        }
        #endregion

        public void Update()
        {
            if(NotifyEvent!=null)
            {
                NotifyEvent(this);
            }
        }
    }
}
