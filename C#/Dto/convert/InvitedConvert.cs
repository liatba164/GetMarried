using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto.convert
{
	public class InvitedConvert
	{
		public static List<InvitedDto> ConvertDalEntityToDto(List<Dal.Invited> invit)
		{
			if (invit == null)
				return null;
			List<InvitedDto> customerDto = invit.Select(a => ConvertDalEntityToDto(a)).ToList();
			return customerDto;

		}

		public static InvitedDto ConvertDalEntityToDto(Dal.Invited invit)
		{
			if (invit is null)
				return null;
			InvitedDto InvitedDto = new InvitedDto()
			{
				id = invit.id,
				invited1 = invit.invited1,
			};

			return InvitedDto;

		}


		public static Dal.Invited ConvertDalDtoToEntity(InvitedDto InvitedDto)
		{
			try
			{
				Dal.Invited cust = new Dal.Invited()
				{
					id = InvitedDto.id,
					invited1=InvitedDto.invited1,

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
