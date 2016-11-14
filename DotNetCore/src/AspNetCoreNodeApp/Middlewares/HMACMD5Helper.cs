using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace AspNetCoreNodeApp.Middlewares
{
    public static class HMACMD5Helper
    {
       

        public static string GetEncryptResult(string source, string key)
        {
            //HMACMD5 hmacmd = new HMACMD5(Encoding.Default.GetBytes(key));
            //byte[] inArray = hmacmd.ComputeHash(Encoding.Default.GetBytes(source));
            //StringBuilder sb = new StringBuilder();

            //for (int i = 0; i < inArray.Length; i++)
            //{
            //    sb.Append(inArray[i].ToString("X2"));
            //}

            //hmacmd.Clear();

            //return sb.ToString();
            return source;
        }
    }
}
