let emptyObject = { nome: undefined, preco: undefined, obs: undefined, estoque: undefined };

function organizador(objetoVazio) {
    let nome = prompt("Digite o nome do produto").toLowerCase();
    objetoVazio.nome = nome;
    
    let preco = prompt("Digite o preço do produto");
    preco = parseFloat(preco);
    objetoVazio.preco = preco;
    
    let obs = prompt("Descrição do produto");
    objetoVazio.obs = obs;
    
    let estoque = responder(confirm("O produto está em estoque?"));
    objetoVazio.estoque = estoque;
}

function responder(valor) {
    return valor;
}

organizador(emptyObject);
console.log(emptyObject);

function adicionarItem(objeto) {
    if (objeto.preco > 20 && !objeto.estoque) {
        console.log("O produto não está em estoque e o preço não pode exceder 20");
        return false;
    } else if (!objeto.estoque) {
        console.log("O produto não está em estoque e não pode ser vendido");
        return false;
    } else if (objeto.preco > 20) {
        console.log("O produto não pode ser vendido pois o preço excede 20");
        return false;
    } else if (objeto.preco <= 20 && objeto.estoque) {
        console.log("O produto pode ser vendido");
        return true;
    }
}

let podeSerAdicionado = adicionarItem(emptyObject);
console.log(podeSerAdicionado);

document.getElementById("nome").innerHTML = `${emptyObject.nome}`;
document.getElementById("preco").innerHTML = `R$ ${emptyObject.preco.toFixed(2)}`;
document.getElementById("obs").innerHTML = `${emptyObject.obs}`;
document.getElementById("estoque").innerHTML = `${emptyObject.estoque}`;

function validador(elemento){
    if (elemento === true) {
        document.getElementById("disponivel").innerHTML = `Disponível`;
    }else if (elemento != true) {
        document.getElementById("disponivel").innerHTML = `Não disponível`;
    }else
    console.log("algo de errado aconteceu")
}

validador(podeSerAdicionado)