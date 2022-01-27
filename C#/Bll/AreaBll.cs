using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll
{
    public class AreaBll
    {
        Dal.AreaDal areaDal = new Dal.AreaDal();

        public List<Dto.AreaDto> GetAllArea()
        {
            return Dto.convert.AreaConvert.ConvertDalEntityToDto(
                   areaDal.GetAllArea());
        }

        public Dto.AreaDto GetAreaById(int id)
        {
            return Dto.convert.AreaConvert.ConvertDalEntityToDto(areaDal.GetAreaByID(id));
        }

        public bool PostArea(Dto.AreaDto area)
        {
            return areaDal.PostArea(Dto.convert.AreaConvert.ConvertDalDtoToEntity(area));
        }

        public bool PutArea(Dto.AreaDto area)
        {
            return areaDal.PutArea(Dto.convert.AreaConvert.ConvertDalDtoToEntity(area));
        }

        public bool DeleteArea(int id)
        {
            return areaDal.DeleteArea(id);
        }
    }
}
