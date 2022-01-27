using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
   public class ManangementEntitiesSingleton
    {
        private static readonly Lazy<WeddingEntities>
       lazy = new Lazy<WeddingEntities>
           (() => new WeddingEntities());

        public static WeddingEntities Instance { get { return lazy.Value; } }
        private ManangementEntitiesSingleton()
        {
        }
    }
}
