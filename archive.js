// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––EXPERIMENTAL–––––––––––––––––––––––––––––––––
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

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