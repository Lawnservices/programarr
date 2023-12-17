const canviar = document.getElementById('header');

document.addEventListener('scroll', () => {
var scroll_position = window.scrollY;
if(scroll_position > 400){
  header.style.backgroundColor= '#333';
} else{
  header.style.backgroundColor = '#003349';
}

})