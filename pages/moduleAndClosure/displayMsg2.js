var rudyTimer = (function () {
    timer = null; 
    
    var delayMsg2 = function() {
        if (timer === null) {
            timer = setInterval(rudy, 1000);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }

    var rudy = function() { 
        document.getElementById("output").innerHTML += "Rudy!";
    }

    return {
        run : delayMsg2
    };
})();
