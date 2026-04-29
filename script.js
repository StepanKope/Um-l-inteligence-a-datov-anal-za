let chart;

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

        let pricePerM2 =
            location === "praha" ? 90000 :
            location === "city" ? 60000 :
            30000;

        let basePrice = size * pricePerM2;
        let roomBonus = rooms * 80000;
        let agePenalty = age * 15000;

        let price = basePrice + roomBonus - agePenalty;

        let minPrice = size * 20000;
        if (price < minPrice) price = minPrice;

        document.getElementById("result").innerHTML =
            "💰 Odhadovaná cena:<br><span style='font-size:28px'>" +
            Math.round(price).toLocaleString() + " Kč</span>";

        // 📊 graf
        let ctx = document.getElementById("priceChart").getContext("2d");

        if (chart) chart.destroy();

        chart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Základ", "Pokoje", "Stáří", "Celkem"],
                datasets: [{
                    data: [basePrice, roomBonus, -agePenalty, price],
                    backgroundColor: [
                        "#00c3ff",
                        "#00ffcc",
                        "#ff4d4d",
                        "#ffd700"
                    ]
                }]
            },
            options: {
                plugins: { legend: { display: false } }
            }
        });

    }, 700);
}
