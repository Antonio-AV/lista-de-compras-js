const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");
// Verifica se a lista de compras está vazia e exibe ou esconde a mensagem
function verificarListaVazia(listaDeCompras) {
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if (itensDaLista.length == 0) {
        mensagemListaVazia.style.display = "block"; //mostra a mensagem
    } else {
        mensagemListaVazia.style.display = "none"; //esconde a mensagem
    }
}

export default verificarListaVazia; // Exporta a função para que possa ser usada em outros arquivos