using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Sts.Quickstart.Models
{
    public class UserMin
    {
        public string SubjectId { get; set; }
        public string UserName { get; set; }
        public List<Claim> Claims { get; set; }
    }
}
