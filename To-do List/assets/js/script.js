let lista_tarefas = document.getElementById("lista")

function nova_tarefa() {
    let input_tarefa = document.getElementById("tarefa").value
    let item_lista = document.createElement("li")
    if (input_tarefa) {
        item_lista.innerHTML = `
            <input type="checkbox" class="check_tarefa"> <span class="texto_tafera"> ${input_tarefa}</span>
        `
        lista_tarefas.appendChild(item_lista)
    }
}

document.querySelector('#cadastrar').addEventListener("click", nova_tarefa)