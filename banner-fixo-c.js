javascript
// Adiciona os estilos CSS dinamicamente ao documento
const style = document.createElement('style');
style.innerHTML = `
    .ads-container {
        display: flex;
        justify-content: center; /* Centraliza horizontalmente */
        align-items: center; /* Mantém alinhado */
        width: 100%;
        height: auto;
        margin-top: 20px; /* Espaçamento superior opcional */
    }

    .ads-banner {
        max-width: 500px; /* Largura do banner */
        max-height: 125px; /* Altura do banner */
        background-color: transparent;
    }

    .ads-banner img {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 4px;
    }
`;
document.head.appendChild(style);

// Array de URLs das imagens
const imagens = [
    "https://i1.wp.com/geanramos.com.br/radio/img/ads-fastmoney.jpg",
    "https://i1.wp.com/geanramos.com.br/radio/img/ads-fastmoney2.jpg",
    "https://i1.wp.com/geanramos.com.br/radio/img/features1.jpg",
    "https://i1.wp.com/geanramos.com.br/radio/img/features2.jpg",
    "https://i1.wp.com/geanramos.com.br/radio/img/features3.jpg",
    "https://i1.wp.com/geanramos.com.br/radio/img/features4.jpg",
    "https://i1.wp.com/geanramos.com.br/radio/img/features5.jpg",
    "https://i1.wp.com/geanramos.com.br/radio/img/features6.jpg",
    "https://i1.wp.com/geanramos.com.br/radio/img/features7.jpg",
    "https://i1.wp.com/geanramos.com.br/radio/img/features8.jpg",
    "https://i1.wp.com/geanramos.com.br/radio/img/features9.jpg",
    "https://i1.wp.com/geanramos.com.br/radio/img/features10.jpg",
];

// Array de URLs dos links correspondentes
const links = [
    "https://go.hotmart.com/A1939024g?ap=a838&src=radio",
    "https://go.hotmart.com/A1939024g?ap=a838&src=radio",
    "https://geanramos.42web.io/radio/pagode.html",
    "https://geanramos.42web.io/radio/pop.html",
    "https://geanramos.42web.io/radio/sertanejo.html",
    "https://geanramos.42web.io/radio/hits-brasil.html",
    "https://geanramos.42web.io/radio/gospel.html",
    "https://geanramos.42web.io/radio/rock.html",
    "https://geanramos.42web.io/radio/libcast.html",
    "https://geanramos.42web.io/radio/libbel.html",
    "https://geanramos.42web.io/radio/libmusic.html",
    "https://geanramos.42web.io/radio/mixfm.html",
];

// Função para exibir um ads-banner aleatório
function mostrarBannerAleatorio() {
    const indice = Math.floor(Math.random() * imagens.length);
    const adsBannerDiv = document.createElement('div');
    adsBannerDiv.className = 'ads-banner';

    adsBannerDiv.innerHTML = `
        <a href="${links[indice]}" target="_blank" class="ads-banner">
            <img src="${imagens[indice]}" alt="ads">
        </a>
    `;

    return adsBannerDiv;
}

// Localiza o script e insere o banner no mesmo local do script
const scriptElement = document.currentScript;
const adsContainer = document.createElement('div');
adsContainer.className = 'ads-container';
scriptElement.parentNode.insertBefore(adsContainer, scriptElement.nextSibling);

const banner = mostrarBannerAleatorio();
adsContainer.appendChild(banner);

// Função para trocar o banner a cada 10 segundos
setInterval(() => {
    const novoBanner = mostrarBannerAleatorio();
    adsContainer.replaceChild(novoBanner, document.querySelector('.ads-banner'));
}, 10000);
