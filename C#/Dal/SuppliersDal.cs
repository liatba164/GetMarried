using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Dal
{
    public class SuppliersDal
    {

        protected WeddingEntities db;

        public SuppliersDal()
        {
            db = new WeddingEntities();
        }

        public static List<Dal.Suppliers> GetAllSuppliers()
        {
            List<Dal.Suppliers> list = new List<Suppliers>();
            try
            {
                list = ManangementEntitiesSingleton.Instance.Suppliers.ToList();
            }
            catch (Exception e)
            {
                return null;
            }

            return list;
        }


        public  List<Dal.Suppliers> GetAllSuppliers(int category)
        {
            List<Dal.Suppliers> list = new List<Suppliers>();
            try
            {
                list = db.Suppliers.Where(x => x.idCategory == category).ToList();
                //var db = ManangementEntitiesSingleton.Instance;
                //if (db != null)
                //{

                //    var suppliers = db.Suppliers;
                //    {
                //        if (suppliers != null)
                //        {
                //            list = suppliers?.Where(x => x.idCategory == category).ToList();
                //        }
                //    }
                //}

            }
            catch (Exception e)
            {
                return null;
            }

            return list;
        }

        public  int GetMaxPrice(int id)
        {
            try
            {
                Dal.Suppliers sup = GetAllSuppliers(id).OrderByDescending(i => i.maxPrice).FirstOrDefault();
                return sup.maxPrice.Value;
            }
            catch (Exception e)
            {
                return 0;
            }
        }

        public  int GetMinPrice(int id)
        {
            try
            {
                Dal.Suppliers sup = GetAllSuppliers(id).OrderByDescending(i => i.minPrice).LastOrDefault();
                Thread.Sleep(500);
                return sup.minPrice.Value;
            }
            catch (Exception e)
            {
                return 0;
            }
        }



        public  List<Dal.Suppliers> GetSuppliersByFilter(filterSuppliers filter)
        {
            var res = new Dictionary<Dal.Suppliers, int>();
            List<Dal.Suppliers> SupplierList = GetAllSuppliers(filter.idCategory);
            List<Dal.Suppliers> listFilter = new List<Suppliers>();
            int j = 0, num = 0;

            if (filter.areas.Count() != 0)
                num++;
            if (filter.service.Count() != 0)
                num++;
            if (filter.price != 0)
                num++;

            try
            {

                for (int i = 0; i < SupplierList.Count(); i++)
                {
                    List<Dal.ServToSupp> services = ServToSuppDal.GetAllServToSupp(SupplierList[i].id);
                    for (int x = 0; x < services.Count; x++)
                    {
                        for (j = 0; j < filter.service.Count(); j++)
                        {
                            if (services[x].idServ == filter.service[j].id)
                            {
                                var current = GetSupplierById(SupplierList[i].id);
                                if (res.ContainsKey(current))
                                {
                                    res[SupplierList[i]]++;
                                }
                                else
                                {
                                    res[SupplierList[i]] = 1;
                                }
                            }
                        }
                    }

                    for (j = 0; j < filter.areas.Count(); j++)
                    {

                        if (SupplierList[i].idArea == filter.areas[j].id)
                        {
                            if (res.ContainsKey(SupplierList[i]))
                            {
                                res[SupplierList[i]]++;
                            }
                            else
                            {
                                res[SupplierList[i]] = 1;
                            }
                        }
                    }

                    if (filter.price != 0 && SupplierList[i].maxPrice >= filter.price)
                    {
                        if (res.ContainsKey(SupplierList[i]))
                        {
                            res[SupplierList[i]]++;
                        }
                        else
                        {
                            res[SupplierList[i]] = 1;
                        }
                    }
                }


                foreach (KeyValuePair<Dal.Suppliers, int> entry in res)
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

        public static Dal.Suppliers GetSupplierById(int id)
        {
            try
            {
                return ManangementEntitiesSingleton.Instance.Suppliers.Find(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static int PostSupplier(Dal.Suppliers supplier)
        {
            try
            {
                ManangementEntitiesSingleton.Instance.Suppliers.Add(supplier);
                ManangementEntitiesSingleton.Instance.SaveChanges();
                return supplier.id;
            }
            catch (Exception e)
            {
                return -1;
            }
        }


        public static bool PutSupplier(Dal.Suppliers supplier)
        {
            try
            {
                Suppliers sup = ManangementEntitiesSingleton.Instance.Suppliers.Where(x => x.id == supplier.id).FirstOrDefault();
                sup.id = supplier.id;
                sup.name = supplier.name;
                sup.phone = supplier.phone;
                sup.activity_time = supplier.activity_time;
                sup.idCategory = supplier.idCategory;
                sup.idAddress = supplier.idAddress;
                sup.idArea = supplier.idArea;
                sup.description = supplier.description;
                sup.minPrice = supplier.minPrice;
                sup.maxPrice = supplier.maxPrice;
                ManangementEntitiesSingleton.Instance.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return false;
            }
        }

        public static bool DeleteSupplier(int id)
        {
            try
            {
                //delete the supplier's opinion from the opinion table
                List<Dal.Opinion> opinionList = OpinionDal.GetAllOpinionToSupp(id);
                for (int i = 0; i < opinionList.Count; i++)
                    OpinionDal.DeleteOpinion(opinionList[i].id);

                //delete the supplier's id from the ProdToCust table
                List<Dal.ProductsToCustomers> ProdToCustList = ProductsToCustomersDal.GetAllProductsToCustomers().Where(x => x.idSuppliers == id).ToList();
                for (int i = 0; i < ProdToCustList.Count; i++)
                    ProductsToCustomersDal.DeleteProductsToCustomers(ProdToCustList[i].id);

                List<Dal.Img> ImgList = ImgDal.GetAllImg().Where(x => x.idSuppliers == id).ToList();
                for (int i = 0; i < ImgList.Count; i++)
                    ImgDal.DeleteImg(ImgList[i].id);

                List<Dal.ServToSupp> ServToSuppList = ServToSuppDal.GetAllServToSupp(id);
                for (int i = 0; i < ServToSuppList.Count; i++)
                    ServToSuppDal.DeleteServToSupp(ServToSuppList[i].id);

                Suppliers supplier = ManangementEntitiesSingleton.Instance.Suppliers.Where(x => x.id == id).FirstOrDefault();
                ManangementEntitiesSingleton.Instance.Suppliers.Remove(supplier);
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
