
exports.min = function min (array) {
  return array && array.length ? array.sort(function(a, b) { return a - b;})[0] : 0;
}

exports.max = function max (array) {
  return array && array.length ? array.sort(function(a, b) { return b - a; })[0] : 0;
}

exports.avg = function avg (array) {
  function sumArray(array){
    var sum = 0;
    for (let i = 0; i < array.length; i++){
      sum += array[i];
    }
    return sum;
  }
  return array && array.length ? sumArray(array) / array.length : 0;
}
