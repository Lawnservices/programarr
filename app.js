document.addEventListener("DOMContentLoaded", function () {
  const mensaje = document.getElementById("meme");
  const enlase = document.createElement("a");

  enlase.href = "https://guardemos.com/";
  enlase.textContent = "guardemos.com";
  enlase.style.color= 'green';
  enlase.style.fontSize='30px';
  mensaje.appendChild(enlase);
});
