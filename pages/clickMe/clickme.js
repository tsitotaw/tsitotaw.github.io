let myClickMe = (function(){
    let click = function(){
        alert("You Clicked Me!");
    }

    return {
        clickMe: click
    }
})();
