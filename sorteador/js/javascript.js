function sortear () {
    let quantidade = document.getElementById('quantidade').value;
    let minimo = document.getElementById('minimo').value;
    let maximo = document.getElementById('maximo').value;
    aleatorio(quantidade, minimo, maximo);
}

function aleatorio(quantidade, minimo, maximo){
/*    alert(`quantidade: ${quantidade}`);
    alert(`minimo: ${minimo}`);
    alert(`maximo: ${maximo}`);*/
    let valores = [];
    let i = 0;
    let temp = 0;
    if ((maximo - minimo + 1) < quantidade) {
        alert("a quantidade escolhida é maior que o numero de possibilidades.");
    } else {
        while(i != quantidade) {
            temp = Math.ceil((Math.random() * (maximo - minimo + 1)) + minimo);
            if(!valores.includes(temp)){
                valores[i] = temp;
                i++;
            }
        }
    }
    document.getElementById('lista').innerHTML = valores;
}

function limpar(){
    document.getElementById('lista').innerHTML = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('minimo').value = '';
    document.getElementById('maximo').value = '';
}