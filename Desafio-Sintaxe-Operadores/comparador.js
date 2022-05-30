function comparar() {
    let numeros_iguais
    let maior_ou_igual_10
    let maior_ou_igual_20
    let numero1 = Number(prompt('Digite o primeiro número:'))
    let numero2 = Number(prompt('Digite o segundo número:'))
    let soma = numero1 + numero2

    numero1 === numero2 ? numeros_iguais = true : numeros_iguais = false
    soma >= 10 ? maior_ou_igual_10 = true : maior_ou_igual_10 = false
    soma >= 20 ? maior_ou_igual_20 = true : maior_ou_igual_20 = false

    window.alert(`Os números ${numero1} e ${numero2} ${numeros_iguais ? 'são' : 'não são'} iguais.`)
    window.alert(`Sua soma é ${soma}, que é ${maior_ou_igual_10 ? 'maior ou igual' : 'menor'} que 10 e ${maior_ou_igual_20 ? 'maior ou igual' : 'menor'} que 20`)

}

comparar()