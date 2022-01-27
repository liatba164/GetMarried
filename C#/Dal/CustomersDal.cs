using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class CustomersDal
    {
        public static List<Dal.Customers> GetAllCustomers()
        {
            List<Dal.Customers> list = new List<Customers>();
            try
            {
                list = ManangementEntitiesSingleton.Instance.Customers.ToList();
            }
            catch (Exception e)
            {
                return null;
            }

            return list;
        }


        public static Dal.Customers GetCustomerByMail(string mail)
        {
            try
            {
                return ManangementEntitiesSingleton.Instance.Customers.Where(x => x.mail == mail).FirstOrDefault();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static Dal.Customers GetCustomerById(int id)
        {
            try
            {
                return ManangementEntitiesSingleton.Instance.Customers.Find(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static int PostCustomer(Customers customers)
        {
            try
            {
                ManangementEntitiesSingleton.Instance.Customers.Add(customers);
                ManangementEntitiesSingleton.Instance.SaveChanges();
                return customers.id;
            }
            catch (Exception e)
            {
                return -1;
            }

        }

        public static bool PutCustomer(Customers customer)
        {
            try
            {
                Customers cust = ManangementEntitiesSingleton.Instance.Customers.Where(x => x.id == customer.id).FirstOrDefault();
                cust.id = customer.id;
                cust.name = customer.name;
                cust.phone = customer.phone;
                cust.mail = customer.mail;
                cust.password = customer.password;
                cust.src_profile = customer.src_profile;
                ManangementEntitiesSingleton.Instance.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }

        }

        public static bool DeleteCustomer(string mail)
        {
            try
            {
                Customers cust = ManangementEntitiesSingleton.Instance.Customers.Where(x => x.mail == mail).FirstOrDefault();
                ManangementEntitiesSingleton.Instance.Customers.Remove(cust);
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
