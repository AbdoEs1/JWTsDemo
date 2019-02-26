using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class DataController : ControllerBase
{
    [HttpGet("getData"),Authorize]
    public string GetData(){
        return "data API";
    }   
}