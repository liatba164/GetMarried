using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
	public class ImgDto
	{
		public int id { get; set; }

		public string src { get; set; }

		public int idCategory { get; set; }

		public Nullable<int> idHall { get; set; }

		public Nullable<int> idSuppliers { get; set; }
}
}
