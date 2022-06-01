function trocaPares(array) {
    if (array.length == 0) return -1

    if (typeof(array) !== "object") return "não é um array"

    let pararPrograma = false

    array.map(element => {
        if (typeof(element) !== "number") {
            pararPrograma = true
        }
    })

    if (pararPrograma) return "o array possui elementos que não são números"

    return array.map(element => {
        if (element !== 0 && element % 2 === 0) {
            return element = 0
        } else {
            return element
        }
    })
}

console.log(trocaPares(1))