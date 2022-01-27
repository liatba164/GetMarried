using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll
{
    public class HallsBll
    {
        Dal.HallsDal hallsDal = new Dal.HallsDal();

        public  List<Dto.HallsDto> GetAllHalls()
        {
            return Dto.convert.HallsConvert.ConvertDalEntityToDto(
                   hallsDal.GetAllHalls());

        }

        public  int GetMaxPrice()
        {
            return hallsDal.GetMaxPrice();

        }

        public  int GetMinPrice()
        {
            return hallsDal.GetMinPrice();

        }

        public static Dto.HallsDto GetHallById(int id)
        {
            return Dto.convert.HallsConvert.ConvertDalEntityToDto(Dal.HallsDal.GetHallById(id));

        }


        public List<Dto.HallsDto> GetHallByFilter(Filter filter)
        {
            return Dto.convert.HallsConvert.ConvertDalEntityToDto(
               hallsDal.GetHallByFilter(filter));

        }


        public static int PostHall(Dto.HallsDto hall)
        {
            return Dal.HallsDal.PostHall(Dto.convert.HallsConvert.ConvertDalDtoToEntity(hall));
        }

        public static bool PutHall(Dto.HallsDto hall)
        {
            return Dal.HallsDal.PutHall(Dto.convert.HallsConvert.ConvertDalDtoToEntity(hall));

        }

        public static bool DeleteHall(int id)
        {
            return Dal.HallsDal.DeleteHall(id);
        }
    }
}
