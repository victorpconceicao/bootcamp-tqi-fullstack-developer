function comparar() {
    let numero1 = Number(prompt('Digite o primeiro número:'))
    let numero2 = Number(prompt('Digite o segundo número:'))
    let soma = numero1 + numero2
    let numeros_iguais = numero1 === numero2
    let maior_ou_igual_10 = soma >= 10
    let maior_ou_igual_20 = soma >= 20

    window.alert(`Os números ${numero1} e ${numero2} ${numeros_iguais ? 'são' : 'não são'} iguais.`)
    window.alert(`Sua soma é ${soma}, que é ${maior_ou_igual_10 ? 'maior ou igual' : 'menor'} que 10 e ${maior_ou_igual_20 ? 'maior ou igual' : 'menor'} que 20`)

}

comparar()