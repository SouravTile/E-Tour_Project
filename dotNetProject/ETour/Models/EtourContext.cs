using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Demo.Models;

public partial class EtourContext : DbContext
{
    public EtourContext()
    {
    }

    public EtourContext(DbContextOptions<EtourContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Booking> Bookings { get; set; }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Cost> Costs { get; set; }

    public virtual DbSet<CustomerMaster> CustomerMasters { get; set; }

    public virtual DbSet<Date> Dates { get; set; }

    public virtual DbSet<ItineraryMaster> ItineraryMasters { get; set; }

    public virtual DbSet<Package> Packages { get; set; }

    public virtual DbSet<Pass> Passes { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        {
        if(!optionsBuilder.IsConfigured)
        optionsBuilder.UseSqlServer("Data Source=(localdb)\\ProjectModels;Initial Catalog=Demo_Data;Integrated Security=True");
   }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.CatMasterId);
        });

        modelBuilder.Entity<Cost>(entity =>
        {
            entity.Property(e => e.Cost1).HasColumnName("Cost");
        });

        modelBuilder.Entity<CustomerMaster>(entity =>
        {
            entity.HasKey(e => e.CustId);
        });

        modelBuilder.Entity<Date>(entity =>
        {
            entity.HasKey(e => e.DepartureId).HasName("PK__Dates__8F8A78B9D2183082");

            entity.Property(e => e.DepartDate).HasColumnType("datetime");
            entity.Property(e => e.EndDate).HasColumnType("datetime");
            entity.Property(e => e.NoOfDays).HasColumnName("No_of_Days");
        });

        modelBuilder.Entity<ItineraryMaster>(entity =>
        {
            entity.HasKey(e => e.ItrId);

            entity.HasIndex(e => e.CatMasterId, "IX_ItineraryMasters_CatMasterId");
        });

        modelBuilder.Entity<Package>(entity =>
        {
            entity.HasKey(e => e.PkgId);
        });

        modelBuilder.Entity<Pass>(entity =>
        {
            entity.HasKey(e => e.PassengerId);

            entity.Property(e => e.CustId).HasColumnName("custId");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
