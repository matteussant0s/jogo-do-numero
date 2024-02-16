let listaDeNumeorosSoerteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextonaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, `Brazilian Portuguese Female`, {rate:1.0});
}

function exibirmMensagemInicial() {
    exibirTextonaTela(`h1`, `jogo do numero secreto`);
    exibirTextonaTela(`p`, `escolha um numero entre 1 e 5`);
}

 exibirmMensagemInicial();

function verificarChute() {
     let chute = document.querySelector(`input`).value;

    if(chute == numeroSecreto) {
        exibirTextonaTela(`h1`, `acertou !`);    
     let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
     let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
     exibirTextonaTela(`p`, mensagemTentativas);
     document.getElementById(`reiniciar`).removeAttribute (`disabled`);
    } else{
        if (chute > numeroSecreto) {
            exibirTextonaTela('p', 'numero secreto e menor');
        } else {
            exibirTextonaTela('p', 'o numero secreto e maior');
        }
        tentativas++
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * 3 + 1);
   let quantidadeDeElementosNaLista = listaDeNumeorosSoerteados.length;

if(quantidadeDeElementosNaLista == numeroLimite ) {
    listaDeNumeorosSoerteados = [];
}

   if (listaDeNumeorosSoerteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   }
   else {
    listaDeNumeorosSoerteados.push(numeroEscolhido)
    console.log(listaDeNumeorosSoerteados)
    return numeroEscolhido;
   }
}


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reinciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 2;
    exibirmMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}