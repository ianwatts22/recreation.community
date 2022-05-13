console.log('helloworld');

$('#hi').on({
    'click': function(){
        $("#change-image").fadeOut("slow", function() {
            $('#change-image').css('background-image', "url('2k.png')");
            $("#change-image").fadeIn("slow");
        });             
    }
});