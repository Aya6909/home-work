const apiKey = "fb2cff02b71168e9f0c68fd3f83d168a";
document.getElementById("weather").onclick = 

async function () {
    const city = document.getElementById("city").value;
    if(!city) {
        document.getElementById("result").innerText = "Bir qala engizz";
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error("Tabilmadi!!");.
        }

        const data = await response.json();
        const temperatura = data.main.temp;
        const weather = data.weather[0].description;
        document.getElementById("result").innerText = `
        Qala: ${city} \n Temperatura: ${temperatura}°C \n Aua rayi: ${weather}.`;

    } catch (Error) {
        document.getElementById("result").innerText = "Qate bar";
        console.error("Qate bar", Error);
    }
};