using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto.convert
{
    public class ServiceConvert
    {

        public static List<ServiceDto> ConvertDalEntityToDto(List<Dal.Service> serv)
        {
            if (serv == null)
                return null;
            List<ServiceDto> ServiceDto = serv.Select(a => ConvertDalEntityToDto(a)).ToList();
            return ServiceDto;

        }

        public static ServiceDto ConvertDalEntityToDto(Dal.Service serv)
        {
            if (serv is null)
                return null;
            ServiceDto ServiceDto = new ServiceDto()
            {
                id = serv.id,
                serv = serv.serv,
            };

            return ServiceDto;

        }


        public static Dal.Service ConvertDalDtoToEntity(ServiceDto servDto)
        {
            try
            {
                Dal.Service service = new Dal.Service()
                {

                    id = servDto.id,
                    serv = servDto.serv,
                };
                return service;

            }
            catch (Exception e)
            {
                return null;
            }
        }
    }
}
