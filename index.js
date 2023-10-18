const orientationItem = document.querySelector("#orientation");
const direction = document.querySelector("#direction");
const compass = document.querySelector("#compass");

let alpha = 0;
let beta = 0;
let gamma = 0;

function handleOrientation(event) {
    alpha = parseInt(event.alpha);
    beta = parseInt(event.beta);
    gamma = parseInt(event.gamma);

    orientationItem.innerHTML = `Alpha: ${alpha}, Beta: ${beta}, Gamma: ${gamma}`;

    if (alpha > 45 && alpha <= 135) direction.innerHTML = "East";
    else if (alpha > 135 && alpha <= 225) direction.innerHTML = "South";
    else if (alpha > 225 && alpha <= 315) direction.innerHTML = "West";
    else direction.innerHTML = "North";

    compass.style.transform = `rotate(${alpha}deg)`;
}

window.addEventListener("deviceorientation", handleOrientation);