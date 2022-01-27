//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace Bll
//{
//	public class PriceBll
//	{

//		public static List<Dto.PriceDto> GetAllPrice()
//		{
//			return Dto.convert.PriceConvert.ConvertDalEntityToDto(
//				   Dal.PriceDal.GetAllPrice());

//		}

//		public static Dto.PriceDto GetPriceById(int id)
//		{
//			return Dto.convert.PriceConvert.ConvertDalEntityToDto(Dal.PriceDal.GetPriceById(id));

//		}

//		public static void PostPrice(Dto.PriceDto Price)
//		{
//			Dal.PriceDal.PostPrice(Dto.convert.PriceConvert.ConvertDalDtoToEntity(Price));
//		}

//		public static void PutPrice(Dto.PriceDto Price)
//		{
//			Dal.PriceDal.PutPrice(Dto.convert.PriceConvert.ConvertDalDtoToEntity(Price));

//		}

//		public static void DeletePrice(int id)
//		{
//			Dal.PriceDal.DeletePrice(id);
//		}

//	}
//}
