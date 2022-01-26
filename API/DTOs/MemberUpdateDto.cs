namespace API.DTOs
{
    public class MemberUpdateDto
    {
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Email { get; set; }
        public PhotoDto Avatar { get; set; }
    }
}