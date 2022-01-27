using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
	public class TasksToCustomerDto
	{

		public int id { get; set; }

		public int idCustomer { get; set; }

		public int idTask { get; set; }

		public Nullable<bool> done { get; set; }


	}
}
