using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto.convert
{
	public class TasksConvert
	{

        public static List<TasksDto> ConvertDalEntityToDto(List<Dal.Tasks> task)
        {
            if (task == null)
                return null;
            List<TasksDto> TasksDto = task.Select(a => ConvertDalEntityToDto(a)).ToList();
            return TasksDto;

        }

        public static TasksDto ConvertDalEntityToDto(Dal.Tasks task)
        {
            if (task is null)
                return null;
            TasksDto TasksDto = new TasksDto()
            {
                id = task.id,
                name = task.name,
                number=task.number,
           
            };

            return TasksDto;

        }


        public static Dal.Tasks ConvertDalDtoToEntity(TasksDto TasksDto)
        {
            try
            {
                Dal.Tasks Tasks = new Dal.Tasks()
                {

                    id = TasksDto.id,
                    name = TasksDto.name,
                    number=TasksDto.number
                };
                return Tasks;

            }
            catch (Exception e)
            {
                return null;
            }
        }

    }
}
