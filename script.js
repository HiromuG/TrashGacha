let btnl = document.getElementById("btnl");
let btnr = document.getElementById("btnr");
let btnAudio = document.getElementById("btnAudio");
btnAudio.volume = 0.2;
let gBefore = document.getElementById("gBefore");
let gAfter = document.getElementById("gAfter");
let gachaResult = document.getElementById("gachaResult");
let close = document.getElementById("close");
let video = document.getElementById("video");
let audio = document.getElementById("audio");
audio.volume = 0.5;
let quartz = document.getElementById("quartz");

let closeVideo;
function videoClose(){
    clearTimeout(closeVideo);
    closeVideo = setTimeout(function(){
    video.style.display="none";
}, 5000)
};

let showgAfter;
function gAfterShow(){
    clearTimeout(showgAfter);
    gBefore.style.display="none";
    gAfter.style.display="none";
    showgAfter = setTimeout(function(){
        gAfter.style.display="flex";
    },5000);
}
// function closeVideo(){
//     video.style.display="none";
// }

function playMusic() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
close.addEventListener("click",function(){
    gBefore.style.display="flex";
    video.style.display="none";
})
btnl.addEventListener("click",function(){
    btnAudio.play();
    video.style.display="flex";
    video.play();
    getRandomSingle();
    spendQuartz(3);
    videoClose();
    gAfterShow();
})
btnr.addEventListener("click",function(){
    btnAudio.play();
    video.style.display="flex";
    video.play();
    getRandomTen();
    spendQuartz(30);
    videoClose();
    gAfterShow();
})

// let itemsWeight = 
//     [0.8,1.0,
//     2.8,4.0,
//     1.5,3.0,
//     4.0,11.9,
//     10,61]
function gacha(){
    let rand = Math.random()*100;
    let puStar5Ser = document.createElement("h4");
        puStar5Ser.style.color = "yellow";
        puStar5Ser.style.textAlign = "center"
        puStar5Ser.append("PU★★★★★サーヴァント");
    let Star5Ser = document.createElement("h4");
        Star5Ser.style.color = "yellow";
        Star5Ser.style.textAlign = "center"
        Star5Ser.append("★★★★★サーヴァント");
        let puStar5Rei = document.createElement("h4");
            puStar5Rei.style.color = "orange";
            puStar5Rei.style.textAlign = "center"
            puStar5Rei.append("PU★★★★★礼装");
        let Star5Rei = document.createElement("h4");
            Star5Rei.style.color = "orange";
            Star5Rei.style.textAlign = "center"
            Star5Rei.append("PU★★★★★礼装");
                let puStar4Ser = document.createElement("h4");
                    puStar4Ser.style.color = "yellow";
                    puStar4Ser.style.textAlign = "center"
                    puStar4Ser.append("PU★★★★サーヴァント");
                let Star4Ser = document.createElement("h4");
                    Star4Ser.style.color = "yellow";
                    Star4Ser.style.textAlign = "center"
                    Star4Ser.append("★★★★サーヴァント");
                    let puStar4Rei = document.createElement("h4");
                        puStar4Rei.style.color = "orange";
                        puStar4Rei.style.textAlign = "center"
                        puStar4Rei.append("PU★★★★礼装");
                    let Star4Rei = document.createElement("h4");
                        Star4Rei.style.color = "orange";
                        Star4Rei.style.textAlign = "center"
                        Star4Rei.append("★★★★礼装");
                        let Star3Ser = document.createElement("h4");
                            Star3Ser.style.textAlign = "center"
                            Star3Ser.append("★★★以下サーヴァント");
                        let Star3Rei = document.createElement("h4");
                            Star3Rei.style.textAlign = "center"
                            Star3Rei.append("★★★以下礼装");
    if(rand <= 0.8){
        gachaResult.appendChild(puStar5Ser);
    }else if(rand > 0.8 && rand <= 1.8){
        gachaResult.appendChild(Star5Ser);
    }else if(rand > 1.8 && rand <= 4.6){
        gachaResult.appendChild(puStar5Rei);
    }else if(rand > 4.6 && rand <= 8.6){
        gachaResult.appendChild(Star5Rei);
    }else if(rand > 8.6 && rand <= 10.1){
        gachaResult.appendChild(puStar4Ser);
    }else if(rand > 10.1 && rand <= 13.1){
        gachaResult.appendChild(Star4Ser);
    }else if(rand > 13.1 && rand <= 17.1){
        gachaResult.appendChild(puStar4Rei);
    }else if(rand > 17.1 && rand <= 29){
        gachaResult.appendChild(Star4Rei);
    }else if(rand > 29 && rand <= 39){
        gachaResult.appendChild(Star3Ser);
    }else if(rand > 39 && rand <= 100){
        gachaResult.appendChild(Star3Rei);
    }
}
function getRandomSingle(){
    gachaResult.innerHTML="";
    gacha();
};
function getRandomTen(){
    gachaResult.innerHTML="";
    for(let i=1;i<=11;i++){
        gacha();
    }
};
function spendQuartz(s){
    quartz.innerHTML = Number.parseInt(quartz.innerHTML)-s;
};