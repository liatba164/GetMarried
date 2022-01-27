using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Dal
{
    public class ImgDal
    {

        public static List<Dal.Img> GetAllImg()
        {
            List<Dal.Img> list = new List<Img>();
            try
            {
                list = ManangementEntitiesSingleton.Instance.Img.ToList();
            }
            catch (Exception e)
            {
                return null;
            }

            return list;
        }


        public static List<Dal.Img> GetHallImgById(int idcategory, int? idhall)
        {
            List<Dal.Img> list = new List<Img>();
            try
            {
                list = ManangementEntitiesSingleton.Instance.Img.Where(x => x.idCategory == idcategory && x.idHall == idhall).ToList();
            }
            catch (Exception e)
            {
                return null;
            }
            return list;

        }


        public static List<Dal.Img> GetSuppliersImgById(int idcategory, int? idsup)
        {
            List<Dal.Img> list = new List<Img>();
            try
            {
                list = ManangementEntitiesSingleton.Instance.Img.Where(x => x.idCategory == idcategory && x.idSuppliers == idsup).ToList();
            }
            catch (Exception e)
            {
                return null;
            }
            return list;

        }

        public static bool PostImg(Dal.Img img)
        {

            try
            {
                ManangementEntitiesSingleton.Instance.Img.Add(img);
                ManangementEntitiesSingleton.Instance.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public static bool PostImages(List<Dal.Img> img)
        {
            try
            {
                if (img == null)
                    return false;

                List<Img> list=new List<Img>();
                
                if (img[0].idHall != 0 && img[0].idHall != null)
                     list = GetHallImgById(1, img[0].idHall);
                else
                if (img[0].idSuppliers != 0 && img[0].idSuppliers != null)
                    list = GetSuppliersImgById(img[0].idCategory, img[0].idSuppliers);

                foreach (var item in list)
                {
                    ManangementEntitiesSingleton.Instance.Img.Remove(item);
                    ManangementEntitiesSingleton.Instance.SaveChanges();

                }
                if (img[0].id != -1)
                    foreach (var item in img)
                    {
                        ManangementEntitiesSingleton.Instance.Img.Add(item);
                        ManangementEntitiesSingleton.Instance.SaveChanges();
                    }

                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }


        public static bool PutImg(Dal.Img img)
        {
            try
            {
                Img imges = ManangementEntitiesSingleton.Instance.Img.Where(x => x.id == img.id).FirstOrDefault();
                imges.id = img.id;
                imges.src = img.src;
                imges.idCategory = img.idCategory;
                ManangementEntitiesSingleton.Instance.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public static bool DeleteImg(int id)
        {
            try
            {
                Img img = ManangementEntitiesSingleton.Instance.Img.Where(x => x.id == id).FirstOrDefault();
                ManangementEntitiesSingleton.Instance.Img.Remove(img);
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
