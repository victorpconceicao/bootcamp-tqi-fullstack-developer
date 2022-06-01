function verificar_palindromo() {
    let div_resposta = document.querySelector('#resp')
    let entrada = document.querySelector('#palavra').value

    if (entrada == undefined || entrada == null || entrada == '') return window.alert("Informe um valor de string!")

    let arrayPalavra = entrada.toUpperCase().split('').filter(element => element != ' ')
    let arrayInvertido = [...arrayPalavra].reverse()

    let palavra = arrayPalavra.toString()
    let palavraInvertida = arrayInvertido.toString()

    let teste = palavra == palavraInvertida ? 'é' : 'não é'

    div_resposta.innerHTML = `A palavra/frase \"${entrada}\" ${teste} um palídromo.`

}