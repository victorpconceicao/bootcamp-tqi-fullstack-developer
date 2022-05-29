let valor_contagem = 0
let visor_contador = document.querySelector('#contagem')
let btn_mais = document.getElementById('mais')
let btn_menos = document.getElementById('menos')

function somar() {
    btn_menos.removeAttribute("disabled")
    btn_menos.classList.remove("disabled_btn")
    if (valor_contagem < 10) {
        valor_contagem = valor_contagem + 1
        visor_contador.innerHTML = valor_contagem
    } else {
        btn_mais.setAttribute("disabled", "disabled")
        btn_mais.classList.add("disabled_btn")
    }
}

function subtrair() {
    btn_mais.removeAttribute("disabled")
    btn_mais.classList.remove("disabled_btn")
    if (valor_contagem > -10) {
        valor_contagem = valor_contagem - 1
        visor_contador.innerHTML = valor_contagem
    } else {
        btn_menos.setAttribute("disabled", "disabled")
        btn_menos.classList.add("disabled_btn")
    }
}

function mais_ou_menos() {
    if (valor_contagem > 0) {
        visor_contador.classList.remove("negativo")
        visor_contador.classList.add("positivo")
    } else if (valor_contagem < 0) {
        visor_contador.classList.remove("positivo")
        visor_contador.classList.add("negativo")
    } else {
        visor_contador.classList.remove("positivo", "negativo")
    }
}

btn_mais.addEventListener("click", somar)
btn_menos.addEventListener("click", subtrair)
btn_mais.addEventListener("click", mais_ou_menos)
btn_menos.addEventListener("click", mais_ou_menos)