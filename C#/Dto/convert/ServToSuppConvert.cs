using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto.convert
{
	public class ServToSuppConvert
	{
        public static List<ServToSuppDto> ConvertDalEntityToDto(List<Dal.ServToSupp> serv)
        {
            if (serv == null)
                return null;
            List<ServToSuppDto> servDto = serv.Select(a => ConvertDalEntityToDto(a)).ToList();
            return servDto;

        }

        public static ServToSuppDto ConvertDalEntityToDto(Dal.ServToSupp serv)
        {
            if (serv is null)
                return null;
            ServToSuppDto servDto = new ServToSuppDto()
            {
                id = serv.id,
                idSuppliers=serv.idSuppliers,
                idServ=serv.idServ,
            };

            return servDto;

        }


        public static Dal.ServToSupp ConvertDalDtoToEntity(ServToSuppDto serv)
        {
            try
            {
                Dal.ServToSupp srv = new Dal.ServToSupp()
                {
                    id = serv.id,
                    idServ=serv.idServ,
                    idSuppliers=serv.idSuppliers,
                };
                return srv;

            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static List<Dal.ServToSupp> ConvertDalDtoToEntity(List<ServToSuppDto> serv)
        {
            if (serv == null)
                return null;
            List<Dal.ServToSupp> ServToSuppDto = serv.Select(a => ConvertDalDtoToEntity(a)).ToList();
            return ServToSuppDto;
        }

    }
}
