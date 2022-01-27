using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Dal;
using Dto;

namespace GetMarried.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ServToSuppController : ApiController
    {

        [HttpGet]
        [Route("api/ServToSupp/GetAllServToSupp/{idSup}")]
        public List<Dto.ServToSuppDto> GetAllServToSupp(int idSup)
        {
            return Bll.ServToSuppBll.GetAllServToSupp(idSup);
        }

     
        [HttpGet]
        [Route("api/ServToSupp/GetServToSuppById/{id}")]
        public Dto.ServToSuppDto GetServToSuppById(int id)
        {
            return Bll.ServToSuppBll.GetServToSuppById(id);
        }


        [HttpPost]
        [Route("api/ServToSupp/PostServToSupp")]
        public bool PostServToSupp(Dto.ServToSuppDto serv)
        {
            return Bll.ServToSuppBll.PostServToSupp(serv);
        }


        [HttpPost]
        [Route("api/ServToSupp/PostServicesToSupp")]
        public bool PostServicesToSupp(List<Dto.ServToSuppDto> serv)
        {
            return Bll.ServToSuppBll.PostServicesToSupp(serv);
        }

        [HttpPut]
        [Route("api/ServToSupp/PutServToSupp")]
        public bool PutServToSupp(Dto.ServToSuppDto serv)
        {
            return Bll.ServToSuppBll.PutServToSupp(serv);
        }


        [HttpDelete]
        [Route("api/ServToSupp/DeleteServToSupp/{id}")]
        public bool DeleteServToSupp(int id)
        {
            return Bll.ServToSuppBll.DeleteServToSupp(id);
        }

    }
}
