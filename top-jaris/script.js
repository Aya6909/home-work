document.getElementById('tusTandau').addEventListener('input', function() {
    const tusTandau = this.value;
    if (/^#[0-9A-F]{6}$/i.test(tusTandau)) {
        generatePalette(tusTandau);
    }
});

function generatePalette(tusTandau) {
    const result = document.getElementById('result');

    result.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const colorBox = document.createElement('div');
        const color = shadeColor(tusTandau, i * 20 - 40);

        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color;
        colorBox.textContent = color;

        result.appendChild(colorBox);
    }
}

function shadeColor(color, percent) {
    //кызыл тус
    let R = parseInt(color.substring(1, 3), 16)
    //жасыл тус 
    let G = parseInt(color.substring(3, 5), 16);
    //кок тус
    let B = parseInt(color.substring(5, 7), 16);

    //
    R = parseInt(R * (100 + percent)/ 100);
    G = parseInt(G * (100 + percent)/ 100);
    B = parseInt(B * (100 + percent) / 100);

//
    R = (R < 255)? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;

//
    const RR = ((R.toString(16).length === 1) ? "0" + R.toString(16) : R.toString(16));
    const GG = ((G.toString(16).length === 1) ? "0" + G.toString(16) : G.toString(16));
    const BB = ((B.toString(16).length === 1) ? "0" + B.toString(16) : B.toString(16));

    //
    return "#" + RR + GG + BB;
}