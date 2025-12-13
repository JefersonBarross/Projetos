const form = document.querySelector(".form-imc");
const pesoInput = document.querySelector("#peso");
const alturaInput = document.querySelector("#altura");
const areaResultado = document.querySelector(".resultado");
const botao = document.querySelector("#btnCalcular");

form.addEventListener("submit", calcularIMC);

function calcularIMC(e) {
  e.preventDefault();

  const peso = Number(pesoInput.value);
  const alturaCm = Number(alturaInput.value);

  if (!peso || !alturaCm) {
    areaResultado.innerHTML = "<p class='aviso'>Preencha todos os campos 😅</p>";
    return;
  }

  const altura = alturaCm / 100;
  const imc = (peso / (altura * altura)).toFixed(2);

  let resultado = "";

  if (imc < 17) resultado = "Muito abaixo do peso";
  else if (imc < 18.5) resultado = "Abaixo do peso";
  else if (imc < 25) resultado = "Peso normal";
  else if (imc < 30) resultado = "Acima do peso";
  else if (imc < 35) resultado = "Obesidade I";
  else if (imc < 40) resultado = "Obesidade II";
  else resultado = "Obesidade III";

  areaResultado.innerHTML = `
    <div>
      <p>Peso</p>
      <p>Altura</p>
      <p>IMC</p>
      <p>Resultado</p>
    </div>

    <div>
      <p>${peso} kg</p>
      <p>${alturaCm} cm</p>
      <p>${imc}</p>
      <p>${resultado}</p>
    </div>
  `;

  pesoInput.value = "";
  alturaInput.value = "";
  botao.innerText = "Refazer";
}
