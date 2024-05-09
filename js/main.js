const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const window_height = window.innerHeight;

const window_width = window.innerWidth;

canvas.height = window_height;

canvas.width = window_width;

canvas.style.background = "#ff8";

class Circle {

  constructor(x, y, radius, color, text) {

    this.posX = x;

    this.posY = y;

    this.radius = radius;

    this.color = color;

    this.text = text;

  }

  draw(context) {

    context.beginPath();

    context.strokeStyle = this.color;

    context.textAlign = "center" ;

    context.textBaseline="middle";

    context.font = "20px Arial";

    context.fillText(this.text,this.posX, this.posY);

    context.lineWidth=2;

    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);

    context.stroke();

    context.closePath();

  }

}

let miCirculo = new Circle(100, 100, 50, 'red', 'Tec');

miCirculo.draw(ctx);