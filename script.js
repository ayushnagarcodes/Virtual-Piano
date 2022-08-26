let whiteKeys = document.querySelector(".white-keys").children;
let blackKeys = document.querySelector(".black-keys").children;

function changeWhiteKeys(index) {
    whiteKeys[index].setAttribute("id", "active-white-keys");
    setTimeout(function() {
        whiteKeys[index].removeAttribute("id");
    }, 300);
}

function changeBlackKeys(index) {
    blackKeys[index].setAttribute("id", "active-black-keys");
    setTimeout(function() {
        blackKeys[index].removeAttribute("id");
    }, 300);
}


document.addEventListener("keydown", function (event) {
    switch (event.code) {
        // White keys
        case "KeyA":
            let audioA = new Audio("Audio/A.mp3");
            changeWhiteKeys(0);
            audioA.play();
            break;
        case "KeyS":
            let audioS = new Audio("Audio/S.mp3");
            audioS.play();
            changeWhiteKeys(1);
            break;
        case "KeyD":
            let audioD = new Audio("Audio/D.mp3");
            audioD.play();
            changeWhiteKeys(2);
            break;
        case "KeyF":
            let audioF = new Audio("Audio/F.mp3");
            audioF.play();
            changeWhiteKeys(3);
            break;
        case "KeyG":
            let audioG = new Audio("Audio/G.mp3");
            audioG.play();
            changeWhiteKeys(4);
            break;
        case"KeyH":
            let audioH = new Audio("Audio/H.mp3");
            audioH.play();
            changeWhiteKeys(5);
            break;
        case"KeyJ":
            let audioJ = new Audio("Audio/J.mp3");
            audioJ.play();
            changeWhiteKeys(6);
            break;
        // Black keys
        case"KeyW":
            let audioW = new Audio("Audio/W.mp3");
            audioW.play();
            changeBlackKeys(0);
            break;
        case"KeyE":
            let audioE = new Audio("Audio/E.mp3");
            audioE.play();
            changeBlackKeys(1);
            break;
        // skipping index -> 2 for hidden element
        case"KeyT":
            let audioT = new Audio("Audio/T.mp3");
            audioT.play();
            changeBlackKeys(3);
            break;
        case"KeyY":
            let audioY = new Audio("Audio/Y.mp3");
            audioY.play();
            changeBlackKeys(4);
            break;
        case"KeyU":
            let audioU = new Audio("Audio/U.mp3");
            audioU.play();
            changeBlackKeys(5);
            break;
        default:
            break;
    }
});