using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Dal
{
    public class ServiceDal
    {
        protected WeddingEntities db;

        public ServiceDal()
        {
            db = new WeddingEntities();
        }
        public List<Dal.Service> GetAllServices(int category)
        {
            List<Dal.Service> list = new List<Service>();
            try
            {
                list = db.Service.Where(x => x.idCategory == category).ToList();
            }
            catch (Exception e)
            {
                return null;
            }
            return list;
        }


        public Dal.Service GetServiceById(int id)
        {
            try
            {
                return db.Service.Find(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public bool PostService(Dal.Service serv)
        {
            try
            {
                db.Service.Add(serv);
                db.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
        public bool PutService(Dal.Service service)
        {
            try
            {
                Service serv = db.Service.Where(x => x.id == service.id).FirstOrDefault();
                serv.id = service.id;
                serv.serv = service.serv;
                db.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public bool DeleteService(int id)
        {
            try
            {
                Service service = db.Service.Where(x => x.id == id).FirstOrDefault();
                db.Service.Remove(service);
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
