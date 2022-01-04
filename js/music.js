var mySong = document.getElementById("mySong");
var btn = document.getElementById('play');

btn.onclick = function() {
    if(mySong.paused) {
        mySong.play();
        btn.src = "img/icon/stop.svg";
    } else {
        mySong.pause();
        btn.src = "img/icon/play.svg";
    }
}