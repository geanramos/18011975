// Criação da navbar com JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.createElement("div");
    navbar.id = "barraGEAN";

    navbar.innerHTML = `
        <div class="containerGEAN">
            <div class="logotipo">
                <a href="https://geanramos.com.br/" title="GEAN - O melhor conteúdo">
                    <img src="https://conteudo.imguol.com.br/c/_layout/v3/logoUOL2021/logo_completo_white.svg" alt="GEAN">
                </a>
            </div>
            <nav class="menu-products">
                <ul>
                    <li><a href="http://indicapagbank.page.link/Q6Crj6WyLgyPQBk78">PAGBANK</a></li>
                    <li><a href="https://geanramos.com.br/ig/">CURSOS</a></li>
                    <li><a href="https://geanramos.com.br/radio/fm">RADIO</a></li>
                </ul>
            </nav>
            <nav class="menu-services">
                <ul>
                    <li><a href="https://geanramos.com.br/busca"><i class="material-symbols-outlined">search</i>BUSCA</a></li>
                </ul>
            </nav>
        </div>
    `;

    document.body.prepend(navbar);

    // Importando o CSS externo
    const styleSheet = document.createElement("link");
    styleSheet.rel = "stylesheet";
    styleSheet.href = "https://cdn.jsdelivr.net/gh/geanramos/18011975/navbar.css";
    document.head.appendChild(styleSheet);
});
