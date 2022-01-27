using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class ContactUsDal
    {

        public static List<Dal.ContactUs> GetAllContact()
        {
            List<Dal.ContactUs> list = new List<ContactUs>();
            try
            {
                list = ManangementEntitiesSingleton.Instance.ContactUs.ToList();
            }
            catch (Exception e)
            {
                return null;
            }

            return list;
        }


        public static bool PostContact(ContactUs Contact)
        {
            try
            {
                ManangementEntitiesSingleton.Instance.ContactUs.Add(Contact);
                ManangementEntitiesSingleton.Instance.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }


        public static bool PutContact(ContactUs contact)
        {
            try
            {
                ContactUs cont = ManangementEntitiesSingleton.Instance.ContactUs.Where(x => x.id == contact.id).FirstOrDefault();
                cont.id = contact.id;
                cont.name = contact.name;
                cont.phone = contact.phone;
                cont.email = contact.email;
                cont.message = contact.message;
                ManangementEntitiesSingleton.Instance.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public static bool DeleteContact(int id)
        {
            try
            {
                ContactUs contact = ManangementEntitiesSingleton.Instance.ContactUs.Where(x => x.id == id).FirstOrDefault();
                ManangementEntitiesSingleton.Instance.ContactUs.Remove(contact);
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
