//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Net;
//using System.Web.Http;
//using System.Web.Http.Cors;

//namespace GetMarried.Controllers
//{
//	[EnableCors(origins: "*", headers: "*", methods: "*")]
//	public class PriceController : ApiController
//	{
//		// GET: api/Price
//		[HttpGet]
//		[Route("api/Price/GetAllPrice")]
//		public List<Dto.PriceDto> GetAllPrice()
//		{
//			return Bll.PriceBll.GetAllPrice();
//		}

//		// GET: api/Price/5
//		[HttpGet]
//		[Route("api/Price/GetPriceById/{id}")]
//		public Dto.PriceDto GetPriceById(int id)
//		{
//			return Bll.PriceBll.GetPriceById(id);
//		}

//		// POST: api/Price
//		[HttpPost]
//		[Route("api/Price/PostPrice")]
//		public void PostPrice(Dto.PriceDto Price)
//		{
//			Bll.PriceBll.PostPrice(Price);
//		}

//		// PUT: api/Price/5
//		[HttpPut]
//		[Route("api/Price/PutPrice")]
//		public void PutPrice(Dto.PriceDto Price)
//		{
//			Bll.PriceBll.PutPrice(Price);
//		}

//		// DELETE: api/Price/5
//		[HttpDelete]
//		[Route("api/Price/DeletePrice/{id}")]
//		public void DeletePrice(int id)
//		{
//			Bll.PriceBll.DeletePrice(id);
//		}
//	}
//}
