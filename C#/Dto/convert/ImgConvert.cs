using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto.convert
{
  public  class ImgConvert
    {

        public static List<ImgDto> ConvertDalEntityToDto(List<Dal.Img> img)
        {
            if (img == null)
                return null;
            List<ImgDto> ImgDto = img.Select(a => ConvertDalEntityToDto(a)).ToList();
            return ImgDto;

        }

        public static ImgDto ConvertDalEntityToDto(Dal.Img img)
        {
            if (img is null)
                return null;
            ImgDto imgDto = new ImgDto()
            {
                id = img.id,
                idCategory = img.idCategory,
                idHall=img.idHall,
                idSuppliers=img.idSuppliers,
                src = img.src,
            };
            return imgDto;
        }


        public static Dal.Img ConvertDalDtoToEntity(ImgDto imgDto)
        {
            try
            {
                Dal.Img img = new Dal.Img()
                {
                    id = imgDto.id,
                    idCategory = imgDto.idCategory,
                    idHall = imgDto.idHall,
                    idSuppliers = imgDto.idSuppliers,
                    src = imgDto.src,
                };
                return img;
            }
            catch (Exception e)
            {
                return null;
            }
        }



        public static List<Dal.Img> ConvertDalDtoToEntity(List<ImgDto> img)
        {
            if (img == null)
                return null;
            List<Dal.Img> ImgDto = img.Select(a => ConvertDalDtoToEntity(a)).ToList();
            return ImgDto;
        }


    }
}
