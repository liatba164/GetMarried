using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll
{
	public class ContactUsBll
	{
        public static List<Dto.ContactUsDto> GetAllContact()
        {
            return Dto.convert.ContactUsConvert.ConvertDalEntityToDto(
                   Dal.ContactUsDal.GetAllContact());

        }

        public static bool PostContactUs(Dto.ContactUsDto Contact)
        {
            return Dal.ContactUsDal.PostContact(Dto.convert.ContactUsConvert.ConvertDalDtoToEntity(Contact));
        }

        public static bool PutContactUs(Dto.ContactUsDto Contact)
        {
            return Dal.ContactUsDal.PutContact(Dto.convert.ContactUsConvert.ConvertDalDtoToEntity(Contact));

        }

        public static bool DeleteContactUs(int id)
        {
            return Dal.ContactUsDal.DeleteContact(id);
        }

    }
}
