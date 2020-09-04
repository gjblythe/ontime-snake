const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');
const scale = 10;
console.log(ctx);
const rows = canvas.height / scale;
const columns = canvas.width /scale;

let snake;

(function setup() {
  snake = new Snake();
  fruit = new Fruit();
  fruit.pickLocation();
  

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight, );
    fruit.draw();
    snake.update(); 
    snake.draw();

    if (snake.eat(fruit)) {
      fruit.pickLocation();
      //snake length ++ 
    }
  }, 250)
}());

window.addEventListener('keydown', ((e) => {
  const direction = e.key.replace('Arrow', '');
  snake.changeDirection(direction)
}));