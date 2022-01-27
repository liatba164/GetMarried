using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll
{
    public class ServToSuppBll
    {
        public static List<Dto.ServToSuppDto> GetAllServToSupp(int idSup)
        {
            return Dto.convert.ServToSuppConvert.ConvertDalEntityToDto(
                   Dal.ServToSuppDal.GetAllServToSupp(idSup));

        }

        public static Dto.ServToSuppDto GetServToSuppById(int id)
        {
            return Dto.convert.ServToSuppConvert.ConvertDalEntityToDto(Dal.ServToSuppDal.GetServToSuppById(id));

        }

        public static bool PostServToSupp(Dto.ServToSuppDto serv)
        {
            return Dal.ServToSuppDal.PostServToSupp(Dto.convert.ServToSuppConvert.ConvertDalDtoToEntity(serv));
        }


        public static bool PostServicesToSupp(List<Dto.ServToSuppDto> serv)
        {
            return Dal.ServToSuppDal.PostServicesToSupp(Dto.convert.ServToSuppConvert.ConvertDalDtoToEntity(serv));
        }

        public static bool PutServToSupp(Dto.ServToSuppDto serv)
        {
            return Dal.ServToSuppDal.PutServToSupp(Dto.convert.ServToSuppConvert.ConvertDalDtoToEntity(serv));

        }

        public static bool DeleteServToSupp(int id)
        {
            return Dal.ServToSuppDal.DeleteServToSupp(id);

        }

    }
}
