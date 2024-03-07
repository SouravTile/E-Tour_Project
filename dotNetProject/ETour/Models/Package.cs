using System;
using System.Collections.Generic;

namespace Demo.Models;

public partial class Package
{
    public int PkgId { get; set; }

    public int CatMasterId { get; set; }

    public int DepartureId { get; set; }

    public int? DateMasterDepartureId { get; set; }
}
