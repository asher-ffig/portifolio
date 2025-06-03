const capa = document.querySelector(".capa");
const alvo = document.querySelector(".folha");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      capa.classList.add("capa-abrir");
    } else {
      capa.classList.remove("capa-abrir");
    }
  });
});

observer.observe(alvo);

if (entry.isIntersecting && !capa.classList.contains("capa-abrir")) {
  capa.classList.add("capa-abrir");
  observer.unobserve(alvo); 
}
