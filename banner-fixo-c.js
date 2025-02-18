// Adiciona os estilos CSS dinamicamente ao documento
const style = document.createElement('style');
style.innerHTML = `
    .ads-banner {
        width: 500px; /* Largura do banner */
        height: 125px; /* Altura do banner */
        background-color: transparent; /* Fundo transparente */
    }

    .ads-banner img {
        width: 100%; /* Faz a imagem ocupar todo o espaço disponível */
        height: 100%; /* Faz a imagem ocupar toda a altura do banner */
        display: block; /* Elimina o espaço em branco abaixo da imagem */
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
    const indice = Math.floor(Math.random() * imagens.length); // Gera um índice aleatório
    const adsBannerDiv = document.createElement('div');
    adsBannerDiv.className = 'ads-banner';

    // Adiciona o ads-banner com o link no HTML
    adsBannerDiv.innerHTML = `
        <center><a href="${links[indice]}" target="_blank" class="ads-banner">
            <img src="${imagens[indice]}" alt="ads" style="border-radius: 4px; display: block; margin: 0 auto;">
        </a></center>
    `;

    return adsBannerDiv;
}

// Insere o banner onde o script é chamado
const scriptElement = document.currentScript;
scriptElement.parentNode.insertBefore(mostrarBannerAleatorio(), scriptElement);

// Função para trocar o banner a cada 10 segundos
setInterval(() => {
    const adsBannerDiv = mostrarBannerAleatorio();
    scriptElement.parentNode.replaceChild(adsBannerDiv, document.querySelector('.ads-banner'));
}, 10000); // Troca de banner a cada 10000 milissegundos (10 segundos)
