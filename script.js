var magnet = "url('images/caps.png')";
var ring = "url('images/assembled.png')";
var storage = "url('images/caps.png')";
var grinding = "url('images/grinding.png')";
var container = "url('images/container.png')";

/*function loadImages() {
    magnet = "url('images/caps.png')";
    ring = "url('images/assembled.png')";   
    grinding = "url('images/grinding.png')";
    container = "url('images/container.png')";
    storage = "url('images/caps.png')";
}*/

function changeImage(image){
    $("#change-image").fadeOut("slow", function() {
        $('#change-image').css('background-image', image);
        $("#change-image").fadeIn("slow");
        console.log(image);
    });
}