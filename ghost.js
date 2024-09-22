export { drawGhost, ghostSpriteSheet }

import { currentFrame } from "./game.js";

const canvasG = document.getElementById('gameCanvas');
const ctxG = canvasG.getContext('2d');

const ghostSpriteSheet = new Image();
ghostSpriteSheet.src = './assets/ghost.png';


//yellow
const ghostFrames = {
    down: [
        { x: 98, y: 48, width: 18, height: 16 },
        { x: 114, y: 48, width: 18, height: 16 },
    ],
    up: [
        { x: 66, y: 48, width: 18, height: 16 },
        { x: 82, y: 48, width: 18, height: 16 },
    ],
    left: [
        { x: 34, y: 48, width: 18, height: 16 },
        { x: 50, y: 48, width: 18, height: 16 },
    ],
    right: [
        { x: 18, y: 48, width: 18, height: 16 },
        { x: 2, y: 48, width: 18, height: 16 },

    ],
}


//cyan
// const ghostFrames = {
//     down: [
//         { x: 98, y: 32, width: 18, height: 16 },
//         { x: 114, y: 32, width: 18, height: 16 },
//     ],
//     up: [
//         { x: 66, y: 32, width: 18, height: 16 },
//         { x: 82, y: 32, width: 18, height: 16 },
//     ],
//     left: [
//         { x: 34, y: 32, width: 18, height: 16 },
//         { x: 50, y: 32, width: 18, height: 16 },
//     ],
//     right: [
//         { x: 18, y: 32, width: 18, height: 16 },
//         { x: 2, y: 32, width: 18, height: 16 },

//     ],
// }



//pink
// const ghostFrames = {
//     down: [
//         { x: 98, y: 16, width: 18, height: 16 },
//         { x: 114, y: 16, width: 18, height: 16 },
//     ],
//     up: [
//         { x: 66, y: 16, width: 18, height: 16 },
//         { x: 82, y: 16, width: 18, height: 16 },
//     ],
//     left: [
//         { x: 34, y: 16, width: 18, height: 16 },
//         { x: 50, y: 16, width: 18, height: 16 },
//     ],
//     right: [
//         { x: 18, y: 16, width: 18, height: 16 },
//         { x: 2, y: 16, width: 18, height: 16 },

//     ],
// }



//red
// const ghostFrames = {
//     down: [
//         { x: 98, y: 0, width: 18, height: 16 },
//         { x: 114, y: 0, width: 18, height: 16 },
//     ],
//     up: [
//         { x: 66, y: 0, width: 18, height: 16 },
//         { x: 82, y: 0, width: 18, height: 16 },
//     ],
//     left: [
//         { x: 34, y: 0, width: 18, height: 16 },
//         { x: 50, y: 0, width: 18, height: 16 },
//     ],
//     right: [
//         { x: 18, y: 0, width: 18, height: 16 },
//         { x: 2, y: 0, width: 18, height: 16 },

//     ],
// }



// Frame controls


let ghostposX = 150
let ghostposY = 150

let ghost = ghostFrames.down // this is the starting frame



function drawGhost() {
    const frame = ghost[currentFrame % ghost.length]; // Handle frame change

    ctxG.drawImage(ghostSpriteSheet, frame.x, frame.y, frame.width, frame.height, ghostposX, ghostposY, frame.width, frame.height);

}

