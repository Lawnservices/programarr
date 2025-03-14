document.addEventListener('DOMContentLoaded', function(){

 const botones = ['boton1','boton2','boton3','boton4','boton5','boton6','boton7','boton8'];

 let botonActivo = null;

 botones.forEach(id =>{
      const boton = document.getElementById(id);
      if (boton){
      boton.addEventListener('click', function(){

      if(botonActivo){
        botonActivo.style.color = '#fff'
      }
      boton.style.color = 'yellow'

      botonActivo = boton;
    });
  }
 });



});