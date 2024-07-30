var score = 0;
var timer = 60;
var newhit = 0;

function getscore(){
    score += 10;
    document.getElementById("scoreval").textContent = score;
}

function makeBubble(){
    var clutter = "";
    for(i = 1; i <=168; i++){
        var hitrn = Math.floor(Math.random()*10)
       clutter += `<div class="bubble">${hitrn}</div>`;    
    }
    document.getElementById("pbtm").innerHTML = clutter;
}
makeBubble()

function getNewHit(){
    newhit = Math.floor(Math.random()*10)   
    document.getElementById("hit").textContent = newhit;
}
getNewHit();

var timer = 60;
function runTimer(){
var timing = setInterval(function(){
    if(timer>0){
        timer--;
    document.querySelector("#timerval").textContent = timer;
    }
    else{
        clearInterval(timing);
        document.querySelector("#pbtm").innerHTML =
         `<h1>Game Over <br> 
         Your Score is ${score}<h1>
         <br>`;
         
    }
    
},1000)
}
runTimer();


document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum ===newhit){
        getNewHit();
        makeBubble();
        getscore();
    
    }
})

