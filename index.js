import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js"; // Importa a função para verificar se a lista está vazia

const listaDeCompras = document.getElementById("lista-de-compras")

//variaveis criadas com const são constantes, ou seja, não podem ser reatribuídas
//variaveis criadas com let podem ser reatribuídas, ou seja, podem ser modificadas
const botaoAdicionar = document.getElementById("adicionar-item")


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
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
})

verificarListaVazia(listaDeCompras); // Chama a função para verificar se a lista está vazia ao carregar a página