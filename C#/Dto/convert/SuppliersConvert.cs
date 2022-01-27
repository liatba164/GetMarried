using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto.convert
{
   public class SuppliersConvert

    {
        public static List<SuppliersDto> ConvertDalEntityToDto(List<Dal.Suppliers> suppliers)
        {
            if (suppliers == null)
                return null;
            List<SuppliersDto> SuppliersDto = suppliers.Select(a => ConvertDalEntityToDto(a)).ToList();
            return SuppliersDto;

        }

        public static SuppliersDto ConvertDalEntityToDto(Dal.Suppliers supplier)
        {
            if (supplier is null)
                return null;
            SuppliersDto SuppliersDto = new SuppliersDto()
            {
                id = supplier.id,
                name = supplier.name,
                phone = supplier.phone,
                minPrice = supplier.minPrice,
                maxPrice = supplier.maxPrice,
                activity_time = supplier.activity_time,
                idCategory = supplier.idCategory,
                idAddress = supplier.idAddress,
                //idservice = supplier.idservice,
                src=supplier.src,
                srcLogo=supplier.srcLogo,
                description=supplier.description,
				//idPrice = supplier.idPrice,

				idArea = supplier.idArea,


			};

            return SuppliersDto;

        }


        public static Dal.Suppliers ConvertDalDtoToEntity(SuppliersDto SuppliersDto)
        {
            try
            {
                Dal.Suppliers Suppliers = new Dal.Suppliers()
                {

                    id = SuppliersDto.id,
                    name = SuppliersDto.name,
                    phone = SuppliersDto.phone,
                    activity_time = SuppliersDto.activity_time,
                    minPrice = SuppliersDto.minPrice,
                    maxPrice = SuppliersDto.maxPrice,
                    idCategory = SuppliersDto.idCategory,
                    idAddress = SuppliersDto.idAddress,
                    //idservice = SuppliersDto.idservice,
                    src = SuppliersDto.src,
                    srcLogo = SuppliersDto.srcLogo,
                    description = SuppliersDto.description,

					//idPrice = SuppliersDto.idPrice,
					idArea = SuppliersDto.idArea,
				};
                return Suppliers;

            }
            catch (Exception e)
            {
                return null;
            }
        }

    }
}
