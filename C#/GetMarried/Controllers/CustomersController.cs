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
{ [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CustomersController : ApiController
    {
       
        // GET: api/Customers

        [HttpGet]
        [Route("api/Customers/GetAllCustomers")]
        public List<Dto.CustomersDto> GetAllCustomers()
        {
            return Bll.CustomersBll.GetAllCustomers();
        }

        // GET: api/Customers/5
        [HttpGet]
        [Route("api/Customers/GetCustomerByMail/{mail}")]
        public Dto.CustomersDto GetCustomerByMail(string mail)
        {
            mail = mail.Replace("{}", ".");
            mail = mail.Replace("[]", "@");
            return Bll.CustomersBll.GetCustomerByMail(mail);
        }

        [HttpGet]
        [Route("api/Customers/GetCustomerById/{id}")]
        public Dto.CustomersDto GetCustomerById(int id)
        {
            return Bll.CustomersBll.GetCustomerById(id);
        }

        ////[HttpGet]
        ////[Route("api/Customers/GetLastCustomer")]
        ////public Dto.CustomersDto GetLastCustomer()
        ////{
        ////    return Bll.CustomersBll.GetLastCustomer();
        ////}

        // POST: api/Customers
        [HttpPost]
        [Route("api/Customers/PostCustomer")]
        public int PostCustomer(Dto.CustomersDto customer)
        {

            return Bll.CustomersBll.PostCustomer(customer);
        }

        // PUT: api/Customers/5
        [HttpPut]
        [Route("api/Customers/PutCustomer")]
        public bool PutCustomer(Dto.CustomersDto customers)
        {
            return Bll.CustomersBll.PutCustomer(customers);
        }

        // DELETE: api/Customers/5
        [HttpDelete]
        [Route("api/Customers/DeleteCustomer/{id}")]
        public bool DeleteCustomer(string mail)
        {
            return Bll.CustomersBll.DeleteCustomer(mail);
        }
    }
}
