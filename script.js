"use strict";
function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.defer = true;
    document.body.appendChild(script);
}
// Load the scripts when needed
loadScript('https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js');
loadScript('https://vjs.zencdn.net/7.20.3/video.min.js');
//ELEMENTS
const tan = "#feebca";
const logo = $('#logo');
const sundial = $("#sundial");
const beDialed = $('#beDialed');
var vidElement = document.getElementById("video");
var video = $('#video');
var audio = $('#audio');
//VIDEO FUNCTIONALITY
const video1cdn = 'https://cdn.shopify.com/videos/c/o/v/e5033a19a09e495ab762ab5dbedb6bbe.mp4';
const video1 = "assets/videos/grinder demo.mp4";
const video2 = "assets/videos/grinder vibes.mp4";
const video1cdnMobile = "https://cdn.shopify.com/videos/c/o/v/ff36a632e008489297f22ba16a76a30b.mp4";
const video1mobile = "assets/videos/grinder demo mobile.mp4";
const video2mobile = "assets/videos/grinder vibes mobile.mp4";
var videos = [video1cdn, video1, video2];
var activeVideo = 0;
let currentVid;
function vid(video) {
    vidElement.src = video;
    console.log('source');
    currentVid = video;
    vidElement.load();
    vidElement.play();
    console.log('play');
}
//ON-READY
$(document).ready(function () {
    // audio.play() // ! apparently not a function?
    if ($(window).width() < 640) {
        videos = [video1cdnMobile, video1mobile, video2mobile];
        appQR.remove();
        sundial.hide();
        beDialed.hide();
    }
    vidElement.src = videos[activeVideo];
    currentVideo = videos[activeVideo];
});
// JQuery: vidElement.onended = nextVid(), would need to be object instead of DOM element
vidElement.addEventListener('ended', nextVid);
function nextVid() {
    activeVideo == videos.length - 1 ? activeVideo = 0 : activeVideo += 1;
    vid(videos[activeVideo]);
}
video.click(() => toggleVid());
function toggleVid() { vidElement.paused ? vidElement.play() : vidElement.pause(); }
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––BUYING–––––––––––––––––––––––––––––––––––––
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
const description = $('#description');
const description_text = $('#description > p');
const description_header = $('#description > h2');
const description_disclaimer = $('#description > p > a');
const buyButton = $('#buyButton');
const btnContainer = $("#btnContainer");
const oneButton = $('#one');
const twoButton = $('#two');
const threeButton = $('#three');
const buttons = [oneButton, twoButton, threeButton];
let lastButton;
// create some type of media file? although ideally would just get from Shopify (as backend)
// header, description, price, image/video, 3D model, UGC?
const one = {
    'header': 'ONE-PIECE',
    'description': 'Your trusty sidekick. Everything you need in the smoothest package yet.<br><ul><li>light as a feather</li><li>ample storage</li><li>airtight</li></ul>',
    'video': '',
    'link': '',
    'button': oneButton,
    'price': '$29'
};
const two = {
    'header': 'COMPACT',
    'description': 'Elegant, Portable, Storable',
    //'description': 'Fully featured; as portable as possible. This ain\'t your grandpa\'s two-piece. <br><ul><li>top storage</li><li>no-gunk guide-ring</li><li>pocket sized</li></ul>',
    'video': video1cdn,
    'link': 'https://recreation-community.myshopify.com/66077622512/checkouts/cc54e961365c315f73dc92c436bd95a7',
    'button': twoButton,
    'price': '$69'
};
const three = {
    'header': 'CLASSIC',
    'description': 'The grinder you thought you knew. Our no-gunk friction ring <br><ul><li>portable container</li><li>top storage</li><li>shareability</li></ul>',
    'video': 'assets/videos/plus demo.mp4',
    'link': 'https://recreation-community.myshopify.com/66077622512/checkouts/53f976204e77cdb828fb2c37b7bbda30',
    'button': threeButton,
    'price': '$99'
};
products = [one, two, three];
let currentProduct;
explore(two);
twoButton.click(() => explore(two));
threeButton.click(() => explore(three));
$('#disclaimer').hide();
function explore(product) {
    if (lastButton == null) {
        lastButton = product.button;
        buyButton.html(`BUY ${product.price}`);
    }
    if (product == three) {
        vidElement.pause();
        video.css("filter", "blur(6px)");
        buyButton.html('WAITLIST');
        $('#disclaimer').hide();
    }
    else {
        //if (currentVid != product.video) vid(product.video)
        vid(product.video);
        video.css("filter", "initial");
        buyButton.html(`<a href="${product.link}" class="branded" style="text-decoration:none" target="_blank" onclick="vidElement.pause()">BUY ${product.price}</a>`);
        //description_header.html(product.header)
        description_text.html(product.description);
        video.show();
    }
    currentProduct = product;
    description_header.html(product.header);
    description_text.html(product.description);
    buttons.forEach(button => button.css("background-color", tan));
    buttons.forEach(button => button.children().css("color", "#7196c9"));
    product.button.css("background-color", "#7196c9");
    product.button.children().css("color", tan);
}
$('.klaviyo_form_trigger').click(() => {
    if (currentProduct == three) {
        window._klOnsite = window._klOnsite || [];
        window._klOnsite.push(['openForm', 'Wef6xU']);
    }
});
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––POP-UPS––––––––––––––––––––––––––––––––––––
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
const appButton = $('#appButton'), appQR = $('#appQR');
appButton.mouseenter(() => {
    appQR.show();
    //video[0].pause()
});
appButton.mouseleave(() => {
    appQR.hide();
    //video[0].play()
});
appButton.click(() => window.open('https://apps.apple.com/us/app/consume-alcohol-tracker/id1633718776', '_blank'));
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––3D/AR––––––––––––––––––––––––––––––––––––––
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
/*
const render = $('#render'), modelViewer = $("model-viewer")
const x = 0.1, y = 0.1, z = 0.1
// trying to scale down 50%, not working
const scale = () => {
  modelViewer.scale = `${x} ${y} ${z}`
  modelViewer.updateFraming()
  console.log("scale")
}
if (modelViewer.loaded) scale()

const reality = $('#reality')
reality.click(() => {
  video.toggle()
  modelViewer.toggle()
  console.log("toggle")
  vidElement.pause()
  video.is(":hidden") ? reality.html("reality") : reality.html("virtual")
})
*/
// AGE VERFIICATION
function setCookie(name, value, days = 180) {
    let expires = '';
    if (days) {
        const date = '; expires=' + new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
        expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
}
function getCookie(name) {
    const nameEQ = name + '=', cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(nameEQ) === 0)
            return cookie.substring(nameEQ.length);
    }
    return null;
}
document.addEventListener('DOMContentLoaded', () => {
    if (getCookie('age_verified')) {
        age_verified();
    }
});
function age_verified() { $('#ageCheck').hide(); $('#fullBlur').hide(); vidElement.play(); }
vidElement.pause();
$("#21y").click(() => {
    age_verified();
    setCookie('age_verified', 'true', 180);
});
$("#21n").click(() => window.open('https://media.tenor.com/ZZEl8q6eRaoAAAAC/shame-game-of-thrones.gif', '_self'));



// SHOPIFY
const client = ShopifyBuy.buildClient({
    domain: 'recreation-community.myshopify.com',
    storefrontAccessToken: 'bdfb42209264a720ddde5f9c3fe720b0',
});
// Fetch all products in your shop
client.product.fetchAll().then((products) => { console.log(products); });
const productId = 'gid://shopify/Product/7857989384';
console.log(productId);
// client.product.fetch(productId).then((product) => {
//   console.log(product);
// });
// Fetch a single product by Handle
const handle = 'product-handle';
client.product.fetchByHandle(handle).then((product) => {
    console.log(product);
});
