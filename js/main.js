console.log("woo3")

var countDownDate = new Date("Jan 11, 2022 23:45:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = now - countDownDate;

  // Time calculations for days, hours, minutes and seconds
  var days = 0;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) % 4;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
}, 1000);

