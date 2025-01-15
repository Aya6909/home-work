const apiKey = "fb2cff02b71168e9f0c68fd3f83d168a";
document.getElementById("weather").onclick = function() {
    const city = document.getElementById("city").value;
    if (!city) {
        document.getElementById("result").innerText = "Bir qala engizz";
        return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Tabilmadi!!");
            }
            return response.json();
        })
        .then(data => {
            const temperatura = data.main.temp;
            const weather = data.weather[0].description;
            document.getElementById("result").innerText = `
            Qala:${city} \n Temperatura:${temperatura}°C \n Aua rayi:${weather}.`;
        })
        .catch(error => console.error('Qate bar', error));
};