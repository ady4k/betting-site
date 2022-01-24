using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }

        [EmailAddress]
        public string Email { get; set; }
        public int Money { get; set; }
    }
}