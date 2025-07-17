const inputItem = document.getElementById("input-item")
const listaDeCompras = document.getElementById("lista-de-compras")

//variaveis criadas com const são constantes, ou seja, não podem ser reatribuídas
//variaveis criadas com let podem ser reatribuídas, ou seja, podem ser modificadas
const botaoAdicionar = document.getElementById("adicionar-item")
let contador = 0;

// Event listener serve pra escutar eventos, como cliques, teclas pressionadas, etc.
// Aqui, estamos escutando o evento de clique no botão "Adicionar Item"
// Quando o botão é clicado, a função dentro do event listener é executada
// O evento é passado como argumento para a função, mas não estamos usando ele aqui
// A função simplesmente imprime o valor do input no console

// o evento.preventDefault() é usado para evitar que o formulário seja enviado
// e a página seja recarregada, o que é o comportamento padrão de um formulário
// Isso é útil quando queremos manipular os dados do formulário com JavaScript sem recarregar
// a página.
botaoAdicionar.addEventListener("click", (evento) =>  {
    evento.preventDefault();
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

    listaDeCompras.appendChild(itemDaLista);
})


