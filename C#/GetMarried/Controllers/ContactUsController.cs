using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace GetMarried.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ContactUsController : ApiController
    {
        [HttpGet]
        [Route("api/ContactUs/GetAllContact")]
        public List<Dto.ContactUsDto> GetAllContact()
        {
            return Bll.ContactUsBll.GetAllContact();
        }

        // GET: api/ContactUs/5

        [HttpPost]
        [Route("api/ContactUs/PostContactUs")]
        public bool PostContactUs(Dto.ContactUsDto Contact)
        {
            return Bll.ContactUsBll.PostContactUs(Contact);
        }
        [HttpPut]
        [Route("api/ContactUs/PutContactUs")]
        public bool PutContactUs(Dto.ContactUsDto Contact)
        {
            return Bll.ContactUsBll.PutContactUs(Contact);
        }

        // DELETE: api/ContactUs/5
        [HttpDelete]
        [Route("api/ContactUs/DeleteContactUs/{id}")]
        public bool DeleteContactUs(int id)
        {
            return Bll.ContactUsBll.DeleteContactUs(id);
        }
    }
}
