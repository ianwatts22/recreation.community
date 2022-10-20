// jQuery

// applying branding to header elements on delay (need to implement async)
setTimeout(function() {
  $("h1").addClass("branded")
  $("h2").addClass("branded")
  console.log("delay")  
}, 300);