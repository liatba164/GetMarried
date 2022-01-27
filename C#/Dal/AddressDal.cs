using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Dal
{
    public class AddressDal
    {
        public static List<Dal.Address> GetAllAddress()
        {
            List<Dal.Address> list = new List<Address>();
            try
            {
                list = ManangementEntitiesSingleton.Instance.Address.ToList();
            }
            catch (Exception e)
            {
                return null;
            }

            return list;
        }


        public static Dal.Address GetAddressById(int id)
        {
            try
            {
                return ManangementEntitiesSingleton.Instance.Address.Find(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static int PostAddress(Dal.Address address)
        {
            try
            {
                ManangementEntitiesSingleton.Instance.Address.Add(address);
                ManangementEntitiesSingleton.Instance.SaveChanges();
                return address.id;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return -1;
            }
        }


        public static bool PutAddress(Dal.Address address)
        {


            try
            {
                Address addres = ManangementEntitiesSingleton.Instance.Address.Where(x => x.id == address.id).FirstOrDefault();

                addres.id = address.id;
                addres.city = address.city;
                addres.street = address.street;
                addres.number = address.number;
                ManangementEntitiesSingleton.Instance.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }

        }

        public static bool DeleteAddress(int id)
        {
            try
            {
                Address adres = ManangementEntitiesSingleton.Instance.Address.Where(x => x.id == id).FirstOrDefault();
                ManangementEntitiesSingleton.Instance.Address.Remove(adres);
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
