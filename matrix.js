let jogada = 1;
let Vencedor = 0;
const tabuleiro = Array.from({ length: 3 }, () => Array(3).fill(''));

document.body.append(...Array.from({ length: 3 }, (_, i) => {
    const row = document.createElement('div');
    row.className = 'row';
    row.append(...Array.from({ length: 3 }, (_, j) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.id = `bt${i}${j}`;
        button.className = 'btJogo';
        button.onclick = () => marcaCasa(button.id);
        return button;
    }));
    return row;
}));

function marcaCasa(nomeBotao) {
    const button = document.getElementById(nomeBotao);
    button.innerText = jogada % 2 === 0 ? 'O' : 'X';
    button.style.color = jogada % 2 === 0 ? 'blue' : 'black';
    button.disabled = true;

    jogada++;
    if (jogada > 5) encerraJogo();
    if (jogada > 9 && !Vencedor) alert("Deu velha!");
}

function encerraJogo() {
    const linhas = [
        ['bt00', 'bt01', 'bt02'],
        ['bt10', 'bt11', 'bt12'],
        ['bt20', 'bt21', 'bt22'],
        ['bt00', 'bt10', 'bt20'],
        ['bt01', 'bt11', 'bt21'],
        ['bt02', 'bt12', 'bt22'],
        ['bt00', 'bt11', 'bt22'],
        ['bt02', 'bt11', 'bt20']
    ];

    for (const linha of linhas) {
        const [a, b, c] = linha.map(id => document.getElementById(id).innerText);
        if (a && a === b && a === c) {
            alert(`Jogo finalizado\nVencedor: ${a}`);
            Vencedor++;
            return;
        }
    }
}
