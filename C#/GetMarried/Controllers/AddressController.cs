using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Cors;

namespace GetMarried.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class AddressController : ApiController
    {
        // GET: api/Address
        [HttpGet]
        [Route("api/Address/GetAllAddress")]
        public List<Dto.AddressDto> GetAllAddress()
        {
            return Bll.AddressBll.GetAllAddress();
        }

        // GET: api/Address/5
        [HttpGet]
        [Route("api/Address/GetAddressById/{id}")]
        public Dto.AddressDto GetAddressById(int id)
        {
            return Bll.AddressBll.GetAddressById(id);
        }

        // POST: api/Address
        [HttpPost]
        [Route("api/Address/PostAddress")]
        public int PostAddress(Dto.AddressDto address)
        {
            return Bll.AddressBll.PostAddress(address);
        }

        // PUT: api/Address/5
        [HttpPut]
        [Route("api/Address/PutAddress")]
        public bool PutAddress(Dto.AddressDto address)
        {
            return Bll.AddressBll.PutAddress(address);
        }

        // DELETE: api/Address/5
        [HttpDelete]
        [Route("api/Address/DeleteAddress/{id}")]
        public bool DeleteAddress(int id)
        {
           return Bll.AddressBll.DeleteAddress(id);
        }
    }
}
