//Criar uma constante que retorna o local dos meus arquivos de audio
const path = function(file){
    return `files/${file}`;
};

//Aqui vamos chamar a função start, 
// após a janela da aplicação carregar

window.addEventListener("load", player.start());





