using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Dal
{

    public class HallTypeDal
    {
        protected WeddingEntities db;

        public HallTypeDal()
        {
            db = new WeddingEntities();
        }

        public  List<Dal.HallType> GetAllHallType()
        {
            List<Dal.HallType> list = new List<HallType>();
            try
            {
                list = db.HallType.ToList();
                return list;
            }
            catch (Exception e)
            {
                return null;
            }
        }


        public  Dal.HallType GetHallTypeById(int id)
        {
            try
            {
                return db.HallType.Find(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public  bool PostHallType(Dal.HallType HallType)
        {
            try
            {
                db.HallType.Add(HallType);
                db.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }


        public  bool PutHallType(Dal.HallType HallType)
        {
            try
            {
                HallType hall = db.HallType.Where(x => x.id == HallType.id).FirstOrDefault();
                hall.id = HallType.id;
                hall.type = HallType.type;

                db.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public  bool DeleteHallType(int id)
        {
            try
            {
                HallType hall = db.HallType.Where(x => x.id == id).FirstOrDefault();
                db.HallType.Remove(hall);
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
