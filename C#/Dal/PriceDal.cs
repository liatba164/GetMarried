//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace Dal
//{
//	public class PriceDal
//	{
//		public static List<Dal.Price> GetAllPrice()
//		{
//			List<Dal.Price> list = new List<Price>();
//			try
//			{
//				list = ManangementEntitiesSingleton.Instance.Price.ToList();
//			}
//			catch (Exception e)
//			{
//				return null;
//			}

//			return list;
//		}


//		public static Dal.Price GetPriceById(int id)
//		{
//			try
//			{
//				return ManangementEntitiesSingleton.Instance.Price.Find(id);
//			}
//			catch (Exception e)
//			{
//				return null;
//			}
//		}

//		public static void PostPrice(Dal.Price Price)
//		{
//			try
//			{
//				ManangementEntitiesSingleton.Instance.Price.Add(Price);
//				ManangementEntitiesSingleton.Instance.SaveChanges();
//			}
//			catch (Exception e)
//			{
//				;
//			}
//		}


//		public static void PutPrice(Dal.Price Price)
//		{
//			Price pric = ManangementEntitiesSingleton.Instance.Price.Where(x => x.id == Price.id).FirstOrDefault();

//			try
//			{
//				pric.price1 = Price.price1;
//				ManangementEntitiesSingleton.Instance.SaveChanges();
//			}
//			catch (Exception e)
//			{
//				Console.WriteLine(e.Message);
//			}
//		}

//		public static void DeletePrice(int id)
//		{
//			try
//			{
//				Price adres = ManangementEntitiesSingleton.Instance.Price.Where(x => x.id == id).FirstOrDefault();
//				ManangementEntitiesSingleton.Instance.Price.Remove(adres);
//				ManangementEntitiesSingleton.Instance.SaveChanges();
//			}
//			catch (Exception e)
//			{
//				;
//			}
//		}

//	}
//}
