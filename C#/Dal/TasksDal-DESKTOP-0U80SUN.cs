using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class TasksDal
    {

        public static List<Dal.Tasks> GetAllTasks()
        {
            List<Dal.Tasks> list = new List<Tasks>();
            try
            {
                list = ManangementEntitiesSingleton.Instance.Tasks.ToList(); ;
            }
            catch (Exception e)
            {
                return null;
            }

            return list;
        }


        public static Dal.Tasks GetTaskById(int id)
        {
            try
            {
                return ManangementEntitiesSingleton.Instance.Tasks.Find(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static Dal.Tasks GetTaskByNumber(int num)
        {
            try
            {
                return ManangementEntitiesSingleton.Instance.Tasks.Find(num);
            }
            catch (Exception e)
            {
                return null;
            }
        }


        //public static List<Dal.Tasks> GetTasksByNumber(int num)
        //{
        //    List<Dal.Tasks> list = new List<Tasks>();
        //    try
        //    {
        //        list = ManangementEntitiesSingleton.Instance.Tasks.Where(x => x.number == num).ToList(); ;
        //    }
        //    catch (Exception e)
        //    {
        //        return null;
        //    }

        //    return list;
        //}

        public static bool PostTask(Dal.Tasks Task)
        {
            try
            {
                ManangementEntitiesSingleton.Instance.Tasks.Add(Task);
                ManangementEntitiesSingleton.Instance.SaveChanges();
            return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }


        public static bool PutTask(Dal.Tasks task)
        {


            try
            {
                Tasks tsk = ManangementEntitiesSingleton.Instance.Tasks.Where(x => x.id == task.id).FirstOrDefault();
                tsk.name = task.name;
                tsk.number = task.number;
                tsk.id = task.id;
                ManangementEntitiesSingleton.Instance.SaveChanges();
            return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public static bool DeleteTask(int id)
        {
            try
            {
                Tasks Task = ManangementEntitiesSingleton.Instance.Tasks.Where(x => x.id == id).FirstOrDefault();
                ManangementEntitiesSingleton.Instance.Tasks.Remove(Task);
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
