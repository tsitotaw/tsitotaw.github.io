/* jshint strict: true */

document.getElementById('fontOps').onchange = changeFontSize;
document.getElementById('animation').onchange = prepareAnimationArray;

document.getElementById('start').onclick = startAnimation;
document.getElementById('stop').onclick = stopAnimation;
document.getElementById('turbo').onclick = speedUpAnimation;

let animationArray = [];
let animationIntervalID;
let speed = 250;
let currentState = false;

disableStartButton();
disableStopButton();

function changeFontSize() {
    const size = this.value;
    const textArea = document.getElementById("text");
    textArea.style.fontSize = parseInt(size) + 'pt';
}

/**
 * when a new animation is called, we would like to prepare few things
 * get the animationArray populated with the right value
 * we use split to get the actual animations on a specific type 
 * 
 */
function prepareAnimationArray() {
    const target = this.value;
    const textArea = document.getElementById("text");
    if(target !== "Blank"){
        animationArray = Animation[target].split("=====\n");
        if(!currentState){
            enableStartButton();
            disableStopButton();
        }
        else {
            disableStartButton();
            enableStopButton();
        }
         
    }else{
        disableStartButton();
        disableStopButton();
    }

}

function enableStartButton(){
    document.getElementById("start").disabled = false;
}
function disableStartButton(){
    document.getElementById("start").disabled = true;
}
function enableStopButton(){
    document.getElementById("stop").disabled = false;
}
function disableStopButton(){
    document.getElementById("stop").disabled = true;
}

function startAnimation() {
    disableStartButton();
    enableStopButton();

    currentState = true;
    const textArea = document.getElementById("text");
    let i = 0;
    animationIntervalID = setInterval(function () {
        if (i < animationArray.length){
            textArea.textContent = animationArray[i];
        }else{
            i=0;
            textArea.textContent = animationArray[i];
        }
        i++;
    },speed);
}

function stopAnimation() {
    disableStopButton();
    enableStartButton();
    currentState = false;
    clearInterval(animationIntervalID);
}

function speedUpAnimation(){

    clearInterval(animationIntervalID);
    speed = (this.checked === true) ? 50 : 250;
    startAnimation();
}
