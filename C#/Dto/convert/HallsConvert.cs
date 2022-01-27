using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto.convert
{
	public class HallsConvert
	{
		public static List<HallsDto> ConvertDalEntityToDto(List<Dal.halls> halls)
		{
			if (halls == null)
				return null;
			List<HallsDto> HallsDto = halls.Select(a => ConvertDalEntityToDto(a)).ToList();
			return HallsDto;

		}

		public static HallsDto ConvertDalEntityToDto(Dal.halls halls)
		{
			if (halls is null)
				return null;
			HallsDto hallsDto = new HallsDto()
			{
				id = halls.id,
				name = halls.name,
				phone = halls.phone,
				minInvited= halls.minInvited,
				maxInvited= halls.maxInvited,
				minPrice= halls.minPrice,
				maxPrice= halls.maxPrice,
				idArea = halls.idArea,
				idtype = halls.idtype,
				idAddress = halls.idAddress,
				description = halls.description,
				src = halls.src,
				srcLogo = halls.srcLogo,
				idKashrut = halls.idKashrut,
				idInvited = halls.idInvited,
				//idPrice = halls.idPrice,



			};

			return hallsDto;

		}


		public static Dal.halls ConvertDalDtoToEntity(HallsDto hallsDto)
		{
			try
			{
				Dal.halls halls = new Dal.halls()
				{
					id = hallsDto.id,
					name = hallsDto.name,
					phone = hallsDto.phone,
					minInvited = hallsDto.minInvited,
					maxInvited = hallsDto.maxInvited,
					minPrice = hallsDto.minPrice,
					maxPrice = hallsDto.maxPrice,
					description = hallsDto.description,
					src = hallsDto.src,
					srcLogo = hallsDto.srcLogo,
					idArea = hallsDto.idArea,
					idtype = hallsDto.idtype,
					idKashrut = hallsDto.idKashrut,
					idInvited = hallsDto.idInvited,
					//idPrice = hallsDto.idPrice,
					idAddress = hallsDto.idAddress,
					
				};
				return halls;

			}
			catch (Exception e)
			{
				return null;
			}
		}

	}
}
