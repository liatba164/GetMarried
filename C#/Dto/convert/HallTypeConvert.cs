using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto.convert
{
	public class HallTypeConvert
	{
        public static List<HallTypeDto> ConvertDalEntityToDto(List<Dal.HallType> HallType)
        {
            if (HallType == null)
                return null;
            List<HallTypeDto> HallTypeDto = HallType.Select(a => ConvertDalEntityToDto(a)).ToList();
            return HallTypeDto;

        }

        public static HallTypeDto ConvertDalEntityToDto(Dal.HallType HallType)
        {
            if (HallType is null)
                return null;
            HallTypeDto HallTypeDto = new HallTypeDto()
            {
                id = HallType.id,
                type = HallType.type,
               
            };

            return HallTypeDto;

        }


        public static Dal.HallType ConvertDalDtoToEntity(HallTypeDto HallTypeDto)
        {
            try
            {
                Dal.HallType HallType = new Dal.HallType()
                {

                    id = HallTypeDto.id,
                    type = HallTypeDto.type,
                   
                };
                return HallType;

            }
            catch (Exception e)
            {
                return null;
            }
        }
    }
}
