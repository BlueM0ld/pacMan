import { drawGhost, ghostSpriteSheet } from "./ghost.js";
import { drawPacman, pacmanSpriteSheet } from "./pacman.js";
import { drawMap } from "./map.js";

const canvas = document.getElementById('gameCanvas');
export let frameCounter = 0;
export let currentFrame = 0;
export const frameDelay = 10;

export function startGameLoop(drawFunctions, canvas) {
    const ctx = canvas.getContext('2d');

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawFunctions.forEach(drawFunction => drawFunction());

        frameCounter++;
        if (frameCounter % frameDelay === 0) {
            currentFrame++;
        }

        requestAnimationFrame(gameLoop);
    }

    gameLoop();
}


Promise.all([
    ghostSpriteSheet.onload,
    pacmanSpriteSheet.onload
]).then(() => {
    startGameLoop([drawPacman, drawGhost, drawMap], canvas);
});
