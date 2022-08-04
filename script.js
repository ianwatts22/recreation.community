/* function checkPswd() {
  var confirmPassword = "turtle";
  var password = document.getElementById("pswd").value;
  if (password == confirmPassword) {
      window.location="grinder.html";
  }
  else{
      alert("Passwords do not match.");
  }
} */

var video1 = "videos/website intro 2.mp4";
var video2 = "videos/website intro 2.mp4";
var video3 = "videos/website intro 2.mp4";
const videos = [video1, video2, video3];
var videonum = 1;

var rad1 = document.getElementById("rad1");
var rad2 = document.getElementById("rad2");
var rad3 = document.getElementById("rad3");
const rads = [rad1, rad2, rad3];

var label1 = document.getElementById("label1");
var label2 = document.getElementById("label2");
var label3 = document.getElementById("label3");
const labels = [label1, label2, label3];

function vid(video) {
  label1.style.background = "hsla(0, 0%, 80%, .0)";
  label2.style.background = "hsla(0, 0%, 80%, .0)";
  label3.style.background = "hsla(0, 0%, 80%, .0)";
  $("#video")[0].pause();
  $("#video").attr("src", video);
  $("#video")[0].load();
  $('#video')[0].play();
}

$('#video').bind('ended', function(){
  console.log(videos[videonum]);
  vid(videos[videonum]);
  rads[videonum].checked = true;
  label1.style.background = "hsla(0, 0%, 80%, .0)";
  label2.style.background = "hsla(0, 0%, 80%, .0)";
  label3.style.background = "hsla(0, 0%, 80%, .0)";
  labels[videonum].style.background = "hsla(0, 0%, 80%, .15)";
  videonum++;
  if(videonum > 2){
    videonum = 0;
  }
});

function toggleVid() {
  if($("#video")[0].paused){
    $('#video')[0].play();
  } else {
    $('#video')[0].pause();
  }
}

// popup
let qrCode = document.getElementsByClassName("qrCode");
let popup = document.getElementsByClassName("popup");


/* function toggleQR() {
  if (qrCode.classList.contains("popup")) {
    qrCode.classList.remove("popup");
    blurBackground();
  } else {
    qrCode.classList.add("popup");
    blurBackground();
  }
}
 */

// function addBackgroundBlur() {

// }

/* trying to get it to work for all of .main classes but can't figure it out, maybe cuz trying to lead a class list of a class?

  const mainClass = document.getElementsByTagName("main").classList;
  document.getElementsByTagName("main").classList.add("popup");
  */

function twentyOne () {
  const twentyOneQ = document.getElementById("21?").classList;
  const twentyOneY = document.getElementById("21y").classList;
  const twentyOneN = document.getElementById("21n").classList;
  twentyOneQ.toggle("hidden");
  twentyOneY.toggle("hidden");
  twentyOneN.toggle("hidden");
  blurBackground();
}

function blurBackground() {
  const mainClass = document.getElementById("main1").classList;

  mainClass.toggle("popup");
}

function clickawayBG() {
  const bgButton = document.getElementById("bgButton").classList;
  
  // bgButton.toggle("visible");
  bgButton.toggle("disabled");
}

function showQR() {
  const qrCode = document.getElementById("qrCode").classList;
  qrCode.toggle("hidden");
  blurBackground();
  clickawayBG();
}