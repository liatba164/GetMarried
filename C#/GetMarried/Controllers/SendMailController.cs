using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Net.Mail;
using Newtonsoft.Json.Linq;

using System.Threading.Tasks;
using System.IO;
using System.Web;

namespace GetMarried.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class SendMailController : ApiController
    {
        string src = "C:/Users/liatb/OneDrive/Desktop/Mahat_Project/Angular/GetMarried/src/assets/Image/Home/logo_color.jpg";

        // GET: api/SendMail/5
        [HttpGet]
        [Route("api/SendMail/Get/{email}/{userName}")]
        public string Get(string email, string userName)
        {
            try
            {
                email = email.Replace("{}", ".");
                email = email.Replace("[]", "@");
                string smtpAddress = "smtp.gmail.com";
                int portNumber = 587;
                bool enableSSL = true;
                string emailFromAddress = "getmarriedservice@gmail.com"; //Sender Email Address  
                string password = "gmarried30#@1"; //Sender Password  
                string emailToAddress = email; //Receiver Email Address 

                string subject = "בקשת איפוס סיסמא באתר Get Married";
                String newPassword = "";


                using (MailMessage mail = new MailMessage())
                {
                    Random ran = new Random();
                    String b = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$~%^&*0123456789";

                    int length = 8;

                    for (int i = 0; i < length; i++)
                    {
                        int a = ran.Next(b.Length);
                        newPassword = newPassword + b.ElementAt(a);
                    }

                    mail.From = new MailAddress(emailFromAddress);
                    mail.To.Add(emailToAddress);
                    mail.Subject = subject;
                    string body = "<div style='text-align:center'><h1 style='color:#c08466eb'> שלום " + userName + " </h1> <p> מייל זה נשלח אליך בעקבות בקשה שהתקבלה אצלנו לאיפוס סיסמא באתר</p> <p>הסיסמא החדשה הינה: " + newPassword + " </p><p> בברכה צוות Get Married </p> </div>";

                    AlternateView imgView = AlternateView.CreateAlternateViewFromString("<div style='text-align: center;'> <img src=cid:imgpath style='margin:auto; width:340px; height:140px'></div><br/><br/>" + body, null, "text/html");
                    LinkedResource lr = new LinkedResource(src);
                    lr.ContentId = "imgpath";
                    imgView.LinkedResources.Add(lr);

                    mail.AlternateViews.Add(imgView);
                    mail.IsBodyHtml = true;

                    using (SmtpClient smtp = new SmtpClient(smtpAddress, portNumber))
                    {
                        smtp.Credentials = new NetworkCredential(emailFromAddress, password);
                        smtp.EnableSsl = enableSSL;
                        smtp.Send(mail);
                    }
                    return newPassword;
                }
            }
            catch (Exception e)
            {
                return null;
            }


        }
    }
}
