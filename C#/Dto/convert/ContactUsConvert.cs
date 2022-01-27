using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto.convert
{
	public class ContactUsConvert
	{
		public static List<ContactUsDto> ConvertDalEntityToDto(List<Dal.ContactUs> ContactUs)
		{
			if (ContactUs == null)
				return null;
			List<ContactUsDto> ContactUsDtos = ContactUs.Select(a => ConvertDalEntityToDto(a)).ToList();
			return ContactUsDtos;

		}


		public static ContactUsDto ConvertDalEntityToDto(Dal.ContactUs ContactUs)
		{
			if (ContactUs is null)
				return null;
			ContactUsDto ContactUsDto = new ContactUsDto()
			{
				id = ContactUs.id,
				name = ContactUs.name,
				phone = ContactUs.phone,
				email = ContactUs.email,
				message = ContactUs.message,


			};
			return ContactUsDto;

		}


		public static Dal.ContactUs ConvertDalDtoToEntity(ContactUsDto ContactUsDto)
		{
			try
			{
				Dal.ContactUs ContactUs = new Dal.ContactUs()
				{
					id = ContactUsDto.id,
					name = ContactUsDto.name,
					phone = ContactUsDto.phone,
					email = ContactUsDto.email,
					message = ContactUsDto.message,
				};
				return ContactUs;

			}
			catch (Exception e)
			{
				return null;
			}
		}



	}
}
