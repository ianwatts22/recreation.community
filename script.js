$('#magnet-btn').on({
    'click': function(){
        $("#change-image").fadeOut("slow", function() {
            $('#change-image').css('background-image', "url('caps.png')");
            $("#change-image").fadeIn("slow");
        });             
    }
});

$('#o-ring-btn').on({
    'click': function(){
        $("#change-image").fadeOut("slow", function() {
            $('#change-image').css('background-image', "url('assembled.png')");
            $("#change-image").fadeIn("slow");
        });             
    }
});

$('#storage-btn').on({
    'click': function(){
        $("#change-image").fadeOut("slow", function() {
            $('#change-image').css('background-image', "url('storage.png')");
            $("#change-image").fadeIn("slow");
        });             
    }
});

$('#grinding-btn').on({
    'click': function(){
        $("#change-image").fadeOut("slow", function() {
            $('#change-image').css('background-image', "url('grinding.png')");
            $("#change-image").fadeIn("slow");
        });             
    }
});

$('#container-btn').on({
    'click': function(){
        $("#change-image").fadeOut("slow", function() {
            $('#change-image').css('background-image', "url('container.png')");
            $("#change-image").fadeIn("slow");
        });             
    }
});