// build a countdown timer
function countdownTimer(targetDate) {
  var now = new Date();
  var distance = targetDate - now;
  if (distance < 0) {
    return {
        'days': 0,
        'hours': 0,
        'minutes': 0,
        'seconds': 0
    };
  }
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return {
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

// set content of the countdown timer in html
function setCountdownTimer(targetDate) {
    var timer = countdownTimer(targetDate);
    document.getElementById('days').innerHTML = String(timer.days).padStart(2, '0');
    document.getElementById('hours').innerHTML = String(timer.hours).padStart(2, '0')
    document.getElementById('minutes').innerHTML = String(timer.minutes).padStart(2, '0');
    document.getElementById('seconds').innerHTML = String(timer.seconds).padStart(2, '0');
}

// set the target date
var targetDate = new Date('March 3, 2023 00:00:00').getTime();

// update the countdown every 1 second
setInterval(function() {
  setCountdownTimer(targetDate);
}, 1000);