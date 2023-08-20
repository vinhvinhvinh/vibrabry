function convertSecondToMinute(second) {
  if (second === undefined) {
    return 10;
  }
  let minutes = Math.floor(second / 60);
  let seconds = second - minutes * 60;
  if (second < 60) {
    return second;
  }
  if (second > 5999) {
    return '99:99';
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}