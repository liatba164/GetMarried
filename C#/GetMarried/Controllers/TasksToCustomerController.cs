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
    public class TasksToCustomersController : ApiController
    {
        [HttpGet]
        [Route("api/TasksToCustomers/GetTasksToCustomers/{id}")]
        public List<Dto.TasksToCustomerDto> GetAllTasksToCustomer(int id)
        {
            return Bll.TasksToCustomerBll.GetAllTasksToCustomer(id);
        }



        [HttpGet]
        [Route("api/TasksToCustomers/GetTasksToCustomerById/{id}/{idCust}")]
        public Dto.TasksToCustomerDto GetTasksToCustomerById(int id,int idCust)
        {
            return Bll.TasksToCustomerBll.GetTasksToCustomerById(id, idCust);
        }


        // POST: api/TasksToCustomersToCustomer
        //add
        [HttpPost]
        [Route("api/TasksToCustomers/PostTasksToCustomer")]
        public bool PostTaskToCustomer(Dto.TasksToCustomerDto TasksToCustomer)
        {
            return Bll.TasksToCustomerBll.PostTasksToCustomer(TasksToCustomer);
        }


        [HttpPut]
        [Route("api/TasksToCustomers/PutTasksToCustomer")]
        public bool PutTaskToCustomer(Dto.TasksToCustomerDto TasksToCustomer)
        {
            return Bll.TasksToCustomerBll.PutTasksToCustomer(TasksToCustomer);
        }


        // DELETE: api/TasksToCustomersToCustomer/5
        [HttpDelete]
        [Route("api/TasksToCustomers/DeleteTasksToCustomer/{id}")]
        public bool DeleteTasksToCustomer(int id)
        {
            return Bll.TasksToCustomerBll.DeleteTasksToCustomer(id);
        }
    }
}
