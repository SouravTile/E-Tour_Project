using System;
using System.Collections.Generic;

namespace Demo.Models;

public partial class Pass
{
    public int PassengerId { get; set; }

    public string? PassengerName { get; set; }

    public string? BirthDate { get; set; }

    public string? PassengerType { get; set; }

    public int PassengerAmount { get; set; }

    public int CustId { get; set; }
}
