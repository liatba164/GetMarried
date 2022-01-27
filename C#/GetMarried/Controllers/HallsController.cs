using Bll;
using Dal;
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
    public class HallsController : ApiController
    {
        Bll.HallsBll hallsBll = new Bll.HallsBll();


        // GET: api/Halls
        [HttpGet]
        [Route("api/Halls/GetAllHalls")]
        public List<Dto.HallsDto> GetAllHalls()
        {
            return hallsBll.GetAllHalls();
        }

        [HttpGet]
        [Route("api/Halls/GetMaxPrice")]
        public int GetMaxPrice()
        {
            return hallsBll.GetMaxPrice();
        }

        [HttpGet]
        [Route("api/Halls/GetMinPrice")]
        public int GetMinPrice()
        {
            return hallsBll.GetMinPrice();
        }

        // GET: api/Halls/5
        [HttpGet]
        [Route("api/Halls/GetHallById/{id}")]
        public Dto.HallsDto GetHallById(int id)
        {
            return Bll.HallsBll.GetHallById(id);
        }


        [HttpPost]
        [Route("api/Halls/GetHallByFilter")]
        public List<Dto.HallsDto> GetHallByFilter(Filter filter)
        {
            return hallsBll.GetHallByFilter(filter);
        }

        // POST: api/Halls
        [HttpPost]
        [Route("api/Halls/PostHall")]
        public int PostHall(Dto.HallsDto Hall)
        {
            return Bll.HallsBll.PostHall(Hall);
        }

        // PUT: api/Halls/5
        [HttpPut]
        [Route("api/Halls/PutHall")]
        public bool PutHall(Dto.HallsDto hall)
        {
            return Bll.HallsBll.PutHall(hall);
        }

        // DELETE: api/Halls/5
        [HttpDelete]
        [Route("api/Halls/DeleteHalls/{id}")]
        public bool DeleteHalls(int id)
        {
            return Bll.HallsBll.DeleteHall(id);
        }
    }
}
