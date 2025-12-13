const btn = document.querySelector("#btn")
const res = document.querySelector(".res")


async function garcom(){
    let ramdom = Math.floor(Math.random() * 1026)
    let api = await fetch(`https://pokeapi.co/api/v2/pokemon/${ramdom}`)
    .then((res) => res.json())
    .then((data) => {
        gerarPokemon(data)
    } )
}

function gerarPokemon(data){
    let nome = data.name
    let id = data.id
    let tipo = data.types[0].type.name
    let img = data.sprites.front_default

    console.log(tipo)

    res.innerHTML = `<div class="card">
            <img src="${img}" alt="">
            <div class="conteiner">
                <div class="titulo">
                    <h1>${nome} </h1>
                    <p>nº ${id}</p>
                </div>
                <p id="poison">${tipo}</p>
            </div>
        </div>`

}
btn.addEventListener("click", garcom)