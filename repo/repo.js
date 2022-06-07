//continue video on screen resize
/*window.addEventListener('resize', function(event){
  console.log("hi");
  if($(".myVideo")[0].paused) {
    $(".myVideo")[0].play();
  }
});*/



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

//fade after video
$('#random').bind('ended', function(){
    $('#random').fadeOut()
    console.log("fade after video");
  });



function hide(){
    $('.blur').fadeOut();
  }
  

  function vid(video) {
    $("#video").fadeOut("slow", function() {
      $("#video")[0].pause();
      $('#video').attr('src', video);
      $("#video")[0].load();
      $('#video')[0].play();
      $("#video").fadeIn("slow");
      console.log("change video");
    });
  
  }
  