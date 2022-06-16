console.log("Hello World");

window.onload = doStuff;

function doStuff() {
  var counter = 0;
  var ball = document.getElementById("ball");
  console.log(ball);

  let xPositions = [
    "100px",
    "200px",
    "300px",
    "400px",
    "500px",
    "600px",
    "700px",
  ];

  console.log(xPositions.length);
  function moveBall() {
    let currentPosition = counter % xPositions.length;

    ball.style.left = xPositions[currentPosition];

    if (currentPosition === 6) {
      xPositions.reverse();
    }

    counter++;
  }

  setInterval(moveBall, 50);
}
