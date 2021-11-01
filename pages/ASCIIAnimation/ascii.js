/* jshint strict: true */

document.getElementById('fontOps').onchange = changeFontSize;
document.getElementById('animation').onchange = prepareAnimationArray;
document.getElementById('start').onclick = startAnimation;
document.getElementById('stop').onclick = stopAnimation;
document.getElementById('turbo').onclick = speedUpAnimation;

let animationArray = [];
let animationIntervalID;
let speed = 250;

toggleButtons("initial"); 

function changeFontSize() {
    const size = this.value;
    const textArea = document.getElementById("text");
    textArea.style.fontSize = parseInt(size) + 'pt';
}

function prepareAnimationArray() {
    const target = this.value;
    const textArea = document.getElementById("text");
    if(target !== "Blank"){
        animationArray = Animation[target].split("=====\n");
        toggleButtons('stop'); 
    }else{
        toggleButtons("initial");
    }

}

function startAnimation() {
    toggleButtons('start');
    const textArea = document.getElementById("text");
    let i =0;
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
    toggleButtons('stop');
    clearInterval(animationIntervalID);
}

function speedUpAnimation(){

    clearInterval(animationIntervalID);
    speed = (this.checked === true) ? 50 : 250;
    startAnimation();
}

function toggleButtons(clickedButton) {
    const stop = document.getElementById("stop");
    const start = document.getElementById("start");
   
    stop.disabled = (clickedButton === 'start') ? false : (clickedButton == 'stop') ? true : true;
    start.disabled = (clickedButton === 'start') ? true : (clickedButton == 'stop') ? false : true;
    
}

