using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll
{
	public class HallTypeBll
	{
        Dal.HallTypeDal hallTypeDal = new Dal.HallTypeDal();
        public  List<Dto.HallTypeDto> GetAllHallType()
        {
            return Dto.convert.HallTypeConvert.ConvertDalEntityToDto(
                   hallTypeDal.GetAllHallType());
        }

        public  Dto.HallTypeDto GetHallTypeById(int id)
        {
            return Dto.convert.HallTypeConvert.ConvertDalEntityToDto(hallTypeDal.GetHallTypeById(id));
        }

        public  bool PostHallType(Dto.HallTypeDto hall)
        {
            return hallTypeDal.PostHallType(Dto.convert.HallTypeConvert.ConvertDalDtoToEntity(hall));
        }

        public  bool PutHallType(Dto.HallTypeDto hall)
        {
            return hallTypeDal.PutHallType(Dto.convert.HallTypeConvert.ConvertDalDtoToEntity(hall));
        }

        public  bool DeleteHallType(int id)
        {
            return hallTypeDal.DeleteHallType(id);
        }

    }
}
