// VIDEO

var vidElement = document.getElementById('video');  //HTML video element
var nextVidElement = document.createelement
const video1 = "videos/grinder demo.mp4";
const video2 = "videos/grinder vibes.mp4";
const videos = [video1, video2];
var activeVideo = 0;


// a video is an array (of frames?) so to reference 
function vid(video) {
  /* $("#video")[0].pause();
  $("#video").attr("src", video);
  $("#video")[0].load();
  $('#video')[0].play(); */

  vidElement.pause();
  vidElement.src = video;
  vidElement.load();
  vidElement.play();

}

vidElement.addEventListener('ended', function(e) {
  // update the active video index
  activeVideo += 1;
  if(activeVideo == videos.length){
    activeVideo = 0;
  }

  vid(videos[activeVideo]);
});


/* $('#video').bind('ended', function() {
  vid(videos[activeVideo]);          // playing video
  
  activeVideo++;
  if(activeVideo > videos.length - 1) {
    activeVideo = 0;
  }
}); */

function toggleVid() {
  /* if($("#video")[0].paused){
    $('#video')[0].play();
  } else {
    $('#video')[0].pause();
  } */

  if(vidElement.paused){
    vidElement.play();
  } else {
    vidElement.pause();
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



// (source: https://stackoverflow.com/questions/52514522/html5-video-how-to-seamlessly-play-several-videos-and-then-loop-the-sequence )
/* 
var videoContainer = document.getElementById('main1');
nextVideo;
videoObjects = [document.createElement('video'), document.createElement('video')];
nextActiveVideo = 0;

videoObjects[0].inx = 0; //set index
videoObjects[1].inx = 1;

initVideoElement(videoObjects[0]);
initVideoElement(videoObjects[1]);

videoObjects[0].src = videos[nextActiveVideo];
videoContainer.appendChild(videoObjects[0]);

videoObjects[1].style.display = 'none';
videoContainer.appendChild(videoObjects[1]);

function initVideoElement(video) {
    video.playsinline = true;
    video.muted = false;
    video.preload = 'auto'; //WARNING: autoplay deletes preload, loadedmetadata gives endless loop

    video.onplaying = function(e) {
        //select next index. If is equal videos.length then it is 0
        nextActiveVideo = ++nextActiveVideo % videos.length;

        //replace the video elements against each other:
        if(this.inx == 0) {
            nextVideo = videoObjects[1]; }
        else {
            nextVideo = videoObjects[0]; }

        nextVideo.src = videos[nextActiveVideo];
        nextVideo.pause();
    };

    video.onended = function(e) {
        this.style.display = 'none';
        nextVideo.style.display = 'block';
        nextVideo.play();
    };
} 
*/