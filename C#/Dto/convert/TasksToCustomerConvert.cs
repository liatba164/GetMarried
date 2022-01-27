using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto.convert
{
	public class TasksToCustomerConvert
	{

        public static List<TasksToCustomerDto> ConvertDalEntityToDto(List<Dal.TasksToCustomer> tasksToCustomers)
        {
            if (tasksToCustomers == null)
                return null;
            List<TasksToCustomerDto> tasksToCustomerDto = tasksToCustomers.Select(a => ConvertDalEntityToDto(a)).ToList();
            return tasksToCustomerDto;

        }


        public static TasksToCustomerDto ConvertDalEntityToDto(Dal.TasksToCustomer tasksToCustomers)
        {
            if (tasksToCustomers is null)
                return null;
            TasksToCustomerDto tasksToCustomerDto = new TasksToCustomerDto()
            {
                id = tasksToCustomers.id,
                idCustomer=tasksToCustomers.idCustomer,
                idTask= tasksToCustomers.idTask,
                done = tasksToCustomers.done,
            

            };

            return tasksToCustomerDto;

        }


        public static Dal.TasksToCustomer ConvertDalDtoToEntity(TasksToCustomerDto tasksToCustomerDto)
        {
            try
            {
                Dal.TasksToCustomer tasks = new Dal.TasksToCustomer()
                {

                    id = tasksToCustomerDto.id,
                    idCustomer = tasksToCustomerDto.idCustomer,
                    idTask = tasksToCustomerDto.idTask,
                    done = tasksToCustomerDto.done,

                };
                return tasks;

            }
            catch (Exception e)
            {
                return null;
            }
        }

    }
}
