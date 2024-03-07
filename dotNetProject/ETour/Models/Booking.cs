using System;
using System.Collections.Generic;

namespace Demo.Models;

public partial class Booking
{
    public int BookingId { get; set; }

    public string? BookingDate { get; set; }

    public int NumberOfPassengers { get; set; }

    public int TourAmount { get; set; }

    public int Taxes { get; set; }

    public int TotalAmount { get; set; }

    public int PkgId { get; set; }

    public int CustId { get; set; }
}
