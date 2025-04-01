let indiceAtual = 0;

function moverSlide(direcao){
    const carrossel = document.querySelector(".carrossel");
    const totalImages = document.querySelectorAll(".carrossel img").length;

    indiceAtual += direcao;

    if (indiceAtual < 0){
        indiceAtual = totalImages -1;
    }

    else if (indiceAtual >= totalImages) {
        indiceAtual = 0;
    }

    carrossel.style.transform = 'translatex(-${indiceAtual * 100}%)'
}