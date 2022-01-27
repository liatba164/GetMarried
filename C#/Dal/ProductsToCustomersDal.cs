using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class ProductsToCustomersDal
    {

        public static List<Dal.ProductsToCustomers> GetAllProductsToCustomers()
        {
            List<Dal.ProductsToCustomers> list = new List<ProductsToCustomers>();
            try
            {
                list = ManangementEntitiesSingleton.Instance.ProductsToCustomers.ToList();
            }
            catch (Exception e)
            {
                return null;
            }

            return list;
        }
        public static List<Dal.ProductsToCustomers> GetAllProductsToCustomers(int idCust)
        {
            List<Dal.ProductsToCustomers> list = new List<ProductsToCustomers>();
            try
            {
                list = ManangementEntitiesSingleton.Instance.ProductsToCustomers.Where(x => x.idCustomer == idCust).ToList();
            }
            catch (Exception e)
            {
                return null;
            }

            return list;
        }


        public static Dal.ProductsToCustomers GetHallProductsToCustomersById(int id, int idCust)
        {
            try
            {
                return ManangementEntitiesSingleton.Instance.ProductsToCustomers.Where(x => x.idHalls == id && x.idCustomer == idCust).FirstOrDefault();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static Dal.ProductsToCustomers GetSupplierProductsToCustomersById(int id, int idCust)
        {
            try
            {
                return ManangementEntitiesSingleton.Instance.ProductsToCustomers.Where(x => x.idSuppliers == id && x.idCustomer == idCust).FirstOrDefault();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static bool PostProductsToCustomers(Dal.ProductsToCustomers ProdToCustomers)
        {
            try
            {
                ManangementEntitiesSingleton.Instance.ProductsToCustomers.Add(ProdToCustomers);
                ManangementEntitiesSingleton.Instance.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }


        public static bool PutProductsToCustomers(Dal.ProductsToCustomers ProdToCustomers)
        {


            try
            {
                ProductsToCustomers ProductsToCustomerses = ManangementEntitiesSingleton.Instance.ProductsToCustomers.Where(x => x.id == ProdToCustomers.id).FirstOrDefault();
                ProductsToCustomerses.id = ProdToCustomers.id;
                ProductsToCustomerses.idSuppliers = ProdToCustomers.idSuppliers;
                ProductsToCustomerses.idCustomer = ProdToCustomers.idCustomer;
                ProductsToCustomerses.idHalls = ProdToCustomers.idHalls;
                ProdToCustomers.idCategory = ProdToCustomers.idCategory;
                ManangementEntitiesSingleton.Instance.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public static bool DeleteProductsToCustomers(int id)
        {
            try
            {
                ProductsToCustomers ProdToCustomers = ManangementEntitiesSingleton.Instance.ProductsToCustomers.Where(x => x.id == id).FirstOrDefault();
                ManangementEntitiesSingleton.Instance.ProductsToCustomers.Remove(ProdToCustomers);
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
