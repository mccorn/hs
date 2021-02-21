let PIXI = require('pixi.js');

let renderer = new PIXI.CanvasRenderer(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.view);

let stage = new PIXI.Stage;

let texture = PIXI.Texture.fromImage('./assets/img/back.png');
let back = new PIXI.Sprite(texture);

back.position.x = window.innerWidth / 2 - 150;
back.position.y = window.innerHeight / 2 - 150;

stage.addChild(back);

function draw() { renderer.render(stage); requestAnimationFrame(draw); }

draw(); 