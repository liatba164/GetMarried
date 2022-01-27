using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class OpinionDal
    {
        public static List<Dal.Opinion> GetAllOpinionToHall(int id)
        {
            List<Dal.Opinion> list = new List<Opinion>();
            try
            {
                list = ManangementEntitiesSingleton.Instance.Opinion.Where(x => x.idHall == id).ToList();
            }
            catch (Exception e)
            {
                return null;
            }

            return list;
        }


        public static List<Dal.Opinion> GetAllOpinionToSupp(int id)
        {
            List<Dal.Opinion> list = new List<Opinion>();
            try
            {
                list = ManangementEntitiesSingleton.Instance.Opinion.Where(x => x.idSuppliers == id).ToList();
            }
            catch (Exception e)
            {
                return null;
            }

            return list;
        }

        public static Dal.Opinion GetOpinionById(int id)
        {
            try
            {
                return ManangementEntitiesSingleton.Instance.Opinion.Find(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static bool PostOpinion(Dal.Opinion opinion)
        {
            try
            {
                ManangementEntitiesSingleton.Instance.Opinion.Add(opinion);
                ManangementEntitiesSingleton.Instance.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }


        public static bool PutOpinion(Dal.Opinion opinion)
        {
            Opinion opin = ManangementEntitiesSingleton.Instance.Opinion.Where(x => x.id == opinion.id).FirstOrDefault();

            try
            {
                opin.id = opinion.id;
                opin.opinion1 = opinion.opinion1;
                opin.rating = opinion.rating;
                opin.idSuppliers = opinion.idSuppliers;
                opin.idCustomer = opinion.idCustomer;
                opin.idHall = opinion.idHall;
                opin.weddindDate = opinion.weddindDate;
                ManangementEntitiesSingleton.Instance.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public static bool DeleteOpinion(int id)
        {
            try
            {
                Opinion opinion = ManangementEntitiesSingleton.Instance.Opinion.Where(x => x.id == id).FirstOrDefault();
                ManangementEntitiesSingleton.Instance.Opinion.Remove(opinion);
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
