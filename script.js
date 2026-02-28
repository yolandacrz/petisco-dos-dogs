let total = 0;
let lista = document.getElementById("lista-carrinho");

function adicionar(valor, nome) {
    total += valor;
    document.getElementById("total").textContent = total.toFixed(2);

    let item = document.createElement("li");
    item.textContent = nome + " - R$ " + valor.toFixed(2);
    lista.appendChild(item);
}

function finalizar() {
    if (total > 0) {
        alert("Compra finalizada! Total: R$ " + total.toFixed(2));
        total = 0;
        document.getElementById("total").textContent = "0.00";
        lista.innerHTML = "";
    } else {
        alert("Seu carrinho está vazio!");
    }
}