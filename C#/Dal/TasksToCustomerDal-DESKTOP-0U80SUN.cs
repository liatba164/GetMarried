using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
	public class TasksToCustomerDal
    {

        public static List<Dal.TasksToCustomer> GetAllTasksToCustomer(int idCust)
        {
            
            try
            {
               return ManangementEntitiesSingleton.Instance.TasksToCustomer.Where(x=>x.idCustomer==idCust).ToList(); ;
            }
            catch (Exception e)
            {
                return null;
            }

           
        }


        public static TasksToCustomer GetTasksToCustomerById(int id,int idcust)
        {
            try
            {
                return ManangementEntitiesSingleton.Instance.TasksToCustomer.Where(x => x.idCustomer == idcust && x.idTask==id).FirstOrDefault();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static bool PostTasksToCustomer(TasksToCustomer tasks)
        {
            try
            {
                ManangementEntitiesSingleton.Instance.TasksToCustomer.Add(tasks);
                ManangementEntitiesSingleton.Instance.SaveChanges();
            return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }


        public static bool PutTasksToCustomer(TasksToCustomer tasksToCustomer)
        {
          

            try
            {  
                TasksToCustomer task = ManangementEntitiesSingleton.Instance.TasksToCustomer.Where(x => x.id == tasksToCustomer.id).FirstOrDefault();
                task.id = tasksToCustomer.id;
                task.idCustomer = tasksToCustomer.idCustomer;
                task.idTask = tasksToCustomer.idTask;
                task.done = tasksToCustomer.done;

                ManangementEntitiesSingleton.Instance.SaveChanges();
            return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public static bool DeleteTasksToCustomer(int id)
        {
            try
            {
                TasksToCustomer tasksToCustomer = ManangementEntitiesSingleton.Instance.TasksToCustomer.Where(x => x.idCustomer == id).FirstOrDefault();
                ManangementEntitiesSingleton.Instance.TasksToCustomer.Remove(tasksToCustomer);
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
