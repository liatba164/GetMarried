using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Dal
{
    public class KashrutDal
    {
        protected WeddingEntities db;

        public KashrutDal()
        {
            db = new WeddingEntities();
        }
        public List<Dal.Kashrut> GetAllKashrut()
        {
            try
            {
                List<Dal.Kashrut> list = new List<Dal.Kashrut>();
                list = db.Kashrut.ToList();

                return list;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public Dal.Kashrut GetKashrutById(int id)
        {
            try
            {
                return db.Kashrut.Find(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public bool PostKashrut(Dal.Kashrut Kashrut)
        {
            try
            {
                db.Kashrut.Add(Kashrut);
                db.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }


        public bool PutKashrut(Dal.Kashrut Kashrut)
        {
            try
            {
                Kashrut kash = db.Kashrut.Where(x => x.id == Kashrut.id).FirstOrDefault();
                kash.kashrut1 = Kashrut.kashrut1;
                db.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public bool DeleteKashrut(int id)
        {
            try
            {
                Kashrut Kashrut = db.Kashrut.Where(x => x.id == id).FirstOrDefault();
                db.Kashrut.Remove(Kashrut);
                db.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }
}
