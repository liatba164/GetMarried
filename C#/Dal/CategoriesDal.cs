using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class CategoriesDal
    {
        public static List<Dal.Categories> GetAllCategories()
        {
            try
            {
                return ManangementEntitiesSingleton.Instance.Categories.ToList();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static Dal.Categories GetIDCategories(int id)
        {
            try
            {
                return ManangementEntitiesSingleton.Instance.Categories.Find(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static bool PostCategory(Dal.Categories categories)
        {
            try
            {
                ManangementEntitiesSingleton.Instance.Categories.Add(categories);
                ManangementEntitiesSingleton.Instance.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }


        public static bool PutCategory(Dal.Categories categories)
        {
            Categories category = ManangementEntitiesSingleton.Instance.Categories.Where(x => x.id == categories.id).FirstOrDefault();

            try
            {
                category.id = categories.id;
                category.name = categories.name;
                ManangementEntitiesSingleton.Instance.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public static bool DeleteCategory(int id)
        {
            try
            {
                Categories categories = ManangementEntitiesSingleton.Instance.Categories.Where(x => x.id == id).FirstOrDefault();
                ManangementEntitiesSingleton.Instance.Categories.Remove(categories);
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
