// Add js here.
var video = document.getElementById("videoplayer");

window.onload = function(){
    video.load();
    video.autoplay = false;
    video.loop = false;
    video.load();
};

var playbutton = document.getElementById("play");
playbutton.addEventListener("click", play);
function play() {
    video.play();
}

var pausebutton = document.getElementById("pause");
pausebutton.addEventListener("click", pause);
function pause() {
    video.pause();
}

var slowdown = document.getElementById("slower");
slowdown.addEventListener("click", slow);
function slow() {
    let r = video.playbackRate;
    if (r == 0.5){
        alert("Video is at slowest speed!");
    }
    else{
        r = r*0.5;
    }
    video.playbackRate = r;
}

var speedup = document.getElementById("faster");
speedup.addEventListener("click", fast);
function fast() {
    let r = video.playbackRate;
    if (r == 2){
        alert("Video is at fastest speed!");
    }
    else{
        r = r*2;
    }
    video.playbackRate = r;
}

var skipahead = document.getElementById("skip");
skipahead.addEventListener("click", skip);
function skip() {
    let s = video.currentTime;
    if (video.ended){
        s = 0;
    }
    else{
        s = s + 15;
    }
    video.currentTime = s;
}

var mutebutton = document.getElementById("mute");
mutebutton.addEventListener("click", mute);
function mute() {
    if (video.muted){
        video.muted = false;
        mutebutton.textContent = "Mute";
    } else{
        video.muted = true;
        mutebutton.textContent = "Unmute";
    }
}

var slider = document.getElementById("slider");
slider.addEventListener("mouseup", setvol);
function setvol(){
    var currentvol = slider.value;
    video.volume = currentvol*0.01;
    var vol = document.getElementById("volume");
    vol.textContent = currentvol + "%";
}












