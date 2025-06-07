//mapear o botão
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputMoneyValue = document.querySelector(".input-money").value

    const valorEntrada = document.querySelector(".valor-entrada") //valor em Real
    const valorSaida = document.querySelector(".valor-saida")
    const erro = document.getElementById('mensagemErro');

    const dolarToDay = 5.2
    const euroToDay = 6.2
    const dirhamToday = 0.61

    // vai verificar se no campo valor "converter de" se colocou uma nfmação válida (não pode ser em branco ou letras)
    if (isNaN(inputMoneyValue) || inputMoneyValue.trim() === "" || Number(inputMoneyValue) <= 0) {
        // Mostra a mensagem na tela
        erro.style.display = 'block';
        valorSaida.innerHTML = "ERRO"
    
        // Oculta depois de alguns segundos (opcional)
        setTimeout(() => {
            erro.style.display = 'none';
        }, 3000); // Esconde após 3 segundos
        
    }

    if (currencySelect.value == "Dolar") {
        valorSaida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputMoneyValue / dolarToDay)
    }

    if (currencySelect.value == "Euro") {
        valorSaida.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputMoneyValue / euroToDay)
    }
    
    if (currencySelect.value == "Dirham") {
        valorSaida.innerHTML = new Intl.NumberFormat("fr-MA", {
            style: "currency",
            currency: "MAD"
        }).format(inputMoneyValue / dirhamToday)
    }

    valorEntrada.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputMoneyValue)

}


//função pra trocar a imagem para modea convertida
function trocarImgMoeda() {
    const moedaSaida = document.querySelector(".moeda-saida") //valor em Real
    const bandeiraMoeda = document.querySelector(".bandeira-moeda-saida")

    if (currencySelect.value == "Dolar") {
        moedaSaida.innerHTML = "Dólar americano"
        bandeiraMoeda.src = "./assets/logo-usa.png"
    }
    if (currencySelect.value == "Euro") {
        moedaSaida.innerHTML = "Euro"
        bandeiraMoeda.src = "./assets/logo-euro.png"
    }
    if (currencySelect.value == "Dirham") {
        moedaSaida.innerHTML = "Dirham marroquino"
        bandeiraMoeda.src = "./assets/logo-dirham.png"
    }
    convertValues()
}

//ouvinte, toda vez q clicar no botão, vai chamar a função
convertButton.addEventListener("click", convertValues)
//toda vez q mudar o valor da informação, vai chamar a função
currencySelect.addEventListener("change", trocarImgMoeda)

