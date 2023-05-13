const emailIcon = document.getElementById("send");
emailIcon.addEventListener("click", (event) => {
  sendEmail();
});

/**
 * Open the email client.
 */
function sendEmail() {
  window.open(
    "mailto:sudeepacharjeegp@gmail.com?subject=Contact Sudeep Acharjee"
  );
}
var icon1 = document.getElementById("icon1");
         icon1.onclick = function () {
            document.body.classList.toggle("dark-theme")           
        
         if(document.body.classList.contains("dark-theme")){
            icon1.src="dark theme icon/sun.png";
         }
         else{
            icon1.src="dark theme icon/moon.png";
         }
          if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      
        }