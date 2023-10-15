const compass = document.querySelector("#orientation");
const direction = document.querySelector("#direction");

let alpha = 0;
let beta = 0;
let gamma = 0;

function handleOrientation(event) {
    alpha = parseInt(event.alpha.toFixed(2));
    beta = parseInt(event.beta.toFixed(2));
    gamma = parseInt(event.gamma.toFixed(2));

    compass.innerHTML = `Alpha: ${alpha}, Beta: ${beta}, Gamma: ${gamma}`;
    switch (alpha) {
        case (alpha > 315 <= 360 || 0 > alpha <= 45):
            direction.innerHTML = "North";
            break;

        case (alpha > 45 && alpha <= 135):
            direction.innerHTML = "East";
            break;

        case (alpha > 135 && alpha <= 225):
            direction.innerHTML = "South";
            break;

        case (alpha > 225 && alpha <= 315):
            direction.innerHTML = "West";
            break;
    
        default:
            break;
    }
}

window.addEventListener("deviceorientation", handleOrientation);