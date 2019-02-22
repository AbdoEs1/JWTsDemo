using JWTApi.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JWTApi.Migrations
{
    public class JWTiContext : DbContext 
    {

        public JWTiContext(DbContextOptions<JWTiContext> options) : base(options)
        {

        }
       
        public DbSet<UserModel> Users { get; set; }


    }
}
