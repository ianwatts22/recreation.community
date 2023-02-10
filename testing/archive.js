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

// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––SHOPIFY––––––––––––––––––––––––––––––––––––
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

/* // import Client from 'shopify-buy'
// import Client from 'shopify-buy/index.umd'
// import { Client } from 'http://sdks.shopifycdn.com/js-buy-sdk/v2/latest/index.umd.min.js'

// initializing a client to return content
const client = ShopifyBuy.buildClient({
  domain: 'recreation-community.myshopify.com',
  storefrontAccessToken: 'bdfb42209264a720ddde5f9c3fe720b0'
})

// products by ID
const one = ''
const one_plus = ''
const two = '8086416130288'
const two_plus = '8105641410800'
const three = '8109160595696'
const three_plus = '8109161808112'
const plus = '8109167083760'

client.product.fetch(one).then((product) => {

})

// create empty checkout
client.checkout.create().then((checkout) => {

  console.log(checkout)
})

const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N='
const input = { customAttributes: [{ key: "MyKey", value: "MyValue" }] }

client.checkout.updateAttributes(checkoutId, input).then((checkout) => {

})

const lineItemsToAdd = [ 
  {
    variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTEwNjAyMjc5Mg==',
    quantity: 5,
    customAttributes: [{ key: "MyKey", value: "MyValue" }]
  }
]

// add an item to the checkout
client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((checkout) => {
  console.log(checkout.lineItems) // Array with one additional line item
})
 */