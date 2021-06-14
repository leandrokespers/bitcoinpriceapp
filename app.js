const moedaBRL = document.getElementById("moedaBRL")
const outResposta = document.getElementById("outResposta")
const inBtcPreco = document.querySelector(".btc-preco")

//recebe o valor da cotacao do fetch calcula e expoe na tela
let bitCoinPrice = fetch('https://blockchain.info/ticker');
const calcularMoeda = () => {
 let moeda = Number(moedaBRL.value)
 bitCoinPrice
 .then(response => response.clone().json())
 .then(bitcoin => {
  
  let finalValue = bitcoin.BRL.sell;
  let convert = moeda / finalValue;
  outResposta.textContent = convert.toFixed(6)
 }).catch(erro => {
   console.log(Error(erro))
 })
}

//recebe o valor da cotacao e apresenta na tela
const bitCoinHoje = () => {
  bitCoinPrice
    .then(response => response.clone().json())
    .then(bitcoin => {
      
      inBtcPreco.innerText = bitcoin.BRL.sell
    }).catch(erro => {
      console.log(Error(erro))
    })
}
const button = document.getElementById("btCalcular")
button.addEventListener("click", calcularMoeda)


bitCoinHoje();




//https://blockchain.info/ticker