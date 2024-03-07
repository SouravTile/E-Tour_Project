using System;
using System.Collections.Generic;

namespace Demo.Models;

public partial class Cost
{
    public int CostId { get; set; }

    public int Cost1 { get; set; }

    public int SinglePersonCost { get; set; }

    public int ExtraPersonCost { get; set; }

    public int ChildWithBed { get; set; }

    public int ChildWithoutBed { get; set; }

    public DateTime? ValidFrom { get; set; }

    public DateTime? ValidTo { get; set; }

    public int CatMasterId { get; set; }
}
