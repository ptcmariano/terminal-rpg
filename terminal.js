var sequencia = [
    'florest1.png',
    'florest2.png',
    'florest3.png',
    'florest4.png',
    'temple1.png',
    'temple2.png',
    'temple3.png',
    'temple4.png',
    'temple5.png',
    'temple6.png',
    'temple7.png',
    'temple8.png',
];
var posicaoAtual = 0;
function terminalCards() {
    const cenario = document.getElementById('cenario')
    cenario.src = `./img/${sequencia[posicaoAtual]}`
    cenario.alt = `${sequencia[posicaoAtual]}`
    posicaoAtual++
    posicaoAtual = posicaoAtual >= sequencia.length ? 0 : posicaoAtual
}