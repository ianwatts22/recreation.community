// VIDEO
/* var video1 = "videos/website intro 2.mp4";
var video2 = "videos/website intro 2.mp4";
var video3 = "videos/website intro 2.mp4";
const videos = [video1, video2, video3];
var videonum = 1; */



const video = "videos/website intro 3.mp4";

// a video is an array (of frames?) so to reference 
function vid(video) {
  $("#video")[0].pause();
  $("#video").attr("src", video);
  $("#video")[0].load();
  $('#video')[0].play();
}

/* 
$('#video').bind('ended', function(){
  console.log(videos[videonum]);
  vid(videos[videonum]);
  // rads[videonum].checked = true;

  videonum++;
  if(videonum > 2){
    videonum = 0;
  }
});
 */

function toggleVid() {
  if($("#video")[0].paused){
    $('#video')[0].play();
  } else {
    $('#video')[0].pause();
  }
}

/* trying to get it to work for all of .main classes but can't figure it out, maybe cuz trying to lead a class list of a class?

  const mainClass = document.getElementsByTagName("main").classList;
  document.getElementsByTagName("main").classList.add("popup");
  */

function twentyOne() {
  const twentyOneQ = document.getElementById("21?").classList;
  const twentyOneY = document.getElementById("21y").classList;
  const twentyOneN = document.getElementById("21n").classList;
  twentyOneQ.toggle("hidden");
  twentyOneY.toggle("hidden");
  twentyOneN.toggle("hidden");
  blurBackground();
  toggleVid();
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