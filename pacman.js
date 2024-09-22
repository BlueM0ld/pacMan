export { drawPacman, pacmanSpriteSheet }
import { currentFrame } from "./game.js";

const pacmanSpriteSheet = new Image();
pacmanSpriteSheet.src = './assets/pacman.png';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const pacmanFrames = {
    down: [
        { x: 0, y: 32, width: 16, height: 16 },
        { x: 16, y: 32, width: 16, height: 16 },
        { x: 32, y: 0, width: 16, height: 16 },
    ],
    up: [
        { x: 0, y: 48, width: 16, height: 16 },
        { x: 16, y: 48, width: 16, height: 16 },
        { x: 32, y: 0, width: 16, height: 16 },
    ],
    left: [
        { x: 0, y: 16, width: 16, height: 16 },
        { x: 16, y: 16, width: 16, height: 16 },
        { x: 32, y: 0, width: 16, height: 16 },
    ],
    right: [
        { x: 0, y: 0, width: 16, height: 16 },
        { x: 16, y: 0, width: 16, height: 16 },
        { x: 32, y: 0, width: 16, height: 16 },
    ],

    collision: [
        { x: 32, y: 0, width: 16, height: 16 },
        { x: 48, y: 0, width: 16, height: 16 },
        { x: 64, y: 0, width: 16, height: 16 },
        { x: 80, y: 0, width: 16, height: 16 },
        { x: 96, y: 0, width: 16, height: 16 },
        { x: 112, y: 0, width: 16, height: 16 },
        { x: 128, y: 0, width: 16, height: 16 },
        { x: 144, y: 0, width: 16, height: 16 },
        { x: 160, y: 0, width: 16, height: 16 },
        { x: 176, y: 0, width: 16, height: 16 },
        { x: 192, y: 0, width: 16, height: 16 },
        { x: 208, y: 0, width: 16, height: 16 },
    ]
}


// Key controls
let rightKey = false;
let leftKey = false;
let upKey = false;
let downKey = false;

document.addEventListener("keydown", keyHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


// Disable scolling behaviour with keys 
window.addEventListener("keydown", function (e) {
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
window.addEventListener("keyup", function (e) {
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

function keyHandler(event) {
    if (event.code === "ArrowRight") {
        rightKey = true;
    } else if (event.code === "ArrowLeft") {
        leftKey = true;
    }
    if (event.code === "ArrowDown") {
        upKey = true;
    } else if (event.code === "ArrowUp") {
        downKey = true;
    }
}

function keyUpHandler(event) {
    if (event.code === "ArrowRight") {
        rightKey = false;
    } else if (event.code === "ArrowLeft") {
        leftKey = false;
    }
    if (event.code === "ArrowDown") {
        upKey = false;
    } else if (event.code === "ArrowUp") {
        downKey = false;
    }
}


let pacManposX = 50
let pacManposY = 50

let pacMan = pacmanFrames.right // this is the starting frame



function drawPacman() {

    const frame = pacMan[currentFrame % pacMan.length]; // Handle frame change

    if (rightKey) {
        pacManposX += 2;
        pacMan = pacmanFrames.right;
    }
    if (leftKey) {
        pacManposX -= 2;
        pacMan = pacmanFrames.left;
    }
    if (upKey) {
        pacManposY += 2;
        pacMan = pacmanFrames.up;

    }
    if (downKey) {
        pacManposY -= 2;
        pacMan = pacmanFrames.down;
    }
    ctx.drawImage(pacmanSpriteSheet, frame.x, frame.y, frame.width, frame.height, pacManposX, pacManposY, frame.width, frame.height);

}
