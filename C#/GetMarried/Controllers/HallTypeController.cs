using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace GetMarried.Controllers
{ [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class HallTypeController : ApiController
    {
        Bll.HallTypeBll hallTypeBll = new Bll.HallTypeBll();

        [HttpGet]
        [Route("api/HallType/GetAllHallType")]
        public List<Dto.HallTypeDto> GetAllHallType()
        {
            return hallTypeBll.GetAllHallType();
        }

        // GET: api/HallType/5
        [HttpGet]
        [Route("api/HallType/GetHallTypeById/{id}")]
        public Dto.HallTypeDto GetHallTypeById(int id)
        {
            return hallTypeBll.GetHallTypeById(id);
        }

        // POST: api/HallType
        [HttpPost]
        [Route("api/HallType/PostHall")]
        public bool PostHall(Dto.HallTypeDto Hall)
        {
            return hallTypeBll.PostHallType(Hall);
        }

        // PUT: api/HallType/5
        [HttpPut]
        [Route("api/HallType/PutHall")]
        public bool PutHall(Dto.HallTypeDto hall)
        {
            return hallTypeBll.PutHallType(hall);
        }

        // DELETE: api/HallType/5
        [HttpDelete]
        [Route("api/HallType/DeleteHallType/{id}")]
        public bool DeleteHallType(int id)
        {
            return hallTypeBll.DeleteHallType(id);
        }
    }
}
