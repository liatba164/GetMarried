using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dto;
namespace Dto.convert
{
   public class CategoriesConvert
    {
        public static List<CategoriesDto> ConvertDalEntityToDto(List<Dal.Categories> categories)
        {
            if (categories == null)
                return null;
            List<CategoriesDto> CategoryDto = categories.Select(a => ConvertDalEntityToDto(a)).ToList();
            return CategoryDto;

        }
        public static CategoriesDto ConvertDalEntityToDto(Dal.Categories category)
        {
            if (category is null)
                return null;
            CategoriesDto CategoryDto = new CategoriesDto()
            {
                id = category.id,
                name = category.name
            };
            return CategoryDto;
        }


        public static Dal.Categories ConvertDalDtoToEntity(CategoriesDto CategoryDto)
        {
            try
            {
                Dal.Categories category = new Dal.Categories()
                {
                    id = CategoryDto.id,
                    name = CategoryDto.name
                };
                return category;
            }
            catch (Exception e)
            {
                return null;
            }
        }
    }
}
