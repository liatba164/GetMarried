//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace Dto.convert
//{
//	public class PriceConvert
//	{

//		public static List<PriceDto> ConvertDalEntityToDto(List<Dal.Price> Pricees)
//		{
//			if (Pricees == null)
//				return null;
//			List<PriceDto> PriceDtos = Pricees.Select(a => ConvertDalEntityToDto(a)).ToList();
//			return PriceDtos;

//		}


//		public static PriceDto ConvertDalEntityToDto(Dal.Price Price)
//		{
//			if (Price is null)
//				return null;
//			PriceDto PriceDto = new PriceDto()
//			{
//				id = Price.id,
//				price1 = Price.price1,

//			};
//			return PriceDto;

//		}


//		public static Dal.Price ConvertDalDtoToEntity(PriceDto PriceDto)
//		{
//			try
//			{
//				Dal.Price Price = new Dal.Price()
//				{
//					id = PriceDto.id,
//					price1 = PriceDto.price1,
//				};
//				return Price;

//			}
//			catch (Exception e)
//			{
//				return null;
//			}
//		}

//	}
//}
