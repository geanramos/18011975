// Adiciona os estilos CSS dinamicamente ao documento
const style = document.createElement('style');
style.innerHTML = `
    .random-banner {
        width: 300px; /* Largura do banner */
        height: 250px; /* Altura do banner */
        background-color: transparent; /* Fundo transparente */
    }

    .random-banner img {
        width: 100%; /* Faz a imagem ocupar todo o espaço disponível */
        height: 100%; /* Faz a imagem ocupar toda a altura do banner */
        display: block; /* Elimina o espaço em branco abaixo da imagem */
        border-radius: 5px;
    }
`;
document.head.appendChild(style);

// Array de URLs das imagens
const imagens = [
    "https://i0.wp.com/www.blogderocha.com.br/wp-content/uploads/2018/04/GIF02.gif?ssl=1",
    "https://i0.wp.com/www.blogderocha.com.br/wp-content/uploads/2018/10/banner-300x250px-compre-e-ganhe.png?fit=300%2C250&ssl=1",
    "https://i0.wp.com/www.blogderocha.com.br/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-02-at-10.57.48-1.jpeg?resize=300%2C250&ssl=1",
    "https://i0.wp.com/www.blogderocha.com.br/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-30-at-10.49.26-1.jpeg?resize=300%2C250&ssl=1",
    "https://i0.wp.com/www.blogderocha.com.br/wp-content/uploads/2025/02/caymmidoisdefevereiro.jpg?resize=300%2C250&ssl=1",
    // Adicione mais URLs de imagens aqui
];

// Array de URLs dos links correspondentes
const links = [
    "https://exemplo.com/link1",
    "https://exemplo.com/link2",
    "https://exemplo.com/link3",
    "https://exemplo.com/link4",
    "https://exemplo.com/link5",
    // Adicione mais URLs de links aqui
];

// Função para exibir um banner aleatório
function mostrarBannerAleatorio() {
    const indice = Math.floor(Math.random() * imagens.length); // Gera um índice aleatório
    const bannerDiv = document.createElement('div');
    bannerDiv.className = 'random-banner';

    // Adiciona o banner com o link no HTML
    bannerDiv.innerHTML = `
        <a href="${links[indice]}" target="_blank" class="random-banner">
            <img src="${imagens[indice]}" alt="banner">
        </a>
    `;

    return bannerDiv;
}

// Insere o banner onde o script é chamado
const scriptElement = document.currentScript;
scriptElement.parentNode.insertBefore(mostrarBannerAleatorio(), scriptElement);
