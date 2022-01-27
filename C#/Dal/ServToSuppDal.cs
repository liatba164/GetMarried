using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Dal
{
    public class ServToSuppDal
    {
        public static List<Dal.ServToSupp> GetAllServToSupp(int idSup)
        {
            List<ServToSupp> list = new List<ServToSupp>();
            try
            {
                list = ManangementEntitiesSingleton.Instance.ServToSupp.Where(x => x.idSuppliers == idSup).ToList();

            }
            catch (Exception e)
            {
                return null;
            }

            return list;
        }


        public static Dal.ServToSupp GetServToSuppById(int id)
        {
            try
            {
                return ManangementEntitiesSingleton.Instance.ServToSupp.Find(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }


        public static bool PostServToSupp(ServToSupp serv)
        {
            try
            {
                ManangementEntitiesSingleton.Instance.ServToSupp.Add(serv);
                ManangementEntitiesSingleton.Instance.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }

        }


        public static bool PostServicesToSupp(List<ServToSupp> serv)
        {
            try
            {
                List<ServToSupp> list = GetAllServToSupp(serv[0].idSuppliers);

                foreach (var item in list)
                {
                    ManangementEntitiesSingleton.Instance.ServToSupp.Remove(item);
                    ManangementEntitiesSingleton.Instance.SaveChanges();

                }
                if (serv[0].id != -1)
                    foreach (var item in serv)
                    {
                        ManangementEntitiesSingleton.Instance.ServToSupp.Add(item);
                        ManangementEntitiesSingleton.Instance.SaveChanges();
                    }

                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public static bool PutServToSupp(ServToSupp serv)
        {
            try
            {
                ServToSupp srv = ManangementEntitiesSingleton.Instance.ServToSupp.Where(x => x.id == serv.id).FirstOrDefault();
                srv.id = serv.id;
                srv.idServ = serv.idServ;
                srv.idSuppliers = serv.idSuppliers;
                ManangementEntitiesSingleton.Instance.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public static bool DeleteServToSupp(int id)
        {
            try
            {
                ServToSupp srv = ManangementEntitiesSingleton.Instance.ServToSupp.Where(x => x.id == id).FirstOrDefault();
                ManangementEntitiesSingleton.Instance.ServToSupp.Remove(srv);
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
