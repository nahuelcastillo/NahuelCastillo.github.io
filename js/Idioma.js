
  let btnEng = document.getElementById("Eng")
  let btnEsp = document.getElementById("Esp")



btnEsp.addEventListener("click", function(){

  localStorage.setItem("idm", "español")
  window.location = "index.html"
})


btnEng.addEventListener("click", function(){
  localStorage.setItem("idm", "ingles")
  window.location = "index.html"
})



document.addEventListener("DOMContentLoaded", function(){

  var idm = localStorage.getItem("idm")
  
  if ((idm === "español" && window.location.pathname === "/index.html") ||
  (idm === "ingles" && window.location.pathname === "/indexEng.html")) {
  // No hacer nada si ya estamos en la página correcta
  } else {
  switch(idm){
    case "español":
     window.location.href = "index.html";
    break;
    case "ingles":
     window.location.href = "indexEng.html";
    break;
    case null:
      $(document).ready(function(){
       $('#miModal').modal('show');
      });
    break;
  }
}
});