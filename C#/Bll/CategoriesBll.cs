using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll
{
    public class CategoriesBll
    {
        public static List<Dto.CategoriesDto> GetAllCategories()
        {
            return Dto.convert.CategoriesConvert.ConvertDalEntityToDto(
                   Dal.CategoriesDal.GetAllCategories());

        }

        public static Dto.CategoriesDto GetCategoryById(int id)
        {
            return Dto.convert.CategoriesConvert.ConvertDalEntityToDto(Dal.CategoriesDal.GetIDCategories(id));

        }

        public static bool PostCategories(Dto.CategoriesDto categories)
        {
            return Dal.CategoriesDal.PostCategory(Dto.convert.CategoriesConvert.ConvertDalDtoToEntity(categories));
        }

        public static bool PutCategories(Dto.CategoriesDto categories)
        {
            return Dal.CategoriesDal.PutCategory(Dto.convert.CategoriesConvert.ConvertDalDtoToEntity(categories));
            
        }

        public static bool DeleteCategory(int id)
        {
            return Dal.CategoriesDal.DeleteCategory(id);
        }
    }

}
