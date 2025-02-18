javascript
// Adiciona os estilos CSS dinamicamente ao documento
const style = document.createElement('style');
style.innerHTML = `
    .ads-container {
        display: flex;
        justify-content: center; /* Centraliza horizontalmente */
        align-items: center; /* Centraliza verticalmente (se necessário) */
        width: 100%;
        height: auto;
        margin-top: 20px; /* Espaço opcional acima do banner */
    }

    .ads-banner {
        width: 360px; /* Largura do banner */
        height: 90px; /* Altura do banner */
        background-color: transparent;
    }

    .ads-banner img {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 5px;
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
    "https://i1.wp.com/geanramos.com.br/radio/img/pisadinha.jpg",
    "https://i1.wp.com/geanramos.com.br/radio/img/tropical.jpg",
    "https://i1.wp.com/geanramos.com.br/radio/img/pop2k.jpg",
    "https://i1.wp.com/geanramos.com.br/radio/img/lo-fi.jpg",
    "https://i1.wp.com/geanramos.com.br/radio/img/megamix.jpg",
    "https://i1.wp.com/geanramos.com.br/radio/img/boteco.jpg",
    "https://i1.wp.com/geanramos.com.br/radio/img/ads-profissao-afiliado.jpg",
    "https://i1.wp.com/geanramos.com.br/radio/img/ads-profissao-afiliado2.jpg",
    "https://i1.wp.com/geanramos.com.br/radio/img/ads-profissao-afiliado3.jpg",
    "https://i1.wp.com/geanramos.com.br/radio/img/ads-profissao-afiliado4.jpg",
    "https://i1.wp.com/geanramos.com.br/radio/img/ads-profissao-afiliado5.jpg",
    "https://i1.wp.com/geanramos.com.br/radio/img/ads-profissao-afiliado6.jpg",
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
    "https://geanramos.42web.io/radio/pisadinha.html",
    "https://geanramos.42web.io/radio/tropical.html",
    "https://geanramos.42web.io/radio/pop2k.html",
    "https://geanramos.42web.io/radio/lofi.html",
    "https://geanramos.42web.io/radio/megamix.html",
    "https://geanramos.42web.io/radio/boteco.html",
    "https://geanramos.com.br/ig/",
    "https://geanramos.com.br/ig/",
    "https://go.hotmart.com/A1939024g?ap=06c5&src=radio",
    "https://go.hotmart.com/A1939024g?ap=06c5&src=radio",
    "https://go.hotmart.com/A1939024g?ap=0fbe&src=radio",
    "https://go.hotmart.com/A1939024g?ap=0fbe&src=radio",
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

// Criar um container para o banner e adicioná-lo ao corpo
const adsContainer = document.createElement('div');
adsContainer.className = 'ads-container';
document.body.insertBefore(adsContainer, document.body.firstChild);

const banner = mostrarBannerAleatorio();
adsContainer.appendChild(banner);

// Função para trocar o banner a cada 10 segundos
setInterval(() => {
    const novoBanner = mostrarBannerAleatorio();
    adsContainer.replaceChild(novoBanner, document.querySelector('.ads-banner'));
}, 10000);
