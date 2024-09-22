export { drawMap }

const canvasMap = document.getElementById('gameCanvas');
const ctx = canvasMap.getContext('2d');

// TODO: break the map into sprites then add that manually create this
// 1 = horizontal wall, 2 = vertical wall, 
// 4 = top-left corner, 5 = top-right corner, 
// 6 = bottom-left corner, 7 = bottom-right corner
function drawMap() {
    const map = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 2],
        [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [0, 2, 0, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [0, 2, 0, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 2],
        [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 7, 0, 0, 0, 0, 0, 0],
        [0, 6, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 7, 0],
        [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
        [1, 1, 1, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 1, 1],
        [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
        [0, 4, 1, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 1, 5, 2],
        [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [0, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];


    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === 1) {
                wallH(i + 1, j + 1);
            } else if (map[i][j] === 2) {
                wallV(i + 1, j + 1);
            } else if (map[i][j] === 4) {
                drawCorner(i + 1, j + 1, 'top-left');
            } else if (map[i][j] === 5) {
                drawCorner(i + 1, j + 1, 'top-right');
            } else if (map[i][j] === 6) {
                drawCorner(i + 1, j + 1, 'bottom-left');
            } else if (map[i][j] === 7) {
                drawCorner(i + 1, j + 1, 'bottom-right');
            }
        }
    }
}

// Draw horizontal wall
function wallH(i, j) {
    ctx.beginPath();
    ctx.strokeStyle = "#2121FF";
    ctx.moveTo(16 * j, 16 * i);
    ctx.lineTo(16 * j + 16, 16 * i);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(16 * j, 16 * i - 4);
    ctx.lineTo(16 * j + 16, 16 * i - 4);
    ctx.stroke();
}

// Draw vertical wall
function wallV(i, j) {
    ctx.beginPath();
    ctx.strokeStyle = "#2121FF";
    ctx.moveTo(16 * j, 16 * i);
    ctx.lineTo(16 * j, 16 * i + 16);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(16 * j - 4, 16 * i);
    ctx.lineTo(16 * j - 4, 16 * i + 16);
    ctx.stroke();
}

function drawCorner(i, j, direction) {
    ctx.strokeStyle = "#2121FF";

    if (direction === 'top-left') {
        ctx.beginPath();
        ctx.strokeStyle = "#2121FF";
        ctx.moveTo(16 * j, 16 * i);
        ctx.lineTo(16 * j, 16 * i + 16);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(16 * j - 4, 16 * i - 4);
        ctx.lineTo(16 * j - 4, 16 * i + 16);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(16 * j - 4, 16 * i - 4);
        ctx.lineTo(16 * j + 16, 16 * i - 4);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(16 * j, 16 * i);
        ctx.lineTo(16 * j + 16, 16 * i);
        ctx.stroke();



    } else if (direction === 'top-right') {
        // Vertical and horizontal lines meeting at top-right

        ctx.beginPath();
        ctx.strokeStyle = "#2121FF";
        ctx.moveTo(16 * j + 16, 16 * i + 16);
        ctx.lineTo(16 * j + 16, 16 * i - 4);
        ctx.stroke();


        ctx.beginPath();
        ctx.strokeStyle = "#2121FF";
        ctx.moveTo(16 * j + 12, 16 * i + 16);
        ctx.lineTo(16 * j + 12, 16 * i);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(16 * j + 12, 16 * i);
        ctx.lineTo(16 * j, 16 * i);
        ctx.stroke();


        // ctx.beginPath();
        // ctx.moveTo(16 * j, 16 * i - 4);
        // ctx.lineTo(16 * j - 4, 16 * i - 4);
        // ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(16 * j + 16, 16 * i - 4);
        ctx.lineTo(16 * j, 16 * i - 4);
        ctx.stroke();

    } else if (direction === 'bottom-left') {
        // Vertical and horizontal lines meeting at bottom-left
        ctx.beginPath();
        ctx.strokeStyle = "#2121FF";
        ctx.moveTo(16 * j - 4, 16 * i);
        ctx.lineTo(16 * j + 16, 16 * i);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(16 * j, 16 * i - 4);
        ctx.lineTo(16 * j + 16, 16 * i - 4);
        ctx.stroke();


        ctx.beginPath();
        ctx.moveTo(16 * j - 4, 16 * i - 16);
        ctx.lineTo(16 * j - 4, 16 * i);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(16 * j, 16 * i - 16);
        ctx.lineTo(16 * j, 16 * i - 4);
        ctx.stroke();
    } else if (direction === 'bottom-right') {
        // Vertical and horizontal lines meeting at bottom-right

        ctx.beginPath();
        ctx.strokeStyle = "#2121FF";
        ctx.moveTo(16 * j, 16 * i);
        ctx.lineTo(16 * j + 16, 16 * i);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(16 * j, 16 * i - 4);
        ctx.lineTo(16 * j + 12, 16 * i - 4);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(16 * j + 12, 16 * i - 16);
        ctx.lineTo(16 * j + 12, 16 * i - 4);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(16 * j + 16, 16 * i - 16);
        ctx.lineTo(16 * j + 16, 16 * i);
        ctx.stroke();

    }
}
