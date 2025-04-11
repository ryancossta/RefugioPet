 // Animação ao rolar para os planos
 const planos = document.querySelectorAll(".plano");

 const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       entry.target.classList.add("mostrar");
     }
   });
 }, {
   threshold: 0.2
 });

 planos.forEach(plano => observer.observe(plano));

 // Efeito interativo nos botões WhatsApp
 const botoes = document.querySelectorAll(".btn-whatsapp");

 botoes.forEach(botao => {
   botao.addEventListener("mouseenter", () => {
     botao.style.transform = "scale(1.05)";
     botao.style.backgroundColor = "#25d366";
     botao.style.color = "#fff";
   });

   botao.addEventListener("mouseleave", () => {
     botao.style.transform = "scale(1)";
     botao.style.backgroundColor = "";
     botao.style.color = "";
   });
 });






