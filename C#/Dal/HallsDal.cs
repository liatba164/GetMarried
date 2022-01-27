using System;
using System.Collections.Generic;
using System.Linq;
using System.Collections;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

namespace Dal
{
    public class HallsDal
    {

        protected WeddingEntities db;

        public HallsDal()
        {
            db = new WeddingEntities();
        }
        public List<Dal.halls> GetAllHalls()
        {

            List<Dal.halls> list = new List<halls>();
            try
            {
                list = db.halls.ToList();
            }
            catch (Exception e)
            {
                return null;
            }

            return list;
        }


        public  int GetMaxPrice()
        {
            try
            {
                List<Dal.halls> list = GetAllHalls();
                halls hal=list.OrderByDescending(i => i.maxPrice).FirstOrDefault();
                return hal.maxPrice.Value;
            }
            catch (Exception e)
            {
                return 0;
            }
        }

        public int GetMinPrice()
        {
            try
            {
                List<Dal.halls> list = GetAllHalls();
                halls hal = list.OrderByDescending(i => i.minPrice).LastOrDefault();
                return hal.minPrice.Value;
            }
            catch (Exception e)
            {
                return 0;
            }
        }

        public static Dal.halls GetHallById(int id)
        {
            try
            {
                return ManangementEntitiesSingleton.Instance.halls.Find(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public List<Dal.halls> GetHallByFilter(Filter filter)
        {
            var res = new Dictionary<Dal.halls, int>();

            List<Dal.halls> hallList = GetAllHalls();
            List<Dal.halls> listFilter = new List<halls>();
            int j = 0, num = 0;

            if (filter.areas.Count() != 0)
                num++;
            if (filter.hallTypes.Count() != 0)
                num++;
            if (filter.invitds.Count() != 0)
                num++;
            if (filter.kashrut.Count() != 0)
                num++;
            if (filter.price != 0)
                num++;


            try
            {
                for (int i = 0; i < hallList.Count(); i++)
                {
                    for (j = 0; j < filter.areas.Count(); j++)
                    {

                        if (hallList[i].idArea == filter.areas[j].id)
                        {
                            if (res.ContainsKey(hallList[i]))
                            {
                                res[hallList[i]]++;
                            }
                            else
                            {
                                res[hallList[i]] = 1;
                            }
                        }
                    }



                    for (j = 0; j < filter.kashrut.Count(); j++)
                    {
                        if (hallList[i].idKashrut == filter.kashrut[j].id)
                        {
                            if (res.ContainsKey(hallList[i]))
                            {
                                res[hallList[i]]++;
                            }
                            else
                            {
                                res[hallList[i]] = 1;
                            }
                        }
                    }


                    for (j = 0; j < filter.invitds.Count(); j++)
                    {
                        if (hallList[i].idInvited >= filter.invitds[j].id)

                            if (res.ContainsKey(hallList[i]))
                            {
                                res[hallList[i]]++;
                            }
                            else
                            {
                                res[hallList[i]] = 1;
                            }
                    }



                    for (j = 0; j < filter.hallTypes.Count(); j++)
                    {
                        if (hallList[i].idtype == filter.hallTypes[j].id)
                        {
                            if (res.ContainsKey(hallList[i]))
                            {
                                res[hallList[i]]++;
                            }
                            else
                            {
                                res[hallList[i]] = 1;
                            }
                        }
                    }


                    if (filter.price != 0 && hallList[i].maxPrice >= filter.price)
                    {
                        if (res.ContainsKey(hallList[i]))
                        {
                            res[hallList[i]]++;
                        }
                        else
                        {
                            res[hallList[i]] = 1;
                        }
                    }

                }

                foreach (KeyValuePair<Dal.halls, int> entry in res)
                {
                    if (entry.Value == num)
                        listFilter.Add(entry.Key);
                }

            }
            catch (Exception e)
            {
                return null;
            }
            return listFilter;

        }

        public static int PostHall(Dal.halls halls)
        {
            try
            {
                ManangementEntitiesSingleton.Instance.halls.Add(halls);
                ManangementEntitiesSingleton.Instance.SaveChanges();

                return halls.id;
            }
            catch (Exception e)
            {
                return -1;
            }
        }


        public static bool PutHall(Dal.halls hall)
        {
            try
            {
                halls hal = ManangementEntitiesSingleton.Instance.halls.Where(x => x.id == hall.id).FirstOrDefault();
                hal.id = hall.id;
                hal.name = hall.name;
                hal.phone = hall.phone;
                hal.maxInvited = hall.maxInvited;
                hal.minInvited = hall.minInvited;
                hal.maxPrice = hall.maxPrice;
                hal.minPrice = hall.minPrice;
                hal.src = hall.src;
                hal.srcLogo = hall.srcLogo;
                hal.idtype = hall.idtype;
                hal.idAddress = hall.idAddress;
                hal.idArea = hall.idArea;
                hal.idKashrut = hall.idKashrut;
                ManangementEntitiesSingleton.Instance.SaveChanges();

                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public static bool DeleteHall(int id)
        {
            try
            {
                //delete the supplier's opinion from the opinion table
                List<Dal.Opinion> opinionList = OpinionDal.GetAllOpinionToHall(id);
                for (int i = 0; i < opinionList.Count; i++)
                    OpinionDal.DeleteOpinion(opinionList[i].id);

                //delete the supplier's id from the ProdToCust table
                List<Dal.ProductsToCustomers> ProdToCustList = ProductsToCustomersDal.GetAllProductsToCustomers().Where(x => x.idHalls == id).ToList();
                for (int i = 0; i < ProdToCustList.Count; i++)
                    ProductsToCustomersDal.DeleteProductsToCustomers(ProdToCustList[i].id);


                List<Dal.Img> ImgList = ImgDal.GetAllImg().Where(x => x.idHall == id).ToList();
                for (int i = 0; i < ImgList.Count; i++)
                    ImgDal.DeleteImg(ImgList[i].id);

                halls hall = ManangementEntitiesSingleton.Instance.halls.Where(x => x.id == id).FirstOrDefault();
                ManangementEntitiesSingleton.Instance.halls.Remove(hall);
                ManangementEntitiesSingleton.Instance.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }
}
