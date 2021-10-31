window.onload = addEvents;



function addEvents() {
    const btnBigger = document.getElementById("btnBigger");
    const chkBling = document.getElementById("chkBling");
    const txtInput = document.getElementById("txtInput");

    btnBigger.onclick = updateTextStyle;
    chkBling.onchange = popAlert;
}

function updateTextStyle() {
    setInterval(updateSize, 500);
}

function updateSize(){
    if (txtInput.style.fontSize !== "") {
        let size = parseInt(txtInput.style.fontSize);
        let newSize = size + 2;

        txtInput.style.fontSize = newSize + "pt";

        setInterval()
    }
    else {
        txtInput.style.fontSize = "12pt";
    }
}

function popAlert() {
    if (chkBling.checked) {
        txtInput.style.fontWeight = "bold";
        txtInput.style.color = "green";
        txtInput.style.textDecoration = "underline";
        document.body.style.backgroundImage = "url('http://thefader-res.cloudinary.com/images/w_1440,c_limit,f_auto,q_auto:best/Fader_EditorialIllustration_LilWayneWeek_BlingBlingOralHistory-Square-1440x1440_ahhixk/bling-bling-oral-history-lil-wayne-bg-turk-birdman-mannie-fresh.jpg')";
    }
    else {
        txtInput.style.fontWeight = "normal";
        txtInput.style.color = "black";
        txtInput.style.textDecoration = "none";
        document.body.style.backgroundImage = "";
    }
}
