using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll
{
    public class ServiceBll
    {
        Dal.ServiceDal serviceDal = new Dal.ServiceDal();


        public List<Dto.ServiceDto> GetAllServices(int category)
        {
            return Dto.convert.ServiceConvert.ConvertDalEntityToDto(
                  serviceDal.GetAllServices(category));

        }

        public Dto.ServiceDto GetServiceById(int id)
        {
            return Dto.convert.ServiceConvert.ConvertDalEntityToDto(serviceDal.GetServiceById(id));

        }

        public bool PostService(Dto.ServiceDto Service)
        {
            return serviceDal.PostService(Dto.convert.ServiceConvert.ConvertDalDtoToEntity(Service));
        }

        public bool PutService(Dto.ServiceDto Service)
        {
            return serviceDal.PutService(Dto.convert.ServiceConvert.ConvertDalDtoToEntity(Service));

        }

        public bool DeleteService(int id)
        {
            return serviceDal.DeleteService(id);
        }

    }
}
