let listaPessoas1 = []
let listaPessoas2 = [];
function adicionar() {
    let nome = document.getElementById('nomePessoa').value;
    lista = document.getElementById('listaPessoas').value;
    document.getElementById('listaPessoas').innerHTML += `${nome}, `;
    listaPessoas1.push(nome);
    listaPessoas2.push(nome);
    document.getElementById('nomePessoa').value = '';
}

function limpar() {
    listaPessoas1 = [];
    listaPessoas2 = [];
    document.getElementById('listaPessoas').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('nomePessoa').value = '';
}


function embaralhar(array) {
    var m = array.length;
    var t;
    var i;

    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

function calcular() {
    document.getElementById('resultado').innerHTML = '';
    embaralhar(listaPessoas1);
    embaralhar(listaPessoas2);
    for(let i = 0; i < listaPessoas1.length;i++)
        {
        document.getElementById('resultado').innerHTML += `${listaPessoas1[i]} --> ${listaPessoas2[i]}<br>`;
    }
}