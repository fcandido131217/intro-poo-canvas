const canvasOOP = document.getElementById("canvasOOP");
const ctx = canvasOOP.getContext("2d");

canvasOOP.height = "200";
canvasOOP.width = "300";
canvasOOP.style.background = "#ff8";

class Circle {
    constructor(x, y, radius, color, text, backcolor) {
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.backcolor = backcolor;
    }

    draw(context) {
        context.beginPath();
        context.strokeStyle = this.color;
        context.fillStyle = this.backcolor; 
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        context.fill(); 
        context.stroke();
        context.closePath();

        context.beginPath(); // Se inicia un nuevo trazado para el texto
        context.fillStyle = this.color; // Se establece el color del texto
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "20px Arial";
        context.fillText(this.text, this.posX, this.posY); // Se dibuja el texto
        context.closePath();
    }

    // Método para que el círculo "caiga" hacia abajo
    fell(distance) {
        this.posY += distance;
    }
}

let miCirculo = new Circle(150, 100, 50, 'black', 'Tec', 'rgb(51, 255, 243 )');
miCirculo.draw(ctx);

const canvasMovi = document.getElementById("canvasmovi");
const ctxMovi = canvasMovi.getContext("2d");

canvasMovi.height = 200;
canvasMovi.width = 300;
canvasMovi.style.background = "#ff8";

let randomX = Math.random() * canvasMovi.width;
let randomY = Math.random() * canvasMovi.height;
let randomRadius = Math.floor(Math.random() * 100 + 30);

let miCirculoMovimiento = new Circle(randomX, randomY, randomRadius, 'white', 'Random', 'rgb( 66, 255, 51 )');
miCirculoMovimiento.draw(ctxMovi);
miCirculoMovimiento.fell(50);

const canvasMultiple = document.getElementById("canvasmultiple");
const ctxMultiple = canvasMultiple.getContext("2d");

canvasMultiple.height = 200;
canvasMultiple.width = 300;
canvasMultiple.style.background = "#ff8";

let arrayCircle = [];

function validPlacement(x, y, radius, canvas) {
    for (let circle of arrayCircle) {
        let dx = circle.x - x;
        let dy = circle.y - y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < circle.radius + radius) {
            return false; // Se superpone con otro círculo
        }
    }
    // Verifica si el círculo está completamente dentro del canvas
    return (x - radius > 0 && y - radius > 0 && x + radius < canvas.width && y + radius < canvas.height);
}

for (let i = 0; i < 10; i++) {
    let randomX, randomY, randomRadius;
    do {
        randomRadius = Math.floor(Math.random() * 30 + 30); // Radio entre 30 y 60
        randomX = Math.random() * (canvasMultiple.width - 2 * randomRadius) + randomRadius;
        randomY = Math.random() * (canvasMultiple.height - 2 * randomRadius) + randomRadius;
    } while (!validPlacement(randomX, randomY, randomRadius, canvasMultiple));

    let miCirculoMultiple = new Circle(randomX, randomY, randomRadius, "blue", i + 1, 'rgb(168,225,222)');
    arrayCircle.push(miCirculoMultiple);
    arrayCircle[i].draw(ctxMultiple);
}
