document.getElementById("boton1").addEventListener("click", function () {
  document.getElementById("boton1").style.color = "yellow";
  document.getElementById("boton2").style.color = "#fff";
  document.getElementById("boton3").style.color = "#fff";
  document.getElementById("boton4").style.color = "#fff";
  document.getElementById("boton5").style.color = "#fff";
  document.getElementById("boton6").style.color = "#fff";
  document.getElementById("boton7").style.color = "#fff";
  document.getElementById("boton8").style.color = "#fff";
});
document.getElementById("boton2").addEventListener("click", function () {
  document.getElementById("boton2").style.color = "yellow";
  document.getElementById("boton1").style.color = "#fff";
  document.getElementById("boton3").style.color = "#fff";
  document.getElementById("boton4").style.color = "#fff";
  document.getElementById("boton5").style.color = "#fff";
  document.getElementById("boton6").style.color = "#fff";
  document.getElementById("boton7").style.color = "#fff";
  document.getElementById("boton8").style.color = "#fff";
});
document.getElementById("boton3").addEventListener("click", function () {
  document.getElementById("boton3").style.color = "yellow";
  document.getElementById("boton2").style.color = "#fff";
  document.getElementById("boton1").style.color = "#fff";
  document.getElementById("boton4").style.color = "#fff";
  document.getElementById("boton5").style.color = "#fff";
  document.getElementById("boton6").style.color = "#fff";
  document.getElementById("boton7").style.color = "#fff";
  document.getElementById("boton8").style.color = "#fff";
});
document.getElementById("boton4").addEventListener("click", function () {
  document.getElementById("boton4").style.color = "yellow";
  document.getElementById("boton3").style.color = "#fff";
  document.getElementById("boton1").style.color = "#fff";
  document.getElementById("boton2").style.color = "#fff";
  document.getElementById("boton3").style.color = "#fff";
  document.getElementById("boton5").style.color = "#fff";
  document.getElementById("boton6").style.color = "#fff";
  document.getElementById("boton7").style.color = "#fff";
  document.getElementById("boton8").style.color = "#fff";
});
document.getElementById("boton5").addEventListener("click", function () {
  document.getElementById("boton5").style.color = "yellow";
  document.getElementById("boton4").style.color = "#fff";
  document.getElementById("boton1").style.color = "#fff";
  document.getElementById("boton2").style.color = "#fff";
  document.getElementById("boton3").style.color = "#fff";
  document.getElementById("boton6").style.color = "#fff";
  document.getElementById("boton7").style.color = "#fff";
  document.getElementById("boton8").style.color = "#fff";
});
document.getElementById("boton6").addEventListener("click", function () {
  document.getElementById("boton6").style.color = "yellow";
  document.getElementById("boton5").style.color = "#fff";
  document.getElementById("boton7").style.color = "#fff";
  document.getElementById("boton1").style.color = "#fff";
  document.getElementById("boton2").style.color = "#fff";
  document.getElementById("boton3").style.color = "#fff";
  document.getElementById("boton4").style.color = "#fff";
  document.getElementById("boton5").style.color = "#fff";
  document.getElementById("boton8").style.color = "#fff";
});
document.getElementById("boton7").addEventListener("click", function () {
  document.getElementById("boton7").style.color = "yellow";
  document.getElementById("boton6").style.color = "#fff";
  document.getElementById("boton1").style.color = "#fff";
  document.getElementById("boton2").style.color = "#fff";
  document.getElementById("boton3").style.color = "#fff";
  document.getElementById("boton4").style.color = "#fff";
  document.getElementById("boton5").style.color = "#fff";
  document.getElementById("boton8").style.color = "#fff";
});
document.getElementById("boton8").addEventListener("click", function () {
  document.getElementById("boton8").style.color = "yellow";
  document.getElementById("boton7").style.color = "#fff";
  document.getElementById("boton1").style.color = "#fff";
  document.getElementById("boton2").style.color = "#fff";
  document.getElementById("boton3").style.color = "#fff";
  document.getElementById("boton4").style.color = "#fff";
  document.getElementById("boton5").style.color = "#fff";
  document.getElementById("boton6").style.color = "#fff";
});
//final

const canviar = document.getElementById("header");
const coloress = document.getElementById("videos");

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 400) {
    header.style.backgroundColor = "#003349";
    videos.style.color = "yellow";
    document.getElementById("mejor").innerHTML =
      "Te doy las Gracias por visitar mi Página web.";
    document.getElementById("clase").style.display = "block";
    document.getElementById("clase").style.backgroundColor = "#000";
    document.getElementById("mejor").style.color = "#fff";
    
  } else {
    header.style.backgroundColor = "#003349";
    videos.style.color = "#fff";
    document.getElementById("mejor").innerHTML =
      "La mejor manera que tenemos para aprender es practicar y practicar.";
    document.getElementById("clase").style.display = "none";    
  }
});

function tiempo() {
  document.getElementById("videos").style.color = "#fff";

  document.getElementById("mejor").style.color = "#fff";
  document.getElementById("informe").style.backgroundColor = "#333";
}
setInterval(tiempo, 4000);
