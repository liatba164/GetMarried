using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace GetMarried.Controllers
{ [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ServiceController : ApiController
    {
        Bll.ServiceBll serviceBll= new Bll.ServiceBll();

        // GET: api/Service
        [HttpGet]
        [Route("api/Service/GetAllServices/{category}")]
        public List<Dto.ServiceDto> GetAllServices(int category)
        {
            return  serviceBll.GetAllServices(category);
        }

        // GET: api/Service/5
        [HttpGet]
        [Route("api/Service/GetServiceById/{id}")]
        public Dto.ServiceDto GetServiceById(int id)
        {
            return  serviceBll.GetServiceById(id);
        }

        // POST: api/Service
        [HttpPost]
        [Route("api/Service/PostService")]
        public bool PostService(Dto.ServiceDto service)
        {
            return  serviceBll.PostService(service);
        }

        // PUT: api/Service/5
        [HttpPut]
        [Route("api/Service/PutService")]
        public bool PutService(Dto.ServiceDto Service)
        {
            return  serviceBll.PutService(Service);
        }

        // DELETE: api/Service/5
        [HttpDelete]
        [Route("api/Service/DeleteService/{id}")]
        public bool DeleteService(int id)
        {
            return  serviceBll.DeleteService(id);
        }
    }
}
