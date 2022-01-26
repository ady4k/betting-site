using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required] public string Username { get; set; }

        [StringLength(15, MinimumLength = 6)]
        [Required] public string Password { get; set; }
        [Required] public string First_Name { get; set; }
        [Required] public string Last_Name { get; set; }

        [EmailAddress]
        [Required] public string Email { get; set; }
        public int Money { get; set; } = 50;

    }
}