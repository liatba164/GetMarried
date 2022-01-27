using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
   public class SuppliersDto
    {

        public int id { get; set; }

        public string name { get; set; }

        public string phone { get; set; }

        public Nullable<int> minPrice { get; set; }

        public Nullable<int> maxPrice { get; set; }

        public string activity_time { get; set; }

        public string description { get; set; }

        public string src { get; set; }

        public string srcLogo { get; set; }

        public int idCategory { get; set; }

        public int idArea { get; set; }

        public int idAddress { get; set; }

        //public int idservice { get; set; }

        //public int idPrice { get; set; }
    }
}
