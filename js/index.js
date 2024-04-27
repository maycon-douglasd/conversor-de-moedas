const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
   const inputCurrencyValue = document.querySelector(".input-currency").value
   const moedaValorToConvert = document.querySelector(".moeda-valor-to-convert")
   const moedaValorToConverted = document.querySelector(".moeda-valor")

   console.log(currencySelect.value)
   const dolarToday = 5.3
   const euroToday = 5.47
   const libraToday = 6.40
   const bitcoinToday = 339.020

   if(currencySelect.value == "dolar"){
      moedaValorToConverted.innerHTML = new Intl.NumberFormat("en-US",{
         style: "currency",
         currency: "USD"
      }).format(inputCurrencyValue / dolarToday)
   }

   if(currencySelect.value == "euro"){
      moedaValorToConverted.innerHTML = new Intl.NumberFormat("de-DE",{
         style: "currency",
         currency: "EUR"
      }).format(inputCurrencyValue / euroToday)
   }

   if(currencySelect.value == "libra"){
      moedaValorToConverted.innerHTML = new Intl.NumberFormat("en-GB",{
         style: "currency",
         currency: "GBP"
      }).format(inputCurrencyValue / libraToday)
   }

   if(currencySelect.value == "bitcoin"){
      moedaValorToConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
         style: "currency",
         currency: "BTC"
      }).format(inputCurrencyValue / bitcoinToday)
   }

   if(currencySelect.value == "real"){
      moedaValorToConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
         style: "currency",
         currency: "BRL"
      }).format(inputCurrencyValue)
   }



   moedaValorToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
   }).format(inputCurrencyValue) 

   
}

function changeCurrency() {
   const currencyName = document.getElementById("currency-name")
   const currencyImage = document.querySelector(".currency-img")

   if(currencySelect.value == "dolar") {
      currencyName.innerHTML = "Dólar americano"
      currencyImage.src = "./src/img/dolar.png"
   }

   if(currencySelect.value == "euro") {
      currencyName.innerHTML = "Euro"
      currencyImage.src = "./src/img/euro.png"
   }

   if(currencySelect.value == "libra") {
      currencyName.innerHTML = "Libra"
      currencyImage.src = "./src/img/libra.png"
   }

   if(currencySelect.value == "bitcoin") {
      currencyName.innerHTML = "Bitcoin"
      currencyImage.src = "./src/img/bitcoin.png"
   }

   if(currencySelect.value == "real") {
      currencyName.innerHTML = "Real"
      currencyImage.src = "./src/img/real.png"
   }

   convertValues()
   
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)