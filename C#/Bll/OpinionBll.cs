using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll
{
    public class OpinionBll
    {
        public static List<Dto.OpinionDto> GetAllOpinionToHall(int id)
        {
            return Dto.convert.OpinionConvert.ConvertDalEntityToDto(
                   Dal.OpinionDal.GetAllOpinionToHall(id));

        }

        public static List<Dto.OpinionDto> GetAllOpinionToSupp(int id)
        {
            return Dto.convert.OpinionConvert.ConvertDalEntityToDto(
                   Dal.OpinionDal.GetAllOpinionToSupp(id));

        }

        public static Dto.OpinionDto GetOpinionById(int id)
        {
            return Dto.convert.OpinionConvert.ConvertDalEntityToDto(Dal.OpinionDal.GetOpinionById(id));

        }

        public static bool PostOpinion(Dto.OpinionDto opinion)
        {
            return Dal.OpinionDal.PostOpinion(Dto.convert.OpinionConvert.ConvertDalDtoToEntity(opinion));
        }

        public static bool PutOpinion(Dto.OpinionDto opinion)
        {
            return Dal.OpinionDal.PutOpinion(Dto.convert.OpinionConvert.ConvertDalDtoToEntity(opinion));

        }

        public static bool DeleteOpinion(int id)
        {
            return Dal.OpinionDal.DeleteOpinion(id);
        }

    }
}
