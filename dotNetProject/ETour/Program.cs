using Demo.Models;
using Demo.Models.Repositories;
using Microsoft.EntityFrameworkCore;
using System;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddTransient<ICategoryRepository, CategoryRepository>();
builder.Services.AddTransient<IDateRepository, DateRepository>();
builder.Services.AddTransient<IPackageRepository, PackageRepository>();
builder.Services.AddTransient<ICostRepository, CostRepository>();
builder.Services.AddTransient<IitinerRepository, itnerarRepository>();
builder.Services.AddTransient<IPassengerRepository, PassengerRepository>();
builder.Services.AddTransient<ICustomerRepository, CustomerRepository>();
builder.Services.AddTransient<IBookingRepository, BookingRepository>();
builder.Services.AddDbContextPool<EtourContext>(option => option.UseSqlServer(builder.Configuration.GetConnectionString("EmployeeDBConnection")));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(
 (p) => p.AddDefaultPolicy(policy => policy.WithOrigins("*")
           .AllowAnyHeader()
           .AllowAnyMethod()

                ));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();


app.MapControllers();
app.UseCors();

app.Run();
