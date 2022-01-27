using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class ProductsToCustomersDto
    {
        public int id { get; set; }

        public int idCustomer { get; set; }

        public Nullable<int> idSuppliers { get; set; }

        public Nullable<int> idHalls { get; set; }

        public int idCategory { get; set; }

    }
}
