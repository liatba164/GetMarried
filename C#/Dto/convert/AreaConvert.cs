using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto.convert
{
    public class AreaConvert
    {
        public static List<AreaDto> ConvertDalEntityToDto(List<Dal.Area> area)
        {
            if (area == null)
                return null;
            List<AreaDto> AreaDto = area.Select(a => ConvertDalEntityToDto(a)).ToList();
            return AreaDto;

        }

        public static AreaDto ConvertDalEntityToDto(Dal.Area area)
        {
            if (area is null)
                return null;
            AreaDto AreaDto = new AreaDto()
            {
                id = area.id,
                area1 = area.area1
            };

            return AreaDto;

        }


        public static Dal.Area ConvertDalDtoToEntity(AreaDto AreaDto)
        {
            try
            {
                Dal.Area area = new Dal.Area()
                {
                    id = AreaDto.id,
                    area1 = AreaDto.area1
                };
                return area;

            }
            catch (Exception e)
            {
                return null;
            }
        }

    }
}
