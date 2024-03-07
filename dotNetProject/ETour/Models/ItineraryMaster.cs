using System;
using System.Collections.Generic;

namespace Demo.Models;

public partial class ItineraryMaster
{
    public int ItrId { get; set; }

    public int DayNo { get; set; }

    public string? ItrDetails { get; set; }

    public int CatMasterId { get; set; }

    public int? CategoryMasterCatMasterId { get; set; }
}
