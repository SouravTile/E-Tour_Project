using System;
using System.Collections.Generic;

namespace Demo.Models;

public partial class Date
{
    public int DepartureId { get; set; }

    public DateTime DepartDate { get; set; }

    public DateTime EndDate { get; set; }

    public int NoOfDays { get; set; }

    public int CatMasterId { get; set; }
}
