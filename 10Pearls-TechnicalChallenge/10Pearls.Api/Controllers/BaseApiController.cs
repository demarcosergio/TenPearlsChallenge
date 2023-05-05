using TenPearls.Api.Filter;
using Microsoft.AspNetCore.Mvc;

namespace TenPearls.Api.Controllers
{
    [Route("api/[controller]")]
    [TypeFilter(typeof(AuthorizationFilterAttribute))]
    [ApiController]
    public class BaseApiController : ControllerBase
    {
    }
}