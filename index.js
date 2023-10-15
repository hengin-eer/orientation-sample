const compass = document.querySelector("#orientation");
let alpha = 0;
let beta = 0;
let gamma = 0;

function handleOrientation(event) {
    alpha = event.alpha.toFixed(2);
    beta = event.beta.toFixed(2);
    gamma = event.gamma.toFixed(2);

    compass.innerHTML = `Alpha: ${alpha}, Beta: ${beta}, Gamma: ${gamma}`;
}

window.addEventListener("deviceorientation", handleOrientation);