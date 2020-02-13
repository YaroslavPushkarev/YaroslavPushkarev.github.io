// let car = {
// 	'model':'TeslaRoadster',
// 	'manufacturer':'America',
// 	'year of release':2020,
// 	'km per hour':160
// }
// Object.getOwnPropertyNames(car).forEach(
//   function (val, idx, array) {
//     alert(val + ' = ' + car[val]);
//   }
// );


var direction = 'вправо';
    var offset = 0;

    $("#per").offset({ left: offset, top: offset });

    var moveHeading = function () {
      if (direction === 'вправо') {
        $("#per").offset({ left: offset });
        offset++;
        if (offset > 200) {
          offset = 0;
          direction = 'вниз';
        }
      } else if (direction === 'вниз') {
        $("#per").offset({ top: offset });
        offset++;
        if (offset > 200) {
          offset = 200;
          direction = 'влево';
        }
      } else if (direction === 'влево') {
        $("#per").offset({ left: offset });
        offset--;
        if (offset < 0) {
          offset = 200;
          direction = 'вверх';
        }
      } else if (direction === 'вверх') {
        $("#per").offset({ top: offset });
        offset--;
        if (offset < 0) {
          offset = 0;
          direction = 'вправо';
        }
      }
    };
let intervalId = setInterval(moveHeading, 30);
 $("#per").click(function () {
      clearInterval(intervalId);
    });