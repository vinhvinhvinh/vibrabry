// Return false if today already thurday
function findNextThursday(h, m, s) {
  var day = new Date();
  var remaingDays = 7 - day.getDay() + 4;
  var nextDay = new Date(day.setDate(day.getDate() + remaingDays));
  nextDay.setHours(h, m, s);
  if (remaingDays === 7) return false;
  return nextDay;
}

function getNextThursday() {
  var now = new Date();
  var day_remain = 7 - now.getDay() + 4;
  var nextDay = new Date(now.setDate(now.getDate() + day_remain));

  function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
  }
}