
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
    
public partial class ServToSupp
{

    public int id { get; set; }

    public int idSuppliers { get; set; }

    public Nullable<int> idServ { get; set; }



    public virtual Service Service { get; set; }

    public virtual Suppliers Suppliers { get; set; }

}

}
