
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class Filter
    {
        public Kashrut[] kashrut { get; set; }
        public Invited[] invitds { get; set; }
        public Area[] areas { get; set; }
        public HallType[] hallTypes { get; set; }
        public int price { get; set; }

    }
}
