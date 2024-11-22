document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.oi');
    const overlay = document.getElementById('overlay');
    const closeOverlayButton = document.getElementById('closeOverlay');
    const retangulos = document.querySelectorAll('.retangulo');

    // Função para abrir o overlay e aplicar blur nas caixas
    function openOverlay() {
        overlay.classList.add('active');
        retangulos.forEach(retangulo => {
            retangulo.classList.add('blur');
        });
    }

    // Função para fechar o overlay e remover o blur
    function closeOverlay() {
        overlay.classList.remove('active');
        retangulos.forEach(retangulo => {
            retangulo.classList.remove('blur');
        });
    }

    // Adiciona o evento de clique para cada botão "Saiba mais"
    buttons.forEach(button => {
        button.addEventListener('click', openOverlay);
    });

    // Adiciona o evento de clique para o botão "Fechar"
    closeOverlayButton.addEventListener('click', closeOverlay);
});
