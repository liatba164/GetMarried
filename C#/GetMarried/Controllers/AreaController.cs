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
    public class AreaController : ApiController
    {
        Bll.AreaBll areaBll = new Bll.AreaBll();
        // GET: api/Area
        [HttpGet]
        [Route("api/Area/GetAllArea")]
        public List<Dto.AreaDto> GetAllArea()
        {
            return areaBll.GetAllArea();
        }

        // GET: api/Area/5
        [HttpGet]
        [Route("api/Area/GetAreaById/{id}")]
        public Dto.AreaDto GetAreaById(int id)
        {
            return areaBll.GetAreaById(id);
        }

        // POST: api/Area
        [HttpPost]
        [Route("api/Area/PostArea")]
        public bool PostArea(Dto.AreaDto area)
        {
            return areaBll.PostArea(area);
        }

        // PUT: api/Area/5
        [HttpPut]
        [Route("api/Area/PutArea")]
        public bool PutArea(Dto.AreaDto area)
        {
            return areaBll.PutArea(area);
        }

       

        // DELETE: api/Area/5
        [HttpDelete]
        [Route("api/Area/DeleteArea/{id}")]
        public bool DeleteArea(int id)
        {
            return areaBll.DeleteArea(id);
        }
    }
}
