using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace GetMarried.Controllers
{ [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ImgController : ApiController
    {
       
        // GET: api/Img
        [HttpGet]
        [Route("api/Img/GetAllImg")]
        public List<Dto.ImgDto> GetAllImg()
        {
            return Bll.ImgBll.GetAllImg();
        }

        // GET: api/Img/5
        [HttpGet]
        [Route("api/Img/GetHallImgById/{idcategory}/{idhall}")]
        public List<Dto.ImgDto> GetHallImgById(int idcategory,int idhall)
        {
            return Bll.ImgBll.GetHallImgById(idcategory, idhall);
        }

       
        [HttpGet]
        [Route("api/Img/GetSuppliersImgById/{idcategory}/{idsup}")]
        public List<Dto.ImgDto> GetSuppliersImgById(int idcategory, int idsup)
        {
            return Bll.ImgBll.GetSuppliersImgById(idcategory, idsup);
        }

        // POST: api/Img
        [HttpPost]
        [Route("api/Img/PostImg")]
        public bool PostImg(Dto.ImgDto img)
        {
            return Bll.ImgBll.PostImg(img);
        }

        [HttpPost]
        [Route("api/Img/PostImages")]
        public bool PostImages(List<Dto.ImgDto> img)
        {
            return Bll.ImgBll.PostImages(img);
        }


        // PUT: api/Img/5
        [HttpPut]
        [Route("api/Img/PutImg")]
        public bool PutImg(Dto.ImgDto img)
        {
            return Bll.ImgBll.PutImg(img);
        }



        // DELETE: api/Img/5
        [HttpDelete]
        [Route("api/Img/DeleteImg/{id}")]
        public bool DeleteImg(int id)
        {
            return Bll.ImgBll.DeleteImg(id);
        }

    }
    
}
