var names = ['POWERLIFTING', 'CROSSLIFTING', 'WEIGHTLIFTING', 'FUNCTIONNAL TRAINING'];

setInterval(function() {
  var rand = Math.floor(Math.random() * 4);
  document.getElementById("changingText").innerHTML = names[rand];
}, 2000);