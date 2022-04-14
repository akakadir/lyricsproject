//lyrics.js v1.0.6


//css panels
const css = elmnts => document.head.appendChild(document.createElement("style")).innerHTML=elmnts;
//embed&playlist
css("embed{ width:315px;height:125px;border:none;border-radius:10px; }");
//log
css("#log{ width:319px;color:#fff;font-family:monospace;font-size:13px;background-color:#000;padding:-1px;border:2px solid #111;border-radius:12px; }");


//lyrics
var lyrics = [
//panel
'basaramam, sensiz yasayamam',
'zaten benimle hep yabancıydın',
'gerek yok artık aglamana',
'gece boyu dusunup yine uyuyamamak',
'teşekkür ederim her şey için',
'essitalopram, zihnim çok bitkin',
'bitti mi hikayemiz?',
'kimin için varsın senin için varken ben',
'eros okların yerinde kalsın',
'ne bir eksik ne bir fazla gibi',
'kafamdaki sesler, ne içsem dinmiyor',
'incelince kopmadık ki biz bi anda parçalandık',
'bir olmayı becerdik biz olmayı beceremedik',
'bok var gibi yüreğime düştün',
'bir defa daha yazsa bebeğim, bebeğim, bebeğim',
'özledim seni harbiden',
'belki de seni hala deli gibi seviyorumdur',
'öylece sevdiğim kadının, gidişini izledim',
'kediler ve sarkilar bize yeterli degil',
'artık daha az seviyorum seni, unutuyor gibi, ölüyor gibi',
'mutlu ol olduğun yerde eğlen kendince',
'mutluyum, inan. anladım bir şanstı bu',
'benimdin eskiden, evimdin eskiden',
'benim herkesi, o da benim herkesim',
'anladım ki herkes gibi bir gün gidersin',
'bu yol karanlık ve korktun biraz',
'ben nasıl bir adamım hiç sevilmemişim',
'ruhun özgür olur mu sence çıkınca bu etten kafesten?',
'gönül ister her gece seni',
'sev sen sevgili ekseninde sersefilim ben senin',
'yalnızken ve sana uzakta öyle soğuk, anlamsız ki her şey',
'alışabilirim kaybolmana vazgeçişin canımı yaksa da',
'içindeki ben hiç ölmesin',
'yine geldim sokağına, gece boyu yürümüşüm',
'yarıda bırakacak mecalim yok',
'senden bahsetmemiştin, en büyük tehlike senken',
'sigara izmarit olunca korkar mı sence hiç ateşten?',
'kimsin? nası geldin? beni buldun, geri gitme',
'yağmuru olacakken bulutun sen',
'gecenin köründe düşüyorsun aklıma birden',
'daha fazla kendini kandırmak yok',
'tükendiğimde ise izmarit gibi savurdun',
'yine de sarılırdım, belki sıkılırdım',
'sigarayı da seni de bırakırdım güya',
'tebrik ederim beni pes ettirdin',

];

var _l = lyrics[Math.floor(Math.random()*lyrics.length)];
$('.lyrics').html(_l);


//embed
function embd(a) {
var b = document.createElement('embed');
b.setAttribute('src', '//youtube.com/embed/' + a.dataset.id + '?rel=0&showinfo=0&autohide=1&modestbranding=1');
a.parentNode.replaceChild(b, a);}
function _embd() {
var _elmntspl = document.getElementsByClassName('embed');
for (var c = 0; c < _elmntspl.length; c++) {
var _vid = _elmntspl[c].dataset.id;
var a = document.createElement('a');
a.setAttribute('data-id', _vid);
var _embdthmb = document.createElement('img');
_embdthmb.src = '//cyka.ml/play.svg'.replace('ID', _vid);
a.appendChild(_embdthmb);
var bttn = document.createElement('a');
bttn.setAttribute('class', 'd');
a.appendChild(bttn);
a.onclick = function () {embd(this);};
_elmntspl[c].appendChild(a);}}
document.addEventListener('DOMContentLoaded', _embd);


//embed((random)ma playlist)
var _id = [
//panel
'ik-_7QOI-wc',
'x-TRzI6SRAA',
'YYykUhAj9RI',
'i6tMTcapuB0',
'MJWkjsYTJFQ',
'WwZopSY49Xk',
'2NGuB7xYNEo',
'lWuzlhAyjhk',
'xEhJsgxFHUo',
'gh14pGFsJ34',
'ZYYKHXqGgZg',
'BcRRmGLSZvk',
'clRdYNQNSnI',
'e26nfZ-tJv4',
'Lou8DLiPIQE',
'IOovS1B-Buw',
'b8ZuzitFlzc',
'fSK564Cyg5Y',
'n21G9MLvpI0',
'p7wDihyW5RM',
'FQpU3NY8s2k',
'aUU-MULd5Sw',
'th8f-Pm9no0',
'lEh4_hhZBvo',
'6DPn7bKfdEc',
'GgkiliZehuw',
'6Zu6ZvD6ink',
'oJ_NSPSBqNU',
'QBZYCeffywc',
'9n-Mr9a6RzE',
'vYBplpiQoZw',
'rWn32mcSu1w',
'lr6-Q-ZhejQ',
'3bfkyXtuIXk',
'mGr_5vbL80Y',
'XGWQXjyUip8',
'z4xDiY99MBw',
'4ZPuGxdDf_4',
'QLes-aBS0Ks',
'hx0d8hWvr4c',

];

var _m=Math.floor(Math.random() * _id.length);
var _e='<embed src="//www.youtube-nocookie.com/embed/'+_id[_m]+'?rel=0&showinfo=0&autohide=1&modestbranding=1"></embed>';
$('.random').html(_e);


//playlist
function embdpl(pl) {
var embdpl = document.createElement("embed");
embdpl.setAttribute("src","//youtube.com/embed/videoseries?list="+pl.dataset.id+"&rel=0&showinfo=0&autohide=1&modestbranding=1");
pl.parentNode.replaceChild(embdpl,pl);}
function _pl() {var pe = document.getElementsByClassName("playlist");
for (var a = 0; a < pe.length; a++) {var _pid = pe[a].dataset.id;
var pl = document.createElement("pl");
pl.setAttribute("data-id",_pid);
var thmb = document.createElement("img");
thmb.src = "//cyka.ml/play.svg";
pl.appendChild(thmb);
var btn = document.createElement("pl");
btn.setAttribute("class","_");
pl.appendChild(btn);
pl.onclick = function () {embdpl(this);};
pe[a].appendChild(pl);}}
document.addEventListener("DOMContentLoaded",_pl);


//log for embed
(function () {
if (!console) {
console = {};}
var old = console.log;
var logger = document.getElementById('log');
console.log = function (message) {
if (typeof message == 'object') {
logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message));}
else {logger.innerHTML += message;}}})();
//netspeed for embed
var testConnectionSpeed = {
imageAddr : "//upload.wikimedia.org/wikipedia/commons/a/a6/Brandenburger_Tor_abends.jpg",
downloadSize : 2707459,
run:function(mbps_max,cb_gt,cb_lt){
testConnectionSpeed.mbps_max = parseFloat(mbps_max) ? parseFloat(mbps_max) : 0;
testConnectionSpeed.cb_gt = cb_gt;
testConnectionSpeed.cb_lt = cb_lt;
testConnectionSpeed.InitiateSpeedDetection();},
InitiateSpeedDetection: function() {
window.setTimeout(testConnectionSpeed.MeasureConnectionSpeed, 1);},
result:function(){
var duration = (endTime - startTime) / 1000;
var bitsLoaded = testConnectionSpeed.downloadSize * 8;
var speedBps = (bitsLoaded / duration).toFixed(2);
var speedKbps = (speedBps / 1024).toFixed(2);
var speedMbps = (speedKbps / 1024).toFixed(2);
if(speedMbps >= (testConnectionSpeed.max_mbps ? testConnectionSpeed.max_mbps : 1) ){
testConnectionSpeed.cb_gt ? testConnectionSpeed.cb_gt(speedMbps) : false;}
else {testConnectionSpeed.cb_lt ? testConnectionSpeed.cb_lt(speedMbps) : false;}},
MeasureConnectionSpeed:function() {
var download = new Image();
download.onload = function () {
endTime = (new Date()).getTime();
testConnectionSpeed.result();}
startTime = (new Date()).getTime();
var cacheBuster = "?nnn=" + startTime;
download.src = testConnectionSpeed.imageAddr + cacheBuster;}}
testConnectionSpeed.run(1.5, function(mbps){
//panel
console.log('Id: '+_id[_m]+' / '+'NetSpeed: '+mbps+'Mbps')});


// last update 4/6/22 ~ 06:39