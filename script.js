
$('#magnet-btn').on({
    'click': function(){
        $("#change-image").fadeOut("slow", function() {
            $('#change-image').css('background-image', "url('images/caps.png')");
            $("#change-image").fadeIn("slow");
        });             
    }
});

$('#o-ring-btn').on({
    'click': function(){
        $("#change-image").fadeOut("slow", function() {
            $('#change-image').css('background-image', "url('images/assembled.png')");
            $("#change-image").fadeIn("slow");
        });             
    }
});

$('#storage-btn').on({
    'click': function(){
        $("#change-image").fadeOut("slow", function() {
            $('#change-image').css('background-image', "url('images/storage.png')");
            $("#change-image").fadeIn("slow");
        });             
    }
});

$('#grinding-btn').on({
    'click': function(){
        $("#change-image").fadeOut("slow", function() {
            $('#change-image').css('background-image', "url('images/grinding.png')");
            $("#change-image").fadeIn("slow");
        });             
    }
});

$('#container-btn').on({
    'click': function(){
        $("#change-image").fadeOut("slow", function() {
            $('#change-image').css('background-image', "url('images/container.png')");
            $("#change-image").fadeIn("slow");
        });             
    }
});