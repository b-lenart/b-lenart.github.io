window.addEventListener('deviceorientation', moveMe)
let ball = document.getElementById("ball");
let hole1 = document.getElementById("hole1");
const alertMsg = document.getElementById("alertMsg");


function moveMe(e) {
    let alfa = e.alpha;
    let beta = e.beta;
    let gamma = e.gamma;

    // let distA = (alfa * 4.5) + 100;
    // let distB = ((beta - 90) * 4.5) + 100;

    let distA = (gamma * 4.5) + 160;
    let distB = (beta * 4.5) + 100;
    // let distB = ((beta - 90) * 4.5) + 100;

    ball.style.left = distA + "px";
    console.log('left: ' + ball.style.left);
    console.log('distA: ' + distA);
    console.log('distB: ' + distB);

    //left & right

    if (distA < 0) {
        ball.style.left = 0;
    }

    if (distA > 310) {
        ball.style.left = 310 + "px";
    }

    // up & down

    ball.style.top = distB + "px";

    if (distB < 0) {
        ball.style.top = 0;
    }

    if (distB > 240) {
        ball.style.top = 240 + "px";
    }

    if ((ball.style.top >= "50px" && ball.style.top <= "70px") && (ball.style.left >= "150px" && ball.style.left <= "170px")) {
        alertMsg.style.opacity = 1;
    } else {
        alertMsg.style.opacity = 0;
    }

}