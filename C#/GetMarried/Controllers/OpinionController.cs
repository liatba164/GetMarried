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
    public class OpinionController : ApiController
    {

        // GET: api/Opinion
        [HttpGet]
        [Route("api/Opinion/GetAllOpinionToHall/{id}")]
        public List<Dto.OpinionDto> GetAllOpinionToHall(int id)
        {
            return Bll.OpinionBll.GetAllOpinionToHall(id);
        }


        [HttpGet]
        [Route("api/Opinion/GetAllOpinionToSupp/{id}")]
        public List<Dto.OpinionDto> GetAllOpinionToSupp(int id)
        {
            return Bll.OpinionBll.GetAllOpinionToSupp(id);
        }

        // GET: api/Opinion/5
        [HttpGet]
        [Route("api/Opinion/GetOpinionaById/{id}")]
        public Dto.OpinionDto GetOpinionById(int id)
        {
            return Bll.OpinionBll.GetOpinionById(id);
        }

        // POST: api/Opinion
        [HttpPost]
        [Route("api/Opinion/PostOpinion")]
        public bool PostOpinion(Dto.OpinionDto Opinion)
        {
            return Bll.OpinionBll.PostOpinion(Opinion);
        }

        // PUT: api/Opinion/5
        [HttpPut]
        [Route("api/Opinion/PutOpinion")]
        public bool PutOpinion(Dto.OpinionDto Opinion)
        {
            return Bll.OpinionBll.PutOpinion(Opinion);
        }

        // DELETE: api/Opinion/5
        [HttpDelete]
        [Route("api/Opinion/DeleteOpinion/{id}")]
        public bool DeleteOpinion(int id)
        {
            return Bll.OpinionBll.DeleteOpinion(id);
        }
    }
}
