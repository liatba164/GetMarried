using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll
{
    public class ImgBll
    {

        public static List<Dto.ImgDto> GetAllImg()
        {
            return Dto.convert.ImgConvert.ConvertDalEntityToDto(
                   Dal.ImgDal.GetAllImg());

        }

        public static List<Dto.ImgDto> GetHallImgById(int idcategory, int idhall)
        {
            return Dto.convert.ImgConvert.ConvertDalEntityToDto(Dal.ImgDal.GetHallImgById(idcategory, idhall));

        }

        public static List<Dto.ImgDto> GetSuppliersImgById(int idcategory, int idSupp)
        {
            return Dto.convert.ImgConvert.ConvertDalEntityToDto(Dal.ImgDal.GetSuppliersImgById(idcategory, idSupp));

        }

        public static bool PostImg(Dto.ImgDto img)
        {
            return Dal.ImgDal.PostImg(Dto.convert.ImgConvert.ConvertDalDtoToEntity(img));
        }

        public static bool PostImages(List<Dto.ImgDto> img)
        {
            return Dal.ImgDal.PostImages(Dto.convert.ImgConvert.ConvertDalDtoToEntity(img));
        }

      
        public static bool PutImg(Dto.ImgDto img)
        {
            return Dal.ImgDal.PutImg(Dto.convert.ImgConvert.ConvertDalDtoToEntity(img));

        }

        public static bool DeleteImg(int id)
        {
            return Dal.ImgDal.DeleteImg(id);
        }

     

    }
}
