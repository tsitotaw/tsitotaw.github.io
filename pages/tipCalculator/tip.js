let tipCalculator = (function(){
    
    function isFormValid(percentage){
        return (percentage > 99 || percentage < 0) ? false : true;
    }

    function toggleVisibility(visibility){
        document.getElementById("invalidTip").style.visibility = visibility;
        document.getElementById("total").innerHTML="";
    }

    let calculateTip = function(){
        let total = parseFloat(document.getElementById("subtotal").value);
        let percentage = parseFloat(document.getElementById("tip").value);
        
        toggleVisibility("hidden");
        if(!isFormValid(percentage)){
            toggleVisibility("visible");
            return false;
        }

        let tipAmount = parseFloat(total)*parseFloat(percentage)/100;
        document.getElementById("total").innerHTML = tipAmount;
    };



    return {
        calcTip: calculateTip
    }
    
})();