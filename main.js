canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
backgroundimage="mars.jpg";
roverimage="rover.png";
roverheight=90;
roverwidth=100;
roverx=10;
rovery=10;
function add(){
    backgroundimgtag = new Image();
    backgroundimgtag.onload = uploadmarsfunction;
    backgroundimgtag.src = backgroundimage;
    roverimgtag = new Image();
roverimgtag.onload = uploadroverfunction;
roverimgtag.src = roverimage;
    
}

function uploadmarsfunction(){
    ctx.drawImage(backgroundimgtag,0,0,canvas.width,canvas.height);
    }
    function uploadroverfunction(){
        ctx.drawImage(roverimgtag,roverx,rovery,roverwidth,roverheight);
        }
        window.addEventListener("keydown", keydownfunction);
function keydownfunction(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '87'){
up();
console.log("up");
}
if(keyPressed == '83'){
    down();
    console.log("down");
    }
    if(keyPressed == '68'){
        right();
        console.log("right");
        }
        if(keyPressed == '65'){
            left();
            console.log("left");
            }
}
function up(){
    if(rovery>=0){
    rovery = rovery - 10;
    console.log("When up arrow is pressed , x position of rover=" +
    roverx + " | Y position of rover " + rovery);
    uploadmarsfunction();
    uploadroverfunction();
    }
    }
    function down(){
        if(rovery<=500){
        rovery = rovery + 10;
        console.log("When up arrow is pressed , x position of rover=" +
        roverx + " | Y position of rover " + rovery);
        uploadmarsfunction();
        uploadroverfunction();
        }
        }
       function left(){
if(roverx>=0){
roverx = roverx - 10;
console.log("When up arrow is pressed , x position of rover=" +
roverx + " | y position of rover " + rovery);
uploadmarsfunction();
uploadroverfunction();
}
}
function right(){
    if(roverx<=700){
    roverx = roverx + 10;
    console.log("When up arrow is pressed , x position of rover=" +
    roverx + " | Y position of rover " + rovery);
    uploadmarsfunction();
    uploadroverfunction();
    }
    }
    
    