
using Dal;
using System.Collections.Generic;

using System.Web.Http;
using System.Web.Http.Cors;

namespace GetMarried.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class SuppliersController : ApiController
    {
        Bll.SuppliersBll SupplierBll = new Bll.SuppliersBll();

        [HttpGet]
        [Route("api/Suppliers/GetAllSuppliers")]
        public List<Dto.SuppliersDto> GetAllSuppliers()
        {
            return Bll.SuppliersBll.GetAllSuppliers();
        }

        // GET: api/Suppliers
        [HttpGet]
        [Route("api/Suppliers/GetAllSuppliers/{category}")]
        public List<Dto.SuppliersDto> GetAllSuppliers(int category)
        {
            return SupplierBll.GetAllSuppliers(category);
        }

        [HttpGet]
        [Route("api/Suppliers/GetMaxPrice/{category}")]
        public int GetMaxPrice(int category)
        {
            return SupplierBll.GetMaxPrice(category);
        }

        [HttpGet]
        [Route("api/Suppliers/GetMinPrice/{category}")]
        public int GetMinPrice(int category)
        {
            return SupplierBll.GetMinPrice(category);
        }


        [HttpGet]
        [Route("api/Suppliers/GetSupplierById/{id}")]
        public Dto.SuppliersDto GetSupplierById(int id)
        {
            return Bll.SuppliersBll.GetSupplierById(id);
        }

        [HttpPost]
        [Route("api/Suppliers/GetSuppliersByFilter")]
        public List<Dto.SuppliersDto> GetSuppliersByFilter(filterSuppliers filter)
        {
            return SupplierBll.GetSuppliersByFilter(filter);
        }


        // POST: api/Suppliers
        //add
        [HttpPost]
        [Route("api/Suppliers/PostSuppliers")]
        public int PostSuppliers(Dto.SuppliersDto supplier)
        {
            return Bll.SuppliersBll.PostSupplier(supplier);
        }


        [HttpPut]
        [Route("api/Suppliers/PutSupplier")]
        public bool PutSupplier(Dto.SuppliersDto supplier)
        {
            return Bll.SuppliersBll.PutSupplier(supplier);
        }


        // DELETE: api/Suppliers/5
        [HttpDelete]
        [Route("api/Suppliers/DeleteSupplier/{id}")]
        public bool DeleteSupplier(int id)
        {
            return Bll.SuppliersBll.DeleteSupplier(id);
        }
    }
}
