using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Dto;

namespace GetMarried.Controllers
{ [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CategoriesController : ApiController
    {
       

        [HttpGet]
        [Route("api/Categories/GetAllCategories")]
        public List<Dto.CategoriesDto> GetAllCategories()
        {
            return Bll.CategoriesBll.GetAllCategories();
        }

        [HttpGet]
        [Route("api/Categories/GetCategoryById/{id}")]
        public Dto.CategoriesDto GetCategoryById(int id)
        {
            return Bll.CategoriesBll.GetCategoryById(id);
        }


        // POST: api/Categories
        //add
        [HttpPost]
        [Route("api/Categories/PostCategory")]
        public bool PostCategory(Dto.CategoriesDto categories)
        {
            return Bll.CategoriesBll.PostCategories(categories);
        }


        [HttpPut]
        [Route("api/Categories/PutCategory")]
        public bool PutCategory(Dto.CategoriesDto Category)
        {
            return Bll.CategoriesBll.PutCategories(Category);
        }


        // DELETE: api/Categories/5
        [HttpDelete]
        [Route("api/Categories/DeleteCategory/{id}")]
        public bool DeleteCategory(int id)
        {
            return Bll.CategoriesBll.DeleteCategory(id);
        }
    }
}
