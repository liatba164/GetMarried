using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll
{
	public class TasksToCustomerBll
	{
        public static List<Dto.TasksToCustomerDto> GetAllTasksToCustomer(int idCust)
        {
            return Dto.convert.TasksToCustomerConvert.ConvertDalEntityToDto(
                   Dal.TasksToCustomerDal.GetAllTasksToCustomer(idCust));

        }

       
        public static Dto.TasksToCustomerDto GetTasksToCustomerById(int id,int idCust)
        {
            return Dto.convert.TasksToCustomerConvert.ConvertDalEntityToDto(Dal.TasksToCustomerDal.GetTasksToCustomerById(id,idCust));

        }

        public static bool PostTasksToCustomer(Dto.TasksToCustomerDto Suppliers)
        {
          return  Dal.TasksToCustomerDal.PostTasksToCustomer(Dto.convert.TasksToCustomerConvert.ConvertDalDtoToEntity(Suppliers));
        }

        public static bool PutTasksToCustomer(Dto.TasksToCustomerDto Suppliers)
        {
            return Dal.TasksToCustomerDal.PutTasksToCustomer(Dto.convert.TasksToCustomerConvert.ConvertDalDtoToEntity(Suppliers));

        }

        public static bool DeleteTasksToCustomer(int id)
        {
            return Dal.TasksToCustomerDal.DeleteTasksToCustomer(id);
        }


    }
}
