
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
    
public partial class Tasks
{

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public Tasks()
    {

        this.TasksToCustomer = new HashSet<TasksToCustomer>();

    }


    public int id { get; set; }

    public string name { get; set; }

    public Nullable<int> number { get; set; }



    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]

    public virtual ICollection<TasksToCustomer> TasksToCustomer { get; set; }

}

}
