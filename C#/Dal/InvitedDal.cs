using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Dal
{
    public class InvitedDal
    {
        protected WeddingEntities db;

        public InvitedDal()
        {
            db = new WeddingEntities();
        }
        public List<Dal.Invited> GetAllInvited()
        {
            try
            {
                List<Dal.Invited> list = new List<Dal.Invited>();
                list = db.Invited.ToList();
                return list;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public Dal.Invited GetInvitedById(int id)
        {
            try
            {
                return db.Invited.Find(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public bool PostInvited(Dal.Invited Invited)
        {
            try
            {
                db.Invited.Add(Invited);
                db.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }


        public bool PutInvited(Dal.Invited Invited)
        {
            try
            {
                Invited invit = db.Invited.Where(x => x.id == Invited.id).FirstOrDefault();
                invit.invited1 = Invited.invited1;
                db.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public bool DeleteInvited(int id)
        {
            try
            {
                Invited Invited = ManangementEntitiesSingleton.Instance.Invited.Where(x => x.id == id).FirstOrDefault();
                db.Invited.Remove(Invited);
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
