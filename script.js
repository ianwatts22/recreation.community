// const { RedIntegerFormat } = require("three")

//ELEMENTS
const tan = "#feebca"
/* const blue
const gray */

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
const video1cdn = 'https://cdn.shopify.com/videos/c/o/v/171c06e8a55744e2aef07bfabae8f5c6.mp4'

const logo = $('#logo')
const sundial = $("#sundial")
const beDialed = $('#beDialed')

$(document).ready(function () {
  if ($(window).width() < 640) {
    videos = [video1mobile, video2mobile]
    appQR.remove()
    logo.addClass("top-left")
    sundial.hide()
    beDialed.hide()
  } else {
    logo.addClass("top-left")
  }


  vidElement.src = videos[activeVideo]
  currentVideo = videos[activeVideo]
})

function vid(video) {
  vidElement.src = video
  console.log('source')
  currentVid = video
  vidElement.load()
  vidElement.play()
  console.log('play')
}

video.click(() => toggleVid())
video.hide()

// JQuery: vidElement.onended = nextVid(), would need to be object instead of DOM element
vidElement.addEventListener('ended', nextVid)
function nextVid() {
  activeVideo == videos.length - 1 ? activeVideo = 0 : activeVideo += 1
  vid(videos[activeVideo])
}

// const toggleVid = () => vidElement.paused ? vidElement.play() : vidElement.pause()
function toggleVid() { vidElement.paused ? vidElement.play() : vidElement.pause() }

// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––3D/AR––––––––––––––––––––––––––––––––––––––
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const render = $('#render')

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
if (modelViewer.loaded) scale()

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
const description_disclaimer = $('#description > p > a')
const buyButton = $('#buyButton')
const btnContainer = $("#btnContainer")

const oneButton = $('#one')
const twoButton = $('#two')
const threeButton = $('#three')
const buttons = [oneButton, twoButton, threeButton]
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
}
const two = {
  'header': 'COMPACT',
  'description': 'Portable. top storage<br> | no-gunk guide-ring | pocket sized',
  //'description': 'Fully featured; as portable as possible. This ain\'t your grandpa\'s two-piece. <br><ul><li>top storage</li><li>no-gunk guide-ring</li><li>pocket sized</li></ul>',
  'video': video1cdn,
  'link': 'https://recreation-community.myshopify.com/66077622512/checkouts/cc54e961365c315f73dc92c436bd95a7',
  'button': twoButton,
  'price': '$69'
}
const three = {
  'header': 'CLASSIC',
  'description': 'The grinder you thought you knew. Our no-gunk friction ring <br><ul><li>portable container</li><li>top storage</li><li>shareability</li></ul>',
  'video': 'assets/videos/plus demo.mp4',
  'link': 'https://recreation-community.myshopify.com/66077622512/checkouts/53f976204e77cdb828fb2c37b7bbda30',le
  'button': threeButton,
  'price': '$99'
}


products = [one, two, three]
let currentProduct

// create the elements using JS?
/* products.forEach(element => {
  btnContainer.append(element.button)
}) */
twoButton.click(() => explore(two))
threeButton.click(() => explore(three))

explore(two)

$('#disclaimer').hide()
// buyButton.hide()


// let expandButton = $('#expand')

// $('#details').hide()
// expandButton.click(() => {
//   $('#details').show()
//    expandButton.html('hide')
// })

function explore(product) {
  if (lastButton == null) {
    lastButton = product.button
    buyButton.html(`BUY ${product.price}`)
  }
  if (product == three) {
    vidElement.pause()
    video.css("filter", "blur(6px)")
    buyButton.html('WAITLIST')
    $('#disclaimer').hide()
  }
  else {
    // if (currentVid != product.video) vid(product.video)
    vid(product.video)
    buyButton.show()
    video.css("filter", "initial")
    $('#disclaimer').show()
    buyButton.html(`<a href="${product.link}" class="branded" style="text-decoration:none" target="_blank" onclick="vidElement.pause()">BUY ${product.price}</a>`)
    render.hide()
    video.show()
  }

  currentProduct = product

  description_header.html(product.header)
  description_text.html(product.description)

  buttons.forEach(button => button.css("background-color", tan))
  buttons.forEach(button => button.children().css("color", "#7196c9"))
  product.button.css("background-color", "#7196c9")
  product.button.children().css("color", tan)
}

$('.klaviyo_form_trigger').click(() => {
  if (currentProduct == three) {
    window._klOnsite = window._klOnsite || []
    window._klOnsite.push(['openForm', 'Wef6xU'])
  }
})

// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––POP-UPS––––––––––––––––––––––––––––––––––––
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// 21+
$("#21y").click(() => {
  console.log("21y")
  $('#ageCheck').hide()
  $('#fullBlur').hide()
  vidElement.play()
})
$("#21n").click(() => window.open('https://media.tenor.com/ZZEl8q6eRaoAAAAC/shame-game-of-thrones.gif', '_self'))

// ––––––––––––––––––––––––––––––––––––––APP––––––––––––––––––––––––––––––––––––––
const appButton = $('#appButton')
const appQR = $('#appQR')
appButton.mouseenter(() => {
  appQR.show()
  video[0].pause()
})
appButton.mouseleave(() => {
  appQR.hide()
  video[0].play()
})
appButton.click(() => window.open('https://apps.apple.com/us/app/consume-alcohol-tracker/id1633718776', '_blank'))