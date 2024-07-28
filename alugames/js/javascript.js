function alterarStatus(id) {
    let jogoClicado = document.getElementById(`jogo${id}`);
    let jogoImagem = document.getElementById(`jogo${id}image`);

    if (jogoClicado.textContent.includes("Alugar")){

        jogoClicado.innerHTML = "Devolver";
        jogoImagem.classList.remove("status-disponivel");
        jogoImagem.classList.add("status-alugado");
        
    } else {
        if(confirm("Tem certeza que deseja devolver?")){
            jogoClicado.innerHTML = "Alugar";
            jogoImagem.classList.remove("status-alugado");
            jogoImagem.classList.add("status-disponivel");
        }
    }
}