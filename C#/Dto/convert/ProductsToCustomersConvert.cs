using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto.convert
{
    public class ProductsToCustomersConvert
    {
        public static List<ProductsToCustomersDto> ConvertDalEntityToDto(List<Dal.ProductsToCustomers> PtCustomers)
        {
            if (PtCustomers == null)
                return null;
            List<ProductsToCustomersDto> ProductsToCustomersDto = PtCustomers.Select(a => ConvertDalEntityToDto(a)).ToList();
            return ProductsToCustomersDto;

        }

        public static ProductsToCustomersDto ConvertDalEntityToDto(Dal.ProductsToCustomers PTCustomers)
        {
            if (PTCustomers is null)
                return null;
            ProductsToCustomersDto ProductsToCustomersDto = new ProductsToCustomersDto()
            {
                id = PTCustomers.id,
                idCustomer = PTCustomers.idCustomer,
                idSuppliers = PTCustomers.idSuppliers,
                idHalls = PTCustomers.idHalls,
                idCategory = PTCustomers.idCategory,
            };
            return ProductsToCustomersDto;
        }


        public static Dal.ProductsToCustomers ConvertDalDtoToEntity(ProductsToCustomersDto PTCustomersDto)
        {
            try
            {
                Dal.ProductsToCustomers ProductsToCustomers = new Dal.ProductsToCustomers()
                {
                    id = PTCustomersDto.id,
                    idCustomer = PTCustomersDto.idCustomer,
                    idSuppliers = PTCustomersDto.idSuppliers,
                    idHalls = PTCustomersDto.idHalls,
                    idCategory = PTCustomersDto.idCategory,
                };
                return ProductsToCustomers;
            }
            catch (Exception e)
            {
                return null;
            }
        }

    }
}
