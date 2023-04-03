// 歌曲變數 宣告
play1=document.getElementById("music_play1");
play2=document.getElementById("music_play2");
play3=document.getElementById("music_play3");
play4=document.getElementById("music_play4");
play5=document.getElementById("music_play5");
// play6=document.getElementById("music_play6");
musicList = [play1, play2, play3, play4, play5];
musicListName = ["Aimer - 残響散歌", "LiSA - 炎", "LiSA - 紅蓮華", "Mezase Pokémon Master -with my friends", "YOASOBI - 群青"];
var index =0;
// 點擊播放
function start() {
var player = musicList[index];
var song = musicListName[index];
// 該首歌曲時間長度
var dur = player.duration;
var s1 = parseInt(dur % 60);
var m1 = parseInt((dur/ 60) % 60);
document.getElementById("dur_time").innerHTML = "<font color='#0dcaf0' size='5'>" + m1 + "分 " + s1 + "秒 "+"</font>";
// 顯示已播放的時間長度
setInterval("calTime()", 1000);
// 跑馬燈 顯示 正播放的 歌曲 名稱
info.innerHTML = "現在正在播放 " + song;
player.play();
}
// 點擊暫停
function pause() {
var player = musicList[index];
player.pause();
info.innerHTML = "現在暫停播放 "
}
// 點擊播放下一首 /前一首
function next() {
var player = musicList[index];
player.pause();
index += 1;
if(index >= musicList.length) {
index=0;
}
var player = musicList[index];
start();
}
function previous() {
var player = musicList[index];
player.pause();
index -= 1;
if(index < 0) {
index= musicList.length - 1;
}
var player = musicList[index];
start();
}
// 調整音量大小
function upVolume() {
    var player = musicList[index];
    var volume = player.volume + 0.1;
    if(volume >=1 ){
    volume = 1 ;
    }
    player.volume = volume;
    start();
    }
    function downVolume() {
    var player = musicList[index];
    var volume = player.volume - 0.1;
    if(volume <= 0 ){
    volume = 0 ;
    }
    player.volume = volume;
    start();
    }
    function calTime(){
    var player = musicList[index];
    var cur = player.currentTime;
    var s2 = parseInt(cur % 60);
    var m2 = parseInt((cur / 60) % 60);
    document.getElementById("cur_time").innerHTML = "<font color='#dc3545' size='5'>" + m2 + "分" + s2 + "秒 "+"</font>";
    }