import gerarDiaDaSemana from "./gerarDiaDaSemana.js"; //como foi exportado com export default, podemos importar com qualquer e sem chaves

const inputItem = document.getElementById("input-item")
let contador = 0;
export function criarItemDaLista() {
    
    if (inputItem.value == "") {
        alert("Por favor, digite um item.");
        return;
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = 'checkbox-' + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", function() {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        }
        else {
            nomeItem.style.textDecoration = "none";
        }
    });

    // Trabalhando com o DOM (Document Object Model), criando a estrutura HTML com sua arvore genealogica
    // O DOM é uma representação da estrutura do documento HTML, onde cada elemento é um nó
    // Aqui, estamos criando um item de lista (li) e adicionando um container (div) dentro dele
    // O container tem uma classe "lista-item-container" para estilização
    // Dentro do container, estamos criando um input do tipo checkbox e um parágrafo (p)
    // que contém o texto do item que foi digitado no input
    // O contador é usado para dar um ID único para cada checkbox, assim podemos identificar cada
    // item da lista individualmente
    // Finalmente, estamos adicionando o container ao item da lista e o item da lista ao
    // elemento de lista principal (ul) que está no HTML
    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);

    const dataCompleta = gerarDiaDaSemana(); // Chama a função para obter a data e hora atual formatada
    
    const itemData = document.createElement("p");

    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}