using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll
{
    public class ProductsToCustomersBll
    {

        public static List<Dto.ProductsToCustomersDto> GetAllProductsToCustomers(int idCust)
        {
            return Dto.convert.ProductsToCustomersConvert.ConvertDalEntityToDto(
                   Dal.ProductsToCustomersDal.GetAllProductsToCustomers(idCust));

        }

        public static Dto.ProductsToCustomersDto GetHallProductsToCustomersById(int id, int idCust)
        {
            return Dto.convert.ProductsToCustomersConvert.ConvertDalEntityToDto(Dal.ProductsToCustomersDal.GetHallProductsToCustomersById(id, idCust));

        }

        public static Dto.ProductsToCustomersDto GetSupplierProductsToCustomersById(int id, int idCust)
        {
            return Dto.convert.ProductsToCustomersConvert.ConvertDalEntityToDto(Dal.ProductsToCustomersDal.GetSupplierProductsToCustomersById(id, idCust));

        }

        public static bool PostProductsToCustomers(Dto.ProductsToCustomersDto ProdToCustomers)
        {
            return Dal.ProductsToCustomersDal.PostProductsToCustomers(Dto.convert.ProductsToCustomersConvert.ConvertDalDtoToEntity(ProdToCustomers));
        }

        public static bool PutProductsToCustomers(Dto.ProductsToCustomersDto ProdToCustomers)
        {
            return Dal.ProductsToCustomersDal.PutProductsToCustomers(Dto.convert.ProductsToCustomersConvert.ConvertDalDtoToEntity(ProdToCustomers));

        }

        public static bool DeleteProductsToCustomers(int id)
        {
            return Dal.ProductsToCustomersDal.DeleteProductsToCustomers(id);
        }


    }
}
