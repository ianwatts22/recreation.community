var magnet = "url('images/magnet.png')";
var oring = "url('images/oring.png')";
var storage = "url('images/storage.png')";
var grinding = "url('images/grinding.png')";
var container = "url('images/container.png')";

/*function loadImages() {
    magnet = "url('images/caps.png')";
    ring = "url('images/assembled.png')";   
    grinding = "url('images/grinding.png')";
    container = "url('images/container.png')";
    storage = "url('images/caps.png')";
}*/


var vid = document.getElementById("myVideo");

function myFunction() { 
  $("#myVideo").attr("src", "videos/magnet.mp4");
  console.log("jaqn");
} 

function myFunction2() { 
  $("#myVideo").attr("src", "videos/teeth.mp4");
  console.log("ff");
}

function changeVideo(){
    $("#change-image").fadeOut("slow", function() {
        //$('#video').setAttribute('src', "url('teeth.mp4')");
        $('#video-source').src = 'magnet.mp4';
        $("#change-image").fadeIn("slow");
        console.log("ciao");
    });
}

function changeImage(image){
    $("#change-image").fadeOut("slow", function() {
        $('#change-image').css('background-image', image);
        $("#change-image").fadeIn("slow");
        console.log(image);
    });
}


window.addEventListener('resize', function(event){
  console.log("hi");
  if($(".myVideo")[0].paused) {
    $(".myVideo")[0].play();
  }
});


//AR
const linkElement = document.getElementById("ar-link");
linkElement.addEventListener("message", function(event) {
  if (event.data === "_apple_ar_quicklook_button_tapped") {
    window.open("https://www.w3schools.com");
  }
}, false)