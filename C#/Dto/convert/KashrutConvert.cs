using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto.convert
{
	public class KashrutConvert
	{
        public static List<KashrutDto> ConvertDalEntityToDto(List<Dal.Kashrut> cust)
        {
            if (cust == null)
                return null;
            List<KashrutDto> customerDto = cust.Select(a => ConvertDalEntityToDto(a)).ToList();
            return customerDto;

        }

        public static KashrutDto ConvertDalEntityToDto(Dal.Kashrut Kashrut)
        {
            if (Kashrut is null)
                return null;
            KashrutDto KashrutDto = new KashrutDto()
            {
                id = Kashrut.id,
                kashrut1 = Kashrut.kashrut1,
            };

            return KashrutDto;

        }


        public static Dal.Kashrut ConvertDalDtoToEntity(KashrutDto KashrutDto)
        {
            try
            {
                Dal.Kashrut cust = new Dal.Kashrut()
                {
					id = KashrutDto.id,
					kashrut1 = KashrutDto.kashrut1,
                };
                return cust;

            }
            catch (Exception e)
            {
                return null;
            }
        }
    }
}
