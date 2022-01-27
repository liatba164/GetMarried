using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll
{
   public class CustomersBll
    {
        public static List<Dto.CustomersDto> GetAllCustomers()
        {
            return Dto.convert.CustomersConvert.ConvertDalEntityToDto(
                   Dal.CustomersDal.GetAllCustomers());

        }

        public static Dto.CustomersDto GetCustomerByMail(string mail)
        {
            return Dto.convert.CustomersConvert.ConvertDalEntityToDto(Dal.CustomersDal.GetCustomerByMail(mail));

        }
        //public static Dto.CustomersDto GetLastCustomer()
        //{
        //    return Dto.convert.CustomersConvert.ConvertDalEntityToDto(Dal.CustomersDal.GetLastCustomer());

        //}
        
        public static Dto.CustomersDto GetCustomerById(int id)
        {
            return Dto.convert.CustomersConvert.ConvertDalEntityToDto(Dal.CustomersDal.GetCustomerById(id));

        }

        public static int PostCustomer(Dto.CustomersDto cust)
        {
            return Dal.CustomersDal.PostCustomer(Dto.convert.CustomersConvert.ConvertDalDtoToEntity(cust));
        }

        public static bool PutCustomer(Dto.CustomersDto cust)
        {
            return Dal.CustomersDal.PutCustomer(Dto.convert.CustomersConvert.ConvertDalDtoToEntity(cust));

        }

        public static bool DeleteCustomer(string mail)
        {
            return Dal.CustomersDal.DeleteCustomer(mail);
        }

    }
}
