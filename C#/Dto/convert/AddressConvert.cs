using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace Dto.convert
{
    public class AddressConvert
    {
        public static List<AddressDto> ConvertDalEntityToDto(List<Dal.Address> addresses)
        {
            if (addresses == null)
                return null;
            List<AddressDto> AddressDtos = addresses.Select(a => ConvertDalEntityToDto(a)).ToList();
            return AddressDtos;

        }


        public static AddressDto ConvertDalEntityToDto(Dal.Address address)
        {
            if (address is null)
                return null;
            AddressDto addressDto = new AddressDto()
            {
                id = address.id,
                city = address.city,
                number=address.number,
                street = address.street,
             

            };
            return addressDto;

        }


        public static Dal.Address ConvertDalDtoToEntity(AddressDto AddressDto)
        {
            try
            {
                Dal.Address address = new Dal.Address()
                {
                    id = AddressDto.id,
                    city = AddressDto.city,
                    street = AddressDto.street,
                    number=AddressDto.number,
                   
                };
                return address;

            }
            catch (Exception e)
            {
                return null;
            }
        }
    }
}
