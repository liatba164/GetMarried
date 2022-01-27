using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll
{
   public class SuppliersBll
    {
        Dal.SuppliersDal supplierDal = new Dal.SuppliersDal();

        public static List<Dto.SuppliersDto> GetAllSuppliers()
        {
            return Dto.convert.SuppliersConvert.ConvertDalEntityToDto(
                   Dal.SuppliersDal.GetAllSuppliers());

        }
        public  List<Dto.SuppliersDto> GetAllSuppliers(int category)
        {
            return Dto.convert.SuppliersConvert.ConvertDalEntityToDto(
                  supplierDal.GetAllSuppliers(category));

        }

        public  int GetMaxPrice(int category)
        {
            return supplierDal.GetMaxPrice(category);

        }

        public  int GetMinPrice(int category)
        {
            return supplierDal.GetMinPrice(category);

        }


        public static Dto.SuppliersDto GetSupplierById(int id)
        {
            return Dto.convert.SuppliersConvert.ConvertDalEntityToDto(Dal.SuppliersDal.GetSupplierById(id));

        }


        public  List<Dto.SuppliersDto> GetSuppliersByFilter(filterSuppliers filter)
        {
            return Dto.convert.SuppliersConvert.ConvertDalEntityToDto(
                supplierDal.GetSuppliersByFilter(filter));

        }
        public static int PostSupplier(Dto.SuppliersDto Suppliers)
        {
            return Dal.SuppliersDal.PostSupplier(Dto.convert.SuppliersConvert.ConvertDalDtoToEntity(Suppliers));
        }

        public static bool PutSupplier(Dto.SuppliersDto Suppliers)
        {
            return Dal.SuppliersDal.PutSupplier(Dto.convert.SuppliersConvert.ConvertDalDtoToEntity(Suppliers));

        }

        public static bool DeleteSupplier(int id)
        {
            return Dal.SuppliersDal.DeleteSupplier(id);
        }

    }
}
