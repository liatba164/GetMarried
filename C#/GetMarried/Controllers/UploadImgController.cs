using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace GetMarried.Controllers
{
    public class UploadImgController : ApiController
    {
        // GET: api/UploadImg
        //public HttpResponseMessage UploadImage()
        //{
            //string fileName = null;
            //var httpRequest = HttpContext.Current.Request;
            //var postedFile = httpRequest.Files["Image"];
            //fileName = new String(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(10).ToArray()).Replace(" ", "-");
            //fileName = fileName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile.FileName);
            //var filePath = HttpContext.Current.Server.MapPath("~/Image/" + fileName);
            //postedFile.SaveAs(filePath);
            //using(DBModel db=)

            //{
            //    tblFile =
            //}
            //return Request.CreateResponse(HttpStatusCode.Created):‏
//}

        // GET: api/UploadImg/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/UploadImg
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/UploadImg/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/UploadImg/5
        public void Delete(int id)
        {
        }
    }
}
