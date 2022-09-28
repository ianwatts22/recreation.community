// VIDEO
var vidElement = document.getElementById("video");
const video1 = "assets/videos/grinder demo.mp4";
const video2 = "assets/videos/grinder vibes.mp4";
const video1mobile = "assets/videos/grinder demo mobile.mp4";
const video2mobile = "assets/videos/grinder vibes mobile.mp4";
var videos = [video1, video2];
var activeVideo = 0;

// source: https://stackoverflow.com/questions/53701660/change-html5-video-source-for-mobile
$(document).ready(function () {   // detects when the document is ready
  var screenWidth = $(window).width();
  if (screenWidth < 600) {
    videos = [video1mobile, video2mobile];
    vidElement.src = videos[0];
  }
  // http://detectmobilebrowsers.com/
  /*   if (jQuery.browser.mobile) {
      videos = [video1mobile, video2mobile];
      vidElement.src = videos[0];
      vidElement.playbackRate = 2;
    } */
});

// a video is an array (of frames?) so to reference 
function vid(video) {
  /* $("#video")[0].pause();
  $("#video").attr("src", video);
  $("#video")[0].load();
  $('#video')[0].play(); */

  // vidElement.pause();
  vidElement.src = video;
  vidElement.load();
  vidElement.play();
}

// vidElement.click(function (e) {
//   toggleVid();
// });

vidElement.addEventListener('ended', function (e) {
  // update the active video index
  console.log("ended");

  activeVideo += 1;
  if (activeVideo == videos.length) {
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
  console.log("toggleVid");
  if (vidElement.paused) {
    vidElement.play();
  } else {
    vidElement.pause();
  }
}

$('#TWO-buy').click(function () {
  window.open('https://recreation-community.myshopify.com/66077622512/checkouts/cc54e961365c315f73dc92c436bd95a7', '_blank');
});

$('#main1').click(function () {
  toggleVid();
});

// 21+
function twentyOne() {
  const twentyOne = document.getElementById("21").classList;
  twentyOne.toggle("hidden");
  blurBackground();
  toggleVid();
}

// APP
const appQRIcon = document.getElementById("appQRIcon");
const appQR = document.getElementById("appQR").classList;
appQRIcon.onmouseenter = function () {
  appQR.toggle("hidden");
  toggleVid();
};
appQRIcon.onmouseleave = function () {
  appQR.toggle("hidden");
  toggleVid();
};


// FULL SCREEN BLURRING?
function blurBackground() {
  const mainClass = document.getElementById("main1").classList;
  mainClass.toggle("popup");
}

function clickawayBG() {
  const bgButton = document.getElementById("bgButton").classList;
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
var nextVidElement = document.createelement
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