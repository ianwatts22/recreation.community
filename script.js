function checkPswd() {
  var confirmPassword = "turtle";
  var password = document.getElementById("pswd").value;
  if (password == confirmPassword) {
      window.location="grinder.html";
  }
  else{
      alert("Passwords do not match.");
  }
}

var video1 = "videos/green3.mp4";
var video2 = "videos/green3.mp4";
var video3 = "videos/green3.mp4";
const videos = [video1, video2, video3];
var videonum = 1;

var rad1 = document.getElementById("rad1");
var rad2 = document.getElementById("rad2");
var rad3 = document.getElementById("rad3");
const rads = [rad1, rad2, rad3];

var label1 = document.getElementById("label1");
var label2 = document.getElementById("label2");
var label3 = document.getElementById("label3");
const labels = [label1, label2, label3];

function vid(video) {
  label1.style.background = "hsla(0, 0%, 80%, .0)";
  label2.style.background = "hsla(0, 0%, 80%, .0)";
  label3.style.background = "hsla(0, 0%, 80%, .0)";
  $("#video")[0].pause();
  $("#video").attr("src", video);
  $("#video")[0].load();
  $('#video')[0].play();
}

$('#video').bind('ended', function(){
  console.log(videos[videonum]);
  vid(videos[videonum]);
  rads[videonum].checked = true;
  label1.style.background = "hsla(0, 0%, 80%, .0)";
  label2.style.background = "hsla(0, 0%, 80%, .0)";
  label3.style.background = "hsla(0, 0%, 80%, .0)";
  labels[videonum].style.background = "hsla(0, 0%, 80%, .15)";
  videonum++;
  if(videonum > 2){
    videonum = 0;
  }
});

function toggleVid() {
  if($("#video")[0].paused){
    $('#video')[0].play();
  }
  else
  {
    $('#video')[0].pause();
  }
}