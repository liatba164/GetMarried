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
    public class KashrutController : ApiController
    {
        Bll.KashrutBll kashrutBll = new Bll.KashrutBll();
        // GET: api/Kashrut
        [HttpGet]
        [Route("api/Kashrut/GetAllKashrut")]
        public List<Dto.KashrutDto> GetAllKashrut()
        {
            return kashrutBll.GetAllKashrut();
        }

        // GET: api/Kashrut/5
        [HttpGet]
        [Route("api/Kashrut/GetKashrutById/{id}")]
        public Dto.KashrutDto GetKashrutById(int id)
        {
            return kashrutBll.GetKashrutById(id);
        }

        // POST: api/Kashrut
        [HttpPost]
        [Route("api/Kashrut/PostKashrut")]
        public bool PostKashrut(Dto.KashrutDto Kashrut)
        {
            return kashrutBll.PostKashrut(Kashrut);
        }

        // PUT: api/Kashrut/5
        [HttpPut]
        [Route("api/Kashrut/PutKashrut")]
        public bool PutKashrut(Dto.KashrutDto Kashrut)
        {
            return kashrutBll.PutKashrut(Kashrut);
        }

        // DELETE: api/Kashrut/5
        [HttpDelete]
        [Route("api/Kashrut/DeleteKashrut/{id}")]
        public bool DeleteKashrut(int id)
        {
            return kashrutBll.DeleteKashrut(id);
        }
    }
}
