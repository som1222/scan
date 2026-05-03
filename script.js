const screen = document.getElementById("screen");
const statusText = document.getElementById("status");

function changeScreen() {
  const isGreen = Math.random() < 0.5;

  if (isGreen) {
    screen.style.backgroundColor = "green";
    statusText.textContent = "GO";
  } else {
    screen.style.backgroundColor = "red";
    statusText.textContent = "STOP";
  }
}

// change every 2 seconds
setInterval(changeScreen, 2000);

// start immediately
changeScreen();
