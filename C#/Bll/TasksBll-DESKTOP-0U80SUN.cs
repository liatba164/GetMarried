using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll
{
	public class TasksBll
	{


        public static List<Dto.TasksDto> GetAllTasks()
        {
            return Dto.convert.TasksConvert.ConvertDalEntityToDto(
                   Dal.TasksDal.GetAllTasks());

        }

        public static Dto.TasksDto GetTaskById(int id)
        {
            return Dto.convert.TasksConvert.ConvertDalEntityToDto(Dal.TasksDal.GetTaskById(id));

        }

        public static Dto.TasksDto GetTaskByNumber(int num)
        {
            return Dto.convert.TasksConvert.ConvertDalEntityToDto(Dal.TasksDal.GetTaskByNumber(num));

        }

        public static bool PostTask(Dto.TasksDto Tasks)
        {
            return Dal.TasksDal.PostTask(Dto.convert.TasksConvert.ConvertDalDtoToEntity(Tasks));
        }

        public static bool PutTask(Dto.TasksDto Tasks)
        {
            return Dal.TasksDal.PutTask(Dto.convert.TasksConvert.ConvertDalDtoToEntity(Tasks));

        }

        public static bool DeleteTask(int id)
        {
            return Dal.TasksDal.DeleteTask(id);
        }

    }
}
