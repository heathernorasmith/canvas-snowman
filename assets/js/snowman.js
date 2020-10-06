const $canvas = document.querySelector('.game-area');
const ctx = $canvas.getContext('2d');


function drawHead() {
  const x = $canvas.width * 0.5;
  const y = $canvas.height * 0.28;
  const radius = $canvas.width * 0.174;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.lineWidth = 8;
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawLeftEye() {
  const x = $canvas.width * 0.4475;
  const y = $canvas.height * 0.252;
  const radius = $canvas.width * 0.025;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawRightEye() {
  const x = $canvas.width * 0.5525;
  const y = $canvas.height * 0.252;
  const radius = $canvas.width * 0.025;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawNose() {
  const x = $canvas.width * 0.5;
  const y = $canvas.height * 0.31;
  const radius = $canvas.width * 0.029;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.lineWidth = 10;
  ctx.fillStyle = 'orange';
  ctx.strokeStyle = 'orange';
  ctx.fill();
  ctx.closePath();
}

function drawBody() {
  const x = $canvas.width * 0.5;
  const y = $canvas.height * 0.68;
  const radius = $canvas.width * 0.224;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.lineWidth = 8;
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawTopButton() {
  const x = $canvas.width * 0.5;
  const y = $canvas.height * 0.57;
  const radius = $canvas.width * 0.025;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.lineWidth = 10;
  ctx.fillStyle = 'black';
  ctx.strokeStyle = 'black';
  ctx.fill();
  ctx.closePath();
}

function drawMiddleButton() {
  const x = $canvas.width * 0.5;
  const y = $canvas.height * 0.68;
  const radius = $canvas.width * 0.025;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.lineWidth = 10;
  ctx.fillStyle = 'black';
  ctx.strokeStyle = 'black';
  ctx.fill();
  ctx.closePath();
}

function drawBottomButton() {
  const x = $canvas.width * 0.5;
  const y = $canvas.height * 0.79;
  const radius = $canvas.width * 0.025;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.lineWidth = 10;
  ctx.fillStyle = 'black';
  ctx.strokeStyle = 'black';
  ctx.fill();
  ctx.closePath();
}

// draw in order of back to front
drawBody();
drawHead();
drawLeftEye();
drawRightEye();
drawNose();
drawTopButton();
drawMiddleButton();
drawBottomButton();
