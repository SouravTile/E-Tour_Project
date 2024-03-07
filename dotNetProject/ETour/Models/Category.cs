using System;
using System.Collections.Generic;

namespace Demo.Models;

public partial class Category
{
    public int CatMasterId { get; set; }

    public string? CatId { get; set; }

    public string? SubCatId { get; set; }

    public string? CatName { get; set; }

    public string? CatImagePath { get; set; }

    public string? Flag { get; set; }
}
