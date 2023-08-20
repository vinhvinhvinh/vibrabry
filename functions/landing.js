

(function () {
  var time_string = '2023-03-21';
  var target = new Date(time_string);
  var now = new Date;
  target.setHours(0, 0, 0); // 11pm
  var remain = ((target - now) / 1000);
  var hh = (remain / 60 / 60) % 60;

  console.log('remain', remain);

  function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
  }



  // function tick() {
  //   var now = new Date;
  //   if (now > target) { // too late, go to tomorrow
  //     start.setDate(start.getDate() + 1);
  //   }
  //   var remain = ((target - now) / 1000);
  //   var hh = pad((remain / 60 / 60) % 60);
  //   var mm = pad((remain / 60) % 60);
  //   var ss = pad(remain % 60);
  //   // document.getElementById('time').innerHTML =
  //   //   hh + ":" + mm + ":" + ss;
  //   console.log(hh + ':' + mm + ':' + ss)
  //   setTimeout(tick, 1000);
  // }

  // // document.addEventListener('DOMContentLoaded', tick);
  // tick();
})();