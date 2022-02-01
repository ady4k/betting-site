using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
    public class AppUser : IdentityUser<int>
    {
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public int Money { get; set; }
        public DateTime Created { get; set; } = DateTime.UtcNow;
        public DateTime LastActive { get; set; } = DateTime.UtcNow;
        public Photo Avatar { get; set; }
        public ICollection<AppUserRole> UserRoles { get; set; }

    }
}