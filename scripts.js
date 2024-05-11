let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // Oculta todos os slides
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  // Exibe o slide atual
  setTimeout(showSlides, 2000); // Altera o slide a cada 2 segundos
}

showSlides(); // Inicia o carrossel de slides
