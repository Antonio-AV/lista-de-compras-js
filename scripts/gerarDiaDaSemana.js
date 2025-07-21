function gerarDiaDaSemana() {    
    const diaDaSemana = new Date().toLocaleDateString('pt-BR', {
        weekday: 'long',
    });

    const dataAtual = new Date().toLocaleDateString('pt-BR')
    const hora = new Date().toLocaleTimeString('pt-BR', {
        hour: 'numeric',
        minute: 'numeric',
    });
    const dataCompleta = '' + diaDaSemana + ' (' + dataAtual + ') às ' + hora;
    return dataCompleta;
}

export default gerarDiaDaSemana; // O export default permite que essa função seja importada com qualquer nome em outros arquivos
// vai ser a unica funcionalidade do arquivo gerarDiaDaSemana.js, então não há necessidade de nomear a função
// e exportar como um objeto com chaves, como { gerarDiaDaSemana }.