

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
  vidElement.src = video;
  vidElement.load();
  vidElement.play();
}

// update the active video index
vidElement.addEventListener('ended', function (e) {
  console.log("ended");

  activeVideo += 1;
  if (activeVideo == videos.length) {
    activeVideo = 0;
  }

  vid(videos[activeVideo]);
});

function toggleVid() {
  console.log("toggleVid");
  if (vidElement.paused) {
    vidElement.play();
  } else {
    vidElement.pause();
  }
}

// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––SHOPIFY––––––––––––––––––––––––––––––––––––
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// import Client from 'shopify-buy';
// import Client from 'shopify-buy/index.umd';
//  type="module" src='http://sdks.shopifycdn.com/js-buy-sdk/v2/latest/index.umd.min.js"

// import Client from 'shopify-buy';
// import { Client } from 'http://sdks.shopifycdn.com/js-buy-sdk/v2/latest/index.umd.min.js'

// initializing a client to return content
/* const client = Client.buildClient({
  domain: 'recreation-community.myshopify.com',
  storefrontAccessToken: 'bdfb42209264a720ddde5f9c3fe720b0'
});

// products by ID
const one = '';
const one_plus = '';
const two = '8086416130288';
const two_plus = '8105641410800';
const three = '8109160595696';
const three_plus = '8109161808112';
const plus = '8109167083760';

client.product.fetch(one).then((product) => {

});


// create an empty checkout
client.checkout.create().then((checkout) => {

  console.log(checkout);
});

const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
const input = {customAttributes: [{key: "MyKey", value: "MyValue"}]};

client.checkout.updateAttributes(checkoutId, input).then((checkout) => {

});

const lineItemsToAdd = [
  {
    variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTEwNjAyMjc5Mg==',
    quantity: 5,
    customAttributes: [{key: "MyKey", value: "MyValue"}]
  }
];

// add an item to the checkout
client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((checkout) => {
  console.log(checkout.lineItems); // Array with one additional line item
}); */


// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––BUYING–––––––––––––––––––––––––––––––––––––
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const TWObuy = document.getElementById("TWO-buy");

TWObuy.onclick = function () {
  window.open('https://recreation-community.myshopify.com/66077622512/checkouts/cc54e961365c315f73dc92c436bd95a7', '_blank');
}

$('#TWO-buy').click(function () {
  window.open('https://recreation-community.myshopify.com/66077622512/checkouts/cc54e961365c315f73dc92c436bd95a7', '_blank');
});

$('#main1').click(function () {
  toggleVid();
});

// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––POP-UPS––––––––––––––––––––––––––––––––––––
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// 21+
function twentyOne() {
  const twentyOne = document.getElementById("21").classList;
  twentyOne.toggle("hidden");
  toggleVid();
  console.log('click');
  document.getElementById("main1").classList.toggle("popup");   //blur background
}

// APP
/* const appQRIcon = document.getElementById("appQRIcon");
const appQR = document.getElementById("appQR").classList;
appQRIcon.onmouseenter = function () {
  appQR.toggle("hidden");
  toggleVid();
};
appQRIcon.onmouseleave = function () {
  appQR.toggle("hidden");
  toggleVid();
}; */


// const appQRIcon = document.getElementById("appQRIcon");
// const appQR = document.getElementById("appQR").classList;
const appQR = document.getElementsByClassName("appQR");
const app = document.getElementsByClassName("app").classList;
app.onmouseenter = function () {
  appQR.toggle("hidden");
  toggleVid();
  console.log('mouse enter');
};
app.onmouseleave = function () {
  appQR.toggle("hidden");
  console.log('mouse leave');
  toggleVid();
};
app.onmouseclick = function () {
  console.log('mouse click');
  window.open('https://apps.apple.com/us/app/consume-alcohol-tracker/id1633718776', '_blank');
}


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