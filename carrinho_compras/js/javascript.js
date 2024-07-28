const ValorCelular = 1400;
const ValorFone = 100;
const ValorVR = 4000;
let total = 0;
document.getElementById(`ProdutoLista`).options[0].innerHTML = `Fone de ouvido - R$${ValorFone}`;
document.getElementById(`ProdutoLista`).options[1].innerHTML = `Celular - R$${ValorCelular}`;
document.getElementById(`ProdutoLista`).options[2].innerHTML = `Óculos VR - R$${ValorVR}`;


function limpar() {
    document.getElementById('total').innerHTML = 'Total = R$0';
    document.getElementById('lista').innerHTML = ``;
    total = 0;
}
function addCarrinho () {
    let codigoProduto = document.getElementById(`ProdutoLista`);
    let nomeProduto = codigoProduto.options[codigoProduto.selectedIndex].text;
    let quantidade = document.getElementById(`quantidade`).value;
    let valorTotal;
    if(quantidade > 0 && quantidade <= 99) {
        if(codigoProduto.value == 1){
            valorTotal = ValorFone * quantidade;
            document.getElementById(`lista`).innerHTML += `<p>${quantidade}x Fone de ouvido - R$${valorTotal}</p>`
            atualizarValor()
        } else if(codigoProduto.value == 2) {
            valorTotal = ValorCelular * quantidade;
            document.getElementById(`lista`).innerHTML += `<p>${quantidade}x Celular - R$${valorTotal}</p>`
            atualizarValor()
        } else if(codigoProduto.value == 3) {
            valorTotal = ValorVR * quantidade;
            document.getElementById(`lista`).innerHTML += `<p>${quantidade}x Óculos VR - R$${valorTotal}</p>`
            atualizarValor()
        }
    } else {
        alert("Quantidade de produtos inválida.");
    }

    
    function atualizarValor() {
        total = total + valorTotal;
        document.getElementById('total').innerHTML = `Total = R$${total}`;
    }
}
