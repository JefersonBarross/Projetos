const areaCards = document.querySelector(".cards");
const botaoMais = document.querySelector("#btn");

let paginaAtual = 1;
let totalPaginas = 0;

botaoMais.addEventListener("click", carregarMais);

async function buscarPersonagens() {
  const resposta = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${paginaAtual}`
  );

  const dados = await resposta.json();

  totalPaginas = dados.info.pages;

  mostrarPersonagens(dados.results);

  if (paginaAtual >= totalPaginas) {
    botaoMais.disabled = true;
    botaoMais.innerText = "Fim 😅";
  }
}

function mostrarPersonagens(lista) {
  lista.forEach(personagem => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <header>
        <img src="${personagem.image}" alt="${personagem.name}">
        <p>${personagem.name}</p>
      </header>

      <div class="content">
        <div class="status">
          <img src="./img/status.svg">
          <p>${personagem.status}</p>
        </div>

        <div class="status">
          <img src="./img/status02.svg">
          <p>${personagem.species}</p>
        </div>

        <div class="status">
          <img src="./img/status03.svg">
          <p>${personagem.origin.name}</p>
        </div>
      </div>
    `;

    areaCards.appendChild(card);
  });
}

function carregarMais() {
  if (paginaAtual < totalPaginas) {
    paginaAtual++;
    buscarPersonagens();
  }
}

buscarPersonagens();
