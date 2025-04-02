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





document.addEventListener("DOMContentLoaded", function() {
  const termoPopup = document.getElementById("popup-termo");
  const btnLerTermo = document.getElementById("btn-ler-termo");
  const btnFecharTermo = document.getElementById("btn-fechar-termo");
  
  btnLerTermo.addEventListener("click", function() {
      termoPopup.style.display = "flex";
      termoPopup.style.visibility = "visible";
      termoPopup.style.opacity = "1";
  });
  
  btnFecharTermo.addEventListener("click", function() {
      termoPopup.style.visibility = "hidden";
      termoPopup.style.opacity = "0";
      setTimeout(() => {
          termoPopup.style.display = "none";
      }, 300);
  });
});