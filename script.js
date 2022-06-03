
function changeVideo(){
    $("#change-image").fadeOut("slow", function() {
        $('#video').setAttribute('src', "url('teeth.mp4')");
        $("#change-image").fadeIn("slow");
        console.log("change video");
    });
}

function changeImage(image){
    $("#change-image").fadeOut("slow", function() {
        $('#change-image').css('background-image', image);
        $("#change-image").fadeIn("slow");
        console.log("change image");
    });
}

//continue video on screen resize
/*window.addEventListener('resize', function(event){
  console.log("hi");
  if($(".myVideo")[0].paused) {
    $(".myVideo")[0].play();
  }
});*/


//fade after video
$('#random').bind('ended', function(){
  $('#random').fadeOut()
  console.log("fade after video");
});


function hide(){
  $('.blur').fadeOut();
}

function vid1() {
  $("#real-video")[0].pause();
  $("#real-video").attr("src", "videos/vid1.mp4");
  $("#real-video")[0].load();
  $('#real-video')[0].play();
}

function vid2() {
  $("#real-video")[0].pause();
  $("#real-video").attr("src", "videos/teeth.mp4");
  $("#real-video")[0].load();
  $('#real-video')[0].play();
}