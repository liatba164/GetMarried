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
    public class ProductsToCustomersController : ApiController
    {

        // GET: api/ProductsToCustomers
        [HttpGet]
        [Route("api/ProductsToCustomers/GetAllProductsToCustomers/{idCust}")]
        public List<Dto.ProductsToCustomersDto> GetAllProductsToCustomers(int idCust)
        {
            return Bll.ProductsToCustomersBll.GetAllProductsToCustomers(idCust);
        }

        // GET: api/ProductsToCustomers/5
        [HttpGet]
        [Route("api/ProductsToCustomers/GetHallProductsToCustomersById/{id}/{idCust}")]
        public Dto.ProductsToCustomersDto GetHallProductsToCustomersById(int id, int idCust)
        {
            return Bll.ProductsToCustomersBll.GetHallProductsToCustomersById(id, idCust);
        }

        [HttpGet]
        [Route("api/ProductsToCustomers/GetSupplierProductsToCustomersById/{id}/{idCust}")]
        public Dto.ProductsToCustomersDto GetSupplierProductsToCustomersById(int id, int idCust)
        {
            return Bll.ProductsToCustomersBll.GetSupplierProductsToCustomersById(id, idCust);
        }

        // POST: api/ProductsToCustomers
        [HttpPost]
        [Route("api/ProductsToCustomers/PostProductsToCustomers")]
        public bool PostProductsToCustomers(Dto.ProductsToCustomersDto ProductsToCustomers)
        {
            return Bll.ProductsToCustomersBll.PostProductsToCustomers(ProductsToCustomers);
        }

        // PUT: api/ProductsToCustomers/5
        [HttpPut]
        [Route("api/ProductsToCustomers/PutProductsToCustomers")]
        public bool PutProductsToCustomers(Dto.ProductsToCustomersDto ProductsToCustomers)
        {
            return Bll.ProductsToCustomersBll.PutProductsToCustomers(ProductsToCustomers);
        }

        // DELETE: api/ProductsToCustomers/5
        [HttpDelete]
        [Route("api/ProductsToCustomers/DeleteProductsToCustomers/{id}")]
        public bool DeleteProductsToCustomers(int id)
        {
            return Bll.ProductsToCustomersBll.DeleteProductsToCustomers(id);
        }
    }
}
