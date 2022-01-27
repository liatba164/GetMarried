using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll
{
    public class AddressBll
    {

        public static List<Dto.AddressDto> GetAllAddress()
        {
            return Dto.convert.AddressConvert.ConvertDalEntityToDto(
                   Dal.AddressDal.GetAllAddress());

        }

        public static Dto.AddressDto GetAddressById(int id)
        {
            return Dto.convert.AddressConvert.ConvertDalEntityToDto(Dal.AddressDal.GetAddressById(id));

        }

        public static int PostAddress(Dto.AddressDto address)
        {
            return Dal.AddressDal.PostAddress(Dto.convert.AddressConvert.ConvertDalDtoToEntity(address));
        }

        public static bool PutAddress(Dto.AddressDto address)
        {
            return Dal.AddressDal.PutAddress(Dto.convert.AddressConvert.ConvertDalDtoToEntity(address));
        }

        public static bool DeleteAddress(int id)
        {
            return Dal.AddressDal.DeleteAddress(id);
        }
    }
}
