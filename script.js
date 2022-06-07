function checkPswd() {
  var confirmPassword = "turtle";
  var password = document.getElementById("pswd").value;
  if (password == confirmPassword) {
      window.location="proto.html";
  }
  else{
      alert("Passwords do not match.");
  }
}

var video1 = "videos/green1.mp4";
var video2 = "videos/green1.mp4";
var video3 = "videos/green1.mp4";


function vid(video) {
  $("#video")[0].pause();
  console.log(video);
  $("#video").attr("src", video);
  $("#video")[0].load();
  $('#video')[0].play();
}