function verificarNumeroChuteValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += `<div>O chute é inválido</div>`
        return
    }

    if (numeroForMaiorouMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `        
        <div>O valor é inválido</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns!!!!</h2>
        <h3> O número secreto era ${numeroSecreto}</h3>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    }
}

//FUNÇÕES GLOBAIS

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorouMenorQueOValorPermitido (numero) {
    return numero > maiorValor || numero < menorValor
}
