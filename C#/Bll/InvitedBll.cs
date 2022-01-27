using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll
{
	public class InvitedBll
	{
		Dal.InvitedDal invitedDal = new Dal.InvitedDal();

		public List<Dto.InvitedDto> GetAllInvited()
		{
			return Dto.convert.InvitedConvert.ConvertDalEntityToDto(
				   invitedDal.GetAllInvited());
		}

		public Dto.InvitedDto GetInvitedById(int id)
		{
			return Dto.convert.InvitedConvert.ConvertDalEntityToDto(invitedDal.GetInvitedById(id));
		}

		public bool PostInvited(Dto.InvitedDto Invited)
		{
			return invitedDal.PostInvited(Dto.convert.InvitedConvert.ConvertDalDtoToEntity(Invited));
		}

		public bool PutInvited(Dto.InvitedDto Invited)
		{
			return invitedDal.PutInvited(Dto.convert.InvitedConvert.ConvertDalDtoToEntity(Invited));

		}

		public bool DeleteInvited(int id)
		{
			return invitedDal.DeleteInvited(id);
		}

	}
}
