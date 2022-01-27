using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll
{
    public class KashrutBll
    {
        Dal.KashrutDal kashrutDal = new Dal.KashrutDal();

        public List<Dto.KashrutDto> GetAllKashrut()
        {
            return Dto.convert.KashrutConvert.ConvertDalEntityToDto(
                   kashrutDal.GetAllKashrut());

        }

        public Dto.KashrutDto GetKashrutById(int id)
        {
            return Dto.convert.KashrutConvert.ConvertDalEntityToDto(kashrutDal.GetKashrutById(id));

        }

        public bool PostKashrut(Dto.KashrutDto Kashrut)
        {
            return kashrutDal.PostKashrut(Dto.convert.KashrutConvert.ConvertDalDtoToEntity(Kashrut));
        }

        public bool PutKashrut(Dto.KashrutDto Kashrut)
        {
            return kashrutDal.PutKashrut(Dto.convert.KashrutConvert.ConvertDalDtoToEntity(Kashrut));

        }

        public bool DeleteKashrut(int id)
        {
            return kashrutDal.DeleteKashrut(id);
        }

    }
}
