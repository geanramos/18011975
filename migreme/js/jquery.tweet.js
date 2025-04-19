async function carregarRSS() {
    const feedUrl = "https://bsky.app/profile/did:plc:k3g67rs7si5va35yyhp7utk2/rss";
    try {
        const response = await fetch(feedUrl);
        const text = await response.text();

        // Converter o texto para XML
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "text/xml");

        // Selecionar os últimos 4 posts
        const items = xml.querySelectorAll("item");
        let output = "<h2>Últimos posts</h2><ul>";

        items.forEach((item, index) => {
            if (index < 4) {
                const title = item.querySelector("title").textContent;
                const link = item.querySelector("link").textContent;
                output += `<li><a href="${link}" target="_blank">${title}</a></li>`;
            }
        });

        output += "</ul>";
        document.getElementById("query").innerHTML = output;
    } catch (error) {
        document.getElementById("query").innerHTML = "Erro ao carregar o feed RSS.";
        console.error("Erro ao buscar RSS:", error);
    }
}

// Chamar a função ao carregar a página
document.addEventListener("DOMContentLoaded", carregarRSS);
