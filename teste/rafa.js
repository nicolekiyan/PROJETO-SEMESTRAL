// Seleciona todos os elementos com a classe "hamburger"
const hamburgers = document.querySelectorAll(".hamburger");

// Verifica se há elementos encontrados antes de adicionar eventos
if (hamburgers.length > 0) {
  hamburgers.forEach((element) => {
    element.addEventListener("click", () => {
      // Alterna a classe "is-active" no elemento clicado
      element.classList.toggle("is-active");
    });
  });
} else {
  console.warn("Nenhum elemento com a classe '.hamburger' foi encontrado.");
}
