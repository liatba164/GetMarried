
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
    
public partial class TasksToCustomer
{

    public int id { get; set; }

    public int idCustomer { get; set; }

    public int idTask { get; set; }

    public Nullable<bool> done { get; set; }



    public virtual Customers Customers { get; set; }

    public virtual Tasks Tasks { get; set; }

}

}
