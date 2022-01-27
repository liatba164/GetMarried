using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace GetMarried.Controllers
{
	[EnableCors(origins: "*", headers: "*", methods: "*")]
	public class InvitedController : ApiController
	{
		Bll.InvitedBll invitedBll = new Bll.InvitedBll();

		// GET: api/Invited
		[HttpGet]
		[Route("api/Invited/GetAllInvited")]
		public List<Dto.InvitedDto> GetAllInvited()
		{
			return invitedBll.GetAllInvited();
		}

		// GET: api/Invited/5
		[HttpGet]
		[Route("api/Invited/GetInvitedById/{id}")]
		public Dto.InvitedDto GetInvitedById(int id)
		{
			return invitedBll.GetInvitedById(id);
		}

		// POST: api/Invited
		[HttpPost]
		[Route("api/Invited/PostInvited")]
		public bool PostInvited(Dto.InvitedDto Invited)
		{
			return invitedBll.PostInvited(Invited);
		}

		// PUT: api/Invited/5
		[HttpPut]
		[Route("api/Invited/PutInvited")]
		public bool PutInvited(Dto.InvitedDto Invited)
		{
			return invitedBll.PutInvited(Invited);
		}

		// DELETE: api/Invited/5
		[HttpDelete]
		[Route("api/Invited/DeleteInvited/{id}")]
		public bool DeleteInvited(int id)
		{
			return invitedBll.DeleteInvited(id);
		}
	}
}
