let slideIndex = 0;
const slides = document.querySelector('.carrossel').children;
const totalSlides = slides.length;

function moverSlide(n) {
  slideIndex += n;

  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  } else if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }

  updateSlidePosition();
}

function updateSlidePosition() {
  const slideWidth = slides[0].offsetWidth;
  document.querySelector('.carrossel').style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// Inicializa o carrossel na primeira imagem
updateSlidePosition();





//popup

function mostrarTermo() {
  document.getElementById("popup").style.display = "flex";
}

function fecharTermo() {
  document.getElementById("popup").style.display = "none";
}

document.getElementById("formulario").addEventListener("submit", function(event) {
  if (!document.getElementById("aceito").checked) {
      alert("Você deve aceitar o termo de responsabilidade para continuar.");
      event.preventDefault();
  }
});