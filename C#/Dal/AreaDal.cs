using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Dal
{
    public class AreaDal
    {
        protected WeddingEntities db;

        public AreaDal()
        {
            db = new WeddingEntities();
        }
        public List<Dal.Area> GetAllArea()
        {
            try
            {
                List<Dal.Area> list = new List<Dal.Area>();

                list = db.Area.ToList();
                return list;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public Dal.Area GetAreaByID(int id)
        {
            try
            {
                return db.Area.Find(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public bool PostArea(Dal.Area area)
        {
            try
            {
                db.Area.Add(area);
                db.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public bool PutArea(Dal.Area area)
        {

            try
            {
                Area are = db.Area.Where(x => x.id == area.id).FirstOrDefault();
                are.area1 = area.area1;
                db.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public bool DeleteArea(int id)
        {
            try
            {
                Area area = db.Area.Where(x => x.id == id).FirstOrDefault();
                db.Area.Remove(area);
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
