
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------


namespace Dal
{

using System;
    using System.Collections.Generic;
    
public partial class ProductsToCustomers
{

    public int id { get; set; }

    public int idCustomer { get; set; }

    public Nullable<int> idSuppliers { get; set; }

    public Nullable<int> idHalls { get; set; }

    public int idCategory { get; set; }



    public virtual Categories Categories { get; set; }

    public virtual Customers Customers { get; set; }

    public virtual halls halls { get; set; }

    public virtual Suppliers Suppliers { get; set; }

}

}
