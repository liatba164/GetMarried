using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class HallsDto
    {
        public int id { get; set; }

        public string name { get; set; }

        public string phone { get; set; }

        public Nullable<int> minInvited { get; set; }

        public Nullable<int> maxInvited { get; set; }

        public Nullable<int> minPrice { get; set; }

        public Nullable<int> maxPrice { get; set; }

        public string description { get; set; }

        public string src { get; set; }

        public string srcLogo { get; set; }

        public int idtype { get; set; }

        public int idArea { get; set; }

        public int idAddress { get; set; }

        public int idKashrut { get; set; }

        //public int idPrice { get; set; }

        public int idInvited { get; set; }

    }
}
