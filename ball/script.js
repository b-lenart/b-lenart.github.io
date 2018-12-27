window.addEventListener('deviceorientation', moveMe)
let ball = document.getElementById("ball")


function moveMe(e) {
    let alfa = e.alpha;
    let beta = e.beta;
    let gamma = e.gamma;

    // let distA = (alfa * 4.5) + 100;
    // let distB = ((beta - 90) * 4.5) + 100;

    let distA = (gamma * 4.5) + 100;
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

    if (distA > 190) {
        ball.style.left = 190 + "px";
    }

    // up & down

    ball.style.top = distB + "px";

    if (distB < 0) {
        ball.style.top = 0;
    }

    if (distB > 190) {
        ball.style.top = 190 + "px";
    }

}