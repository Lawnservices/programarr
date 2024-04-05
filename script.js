document.addEventListener("DOMContentLoaded", function () {
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

   
  const coloress = document.getElementById("videos");

  document.addEventListener("scroll", () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 400) {
       
      coloress.style.color = "yellow";
    } else {
      header.style.backgroundColor = "#003356";
      videos.style.color = "#fff";
      document.getElementById("mejor").innerHTML =
        "La mejor manera de aprender es practicar y practicar.";
    }
  });
});
