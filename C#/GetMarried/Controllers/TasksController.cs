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
    public class TasksController : ApiController
    {
        [HttpGet]
        [Route("api/Tasks/GetAllTasks")]
        public List<Dto.TasksDto> GetAllTasks()
        {
            return Bll.TasksBll.GetAllTasks();
        }

        [HttpGet]
        [Route("api/Tasks/GetTaskById/{id}")]
        public Dto.TasksDto GetTaskById(int id)
        {
            return Bll.TasksBll.GetTaskById(id);
        }

        // POST: api/Tasks
        [HttpPost]
        [Route("api/Tasks/PostTask")]
        public bool PostTask(Dto.TasksDto task)
        {
            return Bll.TasksBll.PostTask(task);
        }

        [HttpPut]
        [Route("api/Tasks/PutTask")]
        public bool PutTask(Dto.TasksDto task)
        {
            return Bll.TasksBll.PutTask(task);
        }


        // DELETE: api/Tasks/5
        [HttpDelete]
        [Route("api/Tasks/DeleteTask/{id}")]
        public bool DeleteTask(int id)
        {
            return Bll.TasksBll.DeleteTask(id);
        }
    }
}
