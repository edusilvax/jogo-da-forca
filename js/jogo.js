
var palavras = ['CASA','CARRO','MESA','PORTA', 'CADEIRA', 'ESTANTE','VOCE','COISA','ABRIL','JANEIRO','INUSITADO','INCRIVEL','EQUADOR'];


var palavraSorteada = sorteiaPalavra(palavras.length);
var arrayResposta = palavraSorteada.split('');
var arrayTentativa = [];
var tentativas = [];
var totalErro = 0
var tela = document.querySelector('body')

criaLinha(palavraSorteada.length);

desenhaBase();

preencheArrayTentativas();

iniciaJogo()





function preencheArrayTentativas(){
    for (var i=0; i<arrayResposta.length;i++){
            arrayTentativa.push('⠀');
        }
}

function iniciaJogo(){
    tela.addEventListener('keypress', jogo)
}

function sorteiaPalavra(tamanho){
    var i = Math.floor(Math.random()*((tamanho-0) + 0));
    console.log(i)
    return palavras[i]
    
}

function criaLinha(letras) {
    var tela = document.querySelector('#letras');
    var pincel = tela.getContext('2d');
    var pxI = 0
    for(var i=0; i<letras; i++){
        pincel.fillStyle="#0A3871";
        pincel.fillRect(pxI, 81, 50, 6);
        pxI += 70
    }
}

function jogo(event) {
    var tecla = event.keyCode;
    var letra = String.fromCharCode(tecla)
    for (var i=0; i<arrayResposta.length;i++){
        if (arrayResposta[i]==letra.toUpperCase()){
            arrayTentativa[i]=letra.toUpperCase()
            var contido = true
        } 
    }
    if (!contido) {
        tentativas.push(letra.toUpperCase())
        totalErro += 1
        desenhaErros(totalErro);
    }

    var resposta = arrayTentativa.join('');
    var erros = tentativas.join('');

    var espacoLetras = document.querySelector('#letras-digitadas');
    var letrasTentadas = document.querySelector('#letras-tentadas');

    letrasTentadas.value = erros

    espacoLetras.classList.add('fadein')
    espacoLetras.value = resposta
    var resultado = document.querySelector('#resultado');
    if (totalErro==6){
        tela.removeEventListener('keypress', jogo);    
        resultado.value='Você perdeu! A resposta era: '+arrayResposta.join('');
        resultado.classList.add('derrota');
    }else if (arrayResposta.join('')==arrayTentativa.join('')){
        tela.removeEventListener('keypress', jogo)
        resultado.value='Parabéns, você venceu!';
        resultado.classList.add('vitoria');
    }
}

function desenhaBase(){
    var tela = document.querySelector('#boneco');
    var pincelBoneco = tela.getContext('2d');
    var base= new Image();
    base.src= 'img/base.png';
    base.addEventListener('load', function(){
        pincelBoneco.drawImage(this, 0, 0);
    })
};

function desenhaErros(erros){
    var tela = document.querySelector('#boneco');
    var pincelBoneco = tela.getContext('2d');
    if (erros==1){
        var erro1 = new Image();
        erro1.src= 'img/erro1.png'
        erro1.addEventListener('load', function(){
            pincelBoneco.drawImage(this, 224, 41);
        })
    }

    if (erros==2){
        var erro2 = new Image();
        erro2.src= 'img/erro2.png'
        erro2.addEventListener('load', function(){
            pincelBoneco.drawImage(this, 254, 100);
        })
    }
    
    if (erros==3){
        var erro3 = new Image();
        erro3.src= 'img/erro3.png'
        erro3.addEventListener('load', function(){
            pincelBoneco.drawImage(this, 220, 120);
        })
    }

    if (erros==4){
        var erro4 = new Image();
        erro4.src= 'img/erro4.png'
        erro4.addEventListener('load', function(){
            pincelBoneco.drawImage(this, 255, 120);
        })
    }

    if (erros==5){
        var erro5 = new Image();
        erro5.src= 'img/erro5.png'
        erro5.addEventListener('load', function(){
            pincelBoneco.drawImage(this, 220, 230);
        })
    }

    if (erros==6){
        var erro6 = new Image();
        erro6.src= 'img/erro6.png'
        erro6.addEventListener('load', function(){
            pincelBoneco.drawImage(this, 255, 230);
        })
    }
}

