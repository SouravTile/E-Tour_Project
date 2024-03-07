using System;
using System.Collections.Generic;

namespace Demo.Models;

public partial class CustomerMaster
{
    public int CustId { get; set; }

    public string? CustomerName { get; set; }
   
    public int? Age {  get; set; }   
     
    public string? Gender {  get; set; }
    public string? Countrycode { get; set; }
    public string? MobileNumber { get; set;}
    public string? Address { get; set; }
    public string? Email { get; set; }
    public string? AadharNumber {  get; set; }  
    public string? Username {  get; set; }  
    public string? Password {  get; set; }  
}
