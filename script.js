//ELEMENTS
const tan = "#feebca"

// VIDEOS
var vidElement = document.getElementById("video")
var video = $('#video')
const videoArray = {
  "vibes": [],
  "one": [],
  "two": [],
  "three": []
}
const video1 = "assets/videos/grinder demo.mp4"
const video2 = "assets/videos/grinder vibes.mp4"
const video1mobile = "assets/videos/grinder demo mobile.mp4"
const video2mobile = "assets/videos/grinder vibes mobile.mp4"
var videos = [video1, video2]
var activeVideo = 0
let currentVid;

$(document).ready(function () {
  if ($(window).width() < 767) {
    videos = [video1mobile, video2mobile]
    appQR.remove()
  }
  vidElement.src = videos[activeVideo]
  currentVideo = videos[activeVideo]
})

function vid(video) {
  vidElement.src = video
  currentVid = video
  vidElement.load()
  vidElement.play()
}

video.click(toggleVid)

// JQuery: vidElement.onended = nextVid(), would need to be object instead of DOM element
vidElement.addEventListener('ended', nextVid)
function nextVid() {
  activeVideo == videos.length - 1 ? activeVideo = 0 : activeVideo += 1
  vid(videos[activeVideo])
}

function toggleVid() { vidElement.paused ? vidElement.play() : vidElement.pause()}

// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––3D/AR––––––––––––––––––––––––––––––––––––––
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const modelViewer = $("model-viewer")
const x = 0.1
const y = 0.1
const z = 0.1
// trying to scale down 50%, not working
const scale = () => {
  modelViewer.scale = `${x} ${y} ${z}`
  modelViewer.updateFraming()
  console.log("scale")
}
if(modelViewer.loaded) scale()

const reality = $('#reality')
reality.click(() => {
  video.toggle()
  modelViewer.toggle()
  console.log("toggle")
  vidElement.pause()
  video.is(":hidden") ? reality.html("reality") : reality.html("virtual")
})

// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––BUYING–––––––––––––––––––––––––––––––––––––
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const description = $('#description')
const description_text = $('#description > p')
const description_header = $('#description > h2')
const buyButton = $('#buyButton')
const btnContainer = $("#btnContainer")


const twoButton = $('#two')
const threeButton = $('#three')
const TWOplusbutton = $('#TWO+_buy')
const buttons = [twoButton, threeButton, TWOplusbutton]
let lastButton;

// create some type of media file? although ideally would just get from Shopify (as backend)
// header, description, price, image/video, 3D model, UGC?
const two = {
  'header': 'TWO-PIECE',
  'description': 'Never out of place; fully featured; as portable as possible. This ain\'t your grandpa\'s two-piece. <br><ul><li>top storage</li><li>pocket sized</li><li>no-gunk guide-ring</li></ul>',
  'video' : 'assets/videos/plus demo.mp4',
  'link' : 'https://recreation-community.myshopify.com/66077622512/checkouts/cc54e961365c315f73dc92c436bd95a7',
  'button' : twoButton
}
const three = {
  'header': 'THREE-PIECE',
  'description': '<br>The grinder you thought you knew. The freedom  Our no-gunk friction ring <br><ul><li>portable container</li><li>top storage</li><li>shareability</li></ul>',
  'video' : 'assets/videos/plus demo.mp4',
  'link' : 'https://recreation-community.myshopify.com/66077622512/checkouts/53f976204e77cdb828fb2c37b7bbda30',
  'button' : threeButton
}


products = [one, two, three]
// create the elements using JS?
/* products.forEach(element => {
  btnContainer.append(element.button)
}) */

// twoButton.click(() => explore(two))
twoButton.mouseenter(() => explore(two))
threeButton.mouseenter(() => explore(three))

function explore(product) {
  if (lastButton == null) { 
    lastButton = product.button; 
    description.toggle() 
  }
  if (product == three) {
    $("#disclaimer").show()
    $("#emailSignup").show()
    vidElement.pause()
    video.css("filter", "blur(6px)")
    buyButton.hide()
  }
  else {
    $("#disclaimer").hide()
    $("#emailSignup").hide()
    if (currentVid != product.video) vid(product.video)
    buyButton.show()
    vidElement.play()
    video.css("filter", "initial")
  }

  description_header.html(product.header)
  description_text.html(product.description)
  buyButton.html(`<a href="${product.link}" class="branded" style="text-decoration:none" target="_blank" onclick="toggleVid()">BUY NOW</a>`)
  buttons.forEach(button => button.css("background-color", tan))
  product.button.css("background-color", "#f2f2f2")
}

// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––POP-UPS––––––––––––––––––––––––––––––––––––
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// 21+
function twentyOne() {
  $('#ageCheck').toggle()
  $('#fullBlur').toggle()
  toggleVid()
}

// ––––––––––––––––––––––––––––––––––––––APP––––––––––––––––––––––––––––––––––––––
const appButton = $('#appButton')
const appQR = $('#appQR')
appButton.mouseenter(function () {
  appQR.toggle()
  toggleVid()
  console.log('mouse enter')
})
appButton.mouseleave(function () {
  appQR.toggle()
  console.log('mouse leave')
  toggleVid()
})
appButton.click(function () {
  console.log('mouse click')
  window.open('https://apps.apple.com/us/app/consume-alcohol-tracker/id1633718776', '_blank')
})



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