palavras = [];
var botao = document.querySelector(".bt-salvar");
botao.addEventListener('click', function(){
    adicionaNovaPalavra()
    window.location.href = "/jogo.html";
})

function adicionaNovaPalavra(){
    var inputNovaPalavra = document.getElementById('nova-palavra');
    palavras.push((inputNovaPalavra.value).toUpperCase());    
    inputNovaPalavra.value='';
}
