let myClickMe = (function(){
    let click = function(){
        alert("You Clicked Me!" + Infinity);
    }

    return {
        clickMe: click
    }
})();
