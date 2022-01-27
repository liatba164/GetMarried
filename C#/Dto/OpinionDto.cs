using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class OpinionDto
    {
        public int id { get; set; }

        public string opinion1 { get; set; }

        public Nullable<int> rating { get; set; }

        public Nullable<System.DateTime> weddindDate { get; set; }


        public int idCustomer { get; set; }

        public Nullable<int> idSuppliers { get; set; }

        public Nullable<int> idHall { get; set; }
    }
}
