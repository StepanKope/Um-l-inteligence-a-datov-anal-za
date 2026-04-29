script.js
function predict() {

    let size = document.getElementById("size").value;

    let rooms = document.getElementById("rooms").value;

    let age = document.getElementById("age").value;
 
    if (!size || !rooms || !age) {

        document.getElementById("result").innerHTML = "⚠️ Vyplň všechna pole!";

        return;

    }
 
    // jednoduchý AI model (simulace)

    let price =

        (size * 3000) +

        (rooms * 50000) -

        (age * 1000);
 
    document.getElementById("result").innerHTML =

        "💰 Odhadovaná cena: " + price.toLocaleString() + " Kč";

}
 
