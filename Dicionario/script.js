const bancoDeDados = {
    "oi": {
        imagem: "https://files.passeidireto.com/d505993c-a4c4-409b-acea-54105fa7f805/d505993c-a4c4-409b-acea-54105fa7f805.jpeg",
        video: "videos/oiLibras.mp4",
    },
    "por favor": {
        imagem: "",
        video: "videos/porfarvorLibras.mp4",
    },
    "sim": {
        imagem: "",
        video: "videos/simLibras.mp4",
    },
    "não": {
        imagem: "",
        video: "videos/NãoLibras.mp4",
    },
    "bom dia": {
        imagem: "https://exemplo.com/imagens/carro.jpg",
        video: "videos/BomdiaLibras.mp4",
    }
    
};


let inputTxt = document.querySelector('#container__inputtxt');
let btnTxt = document.querySelector('#container__btn');
let resultado = document.querySelector('#container__result');

// BUSCA 
btnTxt.addEventListener('click', () => {
    let palavra = inputTxt.value.toLowerCase();  
    if (palavra === '') {
        resultado.innerHTML = `<p id="container__significado">Escreva a palavra que deseja aprender em Libras!</p>`;
    } else if (bancoDeDados[palavra]) {
        // Se a palavra existe no "banco de dados"
        const { imagem, video } = bancoDeDados[palavra];
        resultado.innerHTML = `
            <h3 id="container__palavra">${palavra}</h3>
            <img src="${imagem}" alt="Imagem de ${palavra}" style="width: 200px; height: auto;">
            <video src="${video}" controls style="width: 300px; height: auto; margin-top: 10px;"></video>
        `;
    } else {
        
        // MENSAGEM DE ERRO
        resultado.innerHTML = `<p id="container__significado"><span>Esta palavra</span> ainda não se encontra em nosso banco de dados.</p>`;
    }
});

