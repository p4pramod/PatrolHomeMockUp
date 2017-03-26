using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace PatrolHomeMockUp
{
    /// <summary>
    /// Summary description for contact
    /// </summary>
    public class contact : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "application/json";

            List<emp> list = new List<emp>();

            list.Add(new emp() { email = "p1.k@g.com", image = "http", name = "Pramod", _lowername = "pramod" });
            list.Add(new emp() { email = "p2.k@g.com", image = "http", name = "Mohan", _lowername = "mohan" });
            list.Add(new emp() { email = "p3.k@g.com", image = "http", name = "Sohan", _lowername = "sohan" });
            list.Add(new emp() { email = "p4.k@g.com", image = "http", name = "Ram", _lowername = "ram" });
            list.Add(new emp() { email = "p5.k@g.com", image = "http", name = "Shyam", _lowername = "shyam" });
            list.Add(new emp() { email = "p6.k@g.com", image = "http", name = "Geeta", _lowername = "geeta" });

            JavaScriptSerializer serializer = new JavaScriptSerializer();
            var result = list.Where(o => o._lowername.StartsWith(context.Request.QueryString["key"])).ToList();
            context.Response.Write(serializer.Serialize(result));
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }


    class emp
    {
        public string name { get; set; }

        public string email { get; set; }

        public string _lowername { get; set; }

        public string image { get; set; }
    }
}