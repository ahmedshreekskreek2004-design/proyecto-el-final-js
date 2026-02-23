const game = document.getElementById("game");
const ctx = game.getContext("2d");
let keys = {};

let blueBox = {//cambiado a foto
    x: 250,
    y: 450,
    width: 80,
    height: 90,
    speed: 5
};

let corazones = 3; // para la vida

document.addEventListener("keydown", function(e) {
    keys[e.code] = true;
    console.log(e.code,e.key);
});

document.addEventListener("keyup", function(e) {
    keys[e.code] = false;
});

let anemy = [];

function createAnemy() {

    let blockPequnye = {
        x: Math.random() * (game.width - 50),// 0-750
        y: 0,
        width: 50,
        height: 60,
        speed: 7
    };
    anemy.push(blockPequnye);
}
    let timpo=30;

setInterval(createAnemy, 500);
    


//crear el timpo

       
setInterval( teampo , 1000);

function teampo() {
    timpo-=1;}

let anemyImg=new Image();
    anemyImg.src="OIP.webp";
let jugadorImg=new Image();
    jugadorImg.src="misil3.png";
// empezar el juego
function gameLoop() {
  ctx.clearRect(0, 0, game.width, game.height);

    //crear corazon 
    ctx.fillStyle = "red";
    ctx.font = "50px Arial";
    for (let i = 0; i < corazones; i++) {
        ctx.fillText("❤", 20 + i * 50, 50);
    }
    
    
    ctx.fillStyle="yellow",
        ctx.font=" 30px Arial",
        ctx.fillText(timpo,750,30)
         
  

    // movir el anemy
    if (keys["ArrowRight"]) blueBox.x += blueBox.speed;
    if (keys["ArrowLeft"]) blueBox.x -= blueBox.speed;
    blueBox.x = Math.max(0, Math.min(game.width - blueBox.width, blueBox.x));//para tomar el menor 

    // pintar el bluebox
    ctx.fillStyle = "blue";
    ctx.drawImage(jugadorImg,blueBox.x, blueBox.y, blueBox.width, blueBox.height);

    //movir el anemy y pinar el anemy al pantalla
    for (let i = 0; i < anemy.length; i++) {
        let e = anemy[i];
        e.y += e.speed;
        ctx.fillStyle = "red";
        ctx.drawImage(anemyImg,e.x, e.y, e.width, e.height);

        // si hay un pegar el anemy y bluebox juntos
        if (
            blueBox.x < e.x + e.width &&
            blueBox.x + blueBox.width > e.x &&
            blueBox.y < e.y + e.height &&
            blueBox.y + blueBox.height > e.y
        ) {
            anemy.splice(i, 1); // elimnar enemy
            corazones--;        // elimnar un corazon 
            i--;//para volver un elemnto cuando elemna un anemy
        }

    
    }

    // cuando no hay alguna corazon tırmıara el juego
    if (corazones <= 0) {
        alert("Game Over!");
        return;// salir del juego
    }
    if (timpo<1) {
        timpo=0;
        alert("acabo de abrobar a parte 2 mas deficel");
    }

    requestAnimationFrame(gameLoop);
}

// بدء اللعبة
gameLoop();