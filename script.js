function predict() {

    let size = parseFloat(document.getElementById("size").value);
    let rooms = parseFloat(document.getElementById("rooms").value);
    let age = parseFloat(document.getElementById("age").value);
    let location = document.getElementById("location").value;

    if (!size || !rooms || !age) {
        document.getElementById("result").innerHTML = "⚠️ Vyplň všechna pole!";
        return;
    }

    document.getElementById("result").innerHTML = "🤖 Počítám...";

    setTimeout(() => {

        let pricePerM2;

        if (location === "praha") {
            pricePerM2 = 90000;
        } else if (location === "city") {
            pricePerM2 = 60000;
        } else {
            pricePerM2 = 30000;
        }

        let basePrice = size * pricePerM2;
        let roomBonus = rooms * 80000;
        let agePenalty = age * 15000;

        let price = basePrice + roomBonus - agePenalty;

        let minPrice = size * 20000;
        if (price < minPrice) price = minPrice;

        let variation = price * (Math.random() * 0.1 - 0.05);
        price = Math.round(price + variation);

        document.getElementById("result").innerHTML =
            "💰 Odhadovaná cena:<br><span style='font-size:28px'>" +
            price.toLocaleString() + " Kč</span>";

    }, 700);
}
