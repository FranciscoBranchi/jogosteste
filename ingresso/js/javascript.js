let inferior = 400;
let superior = 200;
let pista = 100;
document.getElementById('inferiorQuant').innerHTML = `Cadeira inferior: ${inferior}`;
document.getElementById('superiorQuant').innerHTML = `Cadeira superior: ${superior}`;
document.getElementById('pistaQuant').innerHTML = `Pista : ${pista}`;

function comprarIngresso() {
    let ingresso = document.getElementById(`ingressoLista`).value;
    let quantidade = document.getElementById('quantidade').value;


    if(quantidade > 0) {
        if (ingresso > 0) {
            if (ingresso == 1) {
                if (quantidade <= inferior){
                    inferior = inferior - quantidade;
                    document.getElementById('inferiorQuant').innerHTML = `Cadeira inferior: ${inferior}`;
                    sucesso();
                } else {
                    erro();
                }
            } else if (ingresso == 2) {
                if (quantidade <= superior){
                    superior = superior - quantidade;
                    document.getElementById('superiorQuant').innerHTML = `Cadeira superior: ${superior}`;
                    sucesso();
                } else {
                    erro();
                }
            } else if (ingresso == 3) { 
                if (quantidade <= pista){
                    pista = pista - quantidade;
                    document.getElementById('pistaQuant').innerText = `Pista: ${pista}`;
                } else {
                    erro();
                }
            } else {
                console.log("ingresso invalido");
            }
        }
    } else {
        alert("Insira a quantidade de ingressos a serem comprados.");
    }    
}
function erro() {
    alert("Não é possível comprar mais ingressos que a quantidade disponível.");
}