(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var num = prompt('Enter number');

switch (num) {
  case '1':
    alert('!');
    break;

  case '2':
    alert('@');
    break;

  case '3':
    alert('#');
    break;

  case '4':
    alert('$');
    break;

  case '5':
    alert('%');
    break;

  case '6':
    alert('^');
    break;

  case '7':
    alert('&');
    break;

  case '8':
    alert('*');
    break;

  case '9':
    alert('(');
    break;

  case '0':
    alert(')');
    break;
}

var age = prompt('Enter your age');

if (age <= 2) {
  alert('child');
} else if (age <= 18) {
  alert('teen');
} else if (age <= 60) {
  alert('adult');
} else {
  alert('pens');
}

var number = prompt('enter number');
var first = number[0];
var second = number[1];
var third = number[2];

if (first === number[1] || first === number[2]) {
  alert('equal');
} else if (second === number[0] || second === number[2]) {
  alert('equal');
} else if (third === number[0] || third === number[1]) {
  alert('equal');
} else {
  alert('not');
}

var year = prompt('Enter year');

if (year % 400 == 0 || year % 4 == 0 && year % 100 !== 0) {
  alert('Leap year');
} else {
  alert('Year is not a leap');
}

var palindrom = prompt('Enter a five digit number');
var reverse = palindrom.split('').reverse().join('');
;

if (palindrom === reverse) {
  alert('true');
} else {
  alert('non');
}

var usd = prompt('Enter your sum');
var eur = 0.903261;
var uan = 23.9392;
var azn = 1.7000;
var sum = prompt('choose currency:EUR,UAN or AZN');

switch (sum) {
  case 'EUR':
    alert(usd * eur);
    break;

  case 'UAN':
    alert(usd * uan);
    break;

  case 'AZN':
    alert(usd * azn);
    break;
}

var purchaseAmount = prompt('Enter your purchase amount');

if (purchaseAmount >= 100 && purchaseAmount <= 300) {
  alert('Your discounted amount ' + (purchaseAmount / 100 * 3 - purchaseAmount));
} else if (purchaseAmount >= 300 && purchaseAmount <= 500) {
  alert('Your discounted amount ' + (purchaseAmount / 100 * 5 - purchaseAmount));
} else if (purchaseAmount >= 500) {
  alert('Your discounted amount ' + (purchaseAmount / 100 * 7 - purchaseAmount));
} else {
  alert('astalavista baby');
}

var circles = prompt('Enter length circles');
var square = prompt('Enter square perimeter');
var circleDiametr = (circles / Math.PI).toFixed(2);

if (circleDiametr <= square / 4) {
  alert('Сircle fit in a square');
} else alert('Сircle does not fit in a square');

var questionFirst = prompt('What is the capital of France: Paris,Narnia or London?');
var questionSecond = prompt('How much will 10 + 10: 24, 21 or 20?');
var questionThird = prompt('What year did the Berlin Wall fall: 1989, 1990 or 1988?');
var score = 0;

if (questionFirst === 'Paris') {
  score += 2;
}

if (questionSecond === '20') {
  score += 2;
}

if (questionThird === '1989') {
  score += 2;
}

alert(score);

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy8yM19qcy9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsY0FBRCxDQUFoQjs7QUFDQyxRQUFPLEdBQVA7QUFDSSxPQUFLLEdBQUw7QUFDRyxJQUFBLEtBQUssQ0FBQyxHQUFELENBQUw7QUFDQTs7QUFDSCxPQUFLLEdBQUw7QUFDRyxJQUFBLEtBQUssQ0FBQyxHQUFELENBQUw7QUFDQTs7QUFDSixPQUFLLEdBQUw7QUFDSSxJQUFBLEtBQUssQ0FBQyxHQUFELENBQUw7QUFDQTs7QUFDSixPQUFLLEdBQUw7QUFDSSxJQUFBLEtBQUssQ0FBQyxHQUFELENBQUw7QUFDQTs7QUFDSixPQUFLLEdBQUw7QUFDSSxJQUFBLEtBQUssQ0FBQyxHQUFELENBQUw7QUFDQTs7QUFDSixPQUFLLEdBQUw7QUFDSSxJQUFBLEtBQUssQ0FBQyxHQUFELENBQUw7QUFDQTs7QUFDSixPQUFLLEdBQUw7QUFDSSxJQUFBLEtBQUssQ0FBQyxHQUFELENBQUw7QUFDQTs7QUFDSixPQUFLLEdBQUw7QUFDSSxJQUFBLEtBQUssQ0FBQyxHQUFELENBQUw7QUFDQTs7QUFDSixPQUFLLEdBQUw7QUFDSyxJQUFBLEtBQUssQ0FBQyxHQUFELENBQUw7QUFDQTs7QUFDTCxPQUFLLEdBQUw7QUFDSSxJQUFBLEtBQUssQ0FBQyxHQUFELENBQUw7QUFDQTtBQTlCUDs7QUFrQ0QsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLGdCQUFELENBQWhCOztBQUVBLElBQUksR0FBRyxJQUFJLENBQVgsRUFBYTtBQUNULEVBQUEsS0FBSyxDQUFDLE9BQUQsQ0FBTDtBQUNILENBRkQsTUFFTSxJQUFJLEdBQUcsSUFBRyxFQUFWLEVBQWE7QUFDZixFQUFBLEtBQUssQ0FBQyxNQUFELENBQUw7QUFDSCxDQUZLLE1BRUEsSUFBSSxHQUFHLElBQUksRUFBWCxFQUFjO0FBQ2hCLEVBQUEsS0FBSyxDQUFDLE9BQUQsQ0FBTDtBQUNILENBRkssTUFFRDtBQUNELEVBQUEsS0FBSyxDQUFDLE1BQUQsQ0FBTDtBQUNIOztBQUVELElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxjQUFELENBQW5CO0FBQ0EsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUQsQ0FBbEI7QUFDQSxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBRCxDQUFuQjtBQUNBLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFELENBQWxCOztBQUNBLElBQUksS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFELENBQWhCLElBQXVCLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBRCxDQUEzQyxFQUErQztBQUMzQyxFQUFBLEtBQUssQ0FBQyxPQUFELENBQUw7QUFDSCxDQUZELE1BRU0sSUFBRyxNQUFNLEtBQUssTUFBTSxDQUFDLENBQUQsQ0FBakIsSUFBd0IsTUFBTSxLQUFLLE1BQU0sQ0FBQyxDQUFELENBQTVDLEVBQWdEO0FBQ2xELEVBQUEsS0FBSyxDQUFDLE9BQUQsQ0FBTDtBQUNILENBRkssTUFFQSxJQUFHLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBRCxDQUFoQixJQUF3QixLQUFLLEtBQUssTUFBTSxDQUFDLENBQUQsQ0FBM0MsRUFBK0M7QUFDakQsRUFBQSxLQUFLLENBQUMsT0FBRCxDQUFMO0FBQ0gsQ0FGSyxNQUdGO0FBQ0EsRUFBQSxLQUFLLENBQUMsS0FBRCxDQUFMO0FBQ0g7O0FBR0QsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFlBQUQsQ0FBakI7O0FBQ0EsSUFBSSxJQUFJLEdBQUcsR0FBUCxJQUFjLENBQWQsSUFBbUIsSUFBSSxHQUFHLENBQVAsSUFBWSxDQUFaLElBQWlCLElBQUksR0FBRyxHQUFQLEtBQWUsQ0FBdkQsRUFBMEQ7QUFDdEQsRUFBQSxLQUFLLENBQUMsV0FBRCxDQUFMO0FBQ0QsQ0FGSCxNQUVTO0FBQ0wsRUFBQSxLQUFLLENBQUUsb0JBQUYsQ0FBTDtBQUNEOztBQUdILElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQywyQkFBRCxDQUF0QjtBQUNBLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFWLENBQWdCLEVBQWhCLEVBQW9CLE9BQXBCLEdBQThCLElBQTlCLENBQW1DLEVBQW5DLENBQWQ7QUFBcUQ7O0FBQ3JELElBQUcsU0FBUyxLQUFLLE9BQWpCLEVBQXlCO0FBQ3JCLEVBQUEsS0FBSyxDQUFDLE1BQUQsQ0FBTDtBQUNILENBRkQsTUFFSztBQUNELEVBQUEsS0FBSyxDQUFDLEtBQUQsQ0FBTDtBQUNIOztBQUdELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxnQkFBRCxDQUFoQjtBQUNBLElBQUksR0FBRyxHQUFHLFFBQVY7QUFDQSxJQUFJLEdBQUcsR0FBRyxPQUFWO0FBQ0EsSUFBSSxHQUFHLEdBQUcsTUFBVjtBQUNBLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxnQ0FBRCxDQUFoQjs7QUFFQSxRQUFPLEdBQVA7QUFDSSxPQUFLLEtBQUw7QUFDSSxJQUFBLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBUCxDQUFMO0FBQ0E7O0FBQ0osT0FBSyxLQUFMO0FBQ1EsSUFBQSxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQVAsQ0FBTDtBQUNBOztBQUNSLE9BQUssS0FBTDtBQUNJLElBQUEsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFQLENBQUw7QUFDQTtBQVRSOztBQWNBLElBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyw0QkFBRCxDQUEzQjs7QUFDQSxJQUFJLGNBQWMsSUFBSSxHQUFsQixJQUF5QixjQUFjLElBQUcsR0FBOUMsRUFBbUQ7QUFDL0MsRUFBQSxLQUFLLENBQUUsNkJBQThCLGNBQWMsR0FBRyxHQUFqQixHQUF1QixDQUF4QixHQUE2QixjQUExRCxDQUFGLENBQUw7QUFDSCxDQUZELE1BRU0sSUFBRyxjQUFjLElBQUksR0FBbEIsSUFBeUIsY0FBYyxJQUFHLEdBQTdDLEVBQWtEO0FBQ3BELEVBQUEsS0FBSyxDQUFFLDZCQUE4QixjQUFjLEdBQUcsR0FBakIsR0FBdUIsQ0FBeEIsR0FBNkIsY0FBMUQsQ0FBRixDQUFMO0FBQ0gsQ0FGSyxNQUVBLElBQUcsY0FBYyxJQUFJLEdBQXJCLEVBQTJCO0FBQzdCLEVBQUEsS0FBSyxDQUFFLDZCQUE4QixjQUFjLEdBQUcsR0FBakIsR0FBdUIsQ0FBeEIsR0FBNkIsY0FBMUQsQ0FBRixDQUFMO0FBQ0gsQ0FGSyxNQUVEO0FBQ0QsRUFBQSxLQUFLLENBQUMsa0JBQUQsQ0FBTDtBQUNIOztBQUVELElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBRSxzQkFBRixDQUFwQjtBQUNBLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBRSx3QkFBRixDQUFuQjtBQUNBLElBQUksYUFBYSxHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFoQixFQUFvQixPQUFwQixDQUE0QixDQUE1QixDQUFwQjs7QUFFQSxJQUFJLGFBQWEsSUFBSSxNQUFNLEdBQUcsQ0FBOUIsRUFBZ0M7QUFDNUIsRUFBQSxLQUFLLENBQUMsd0JBQUQsQ0FBTDtBQUNILENBRkQsTUFHSSxLQUFLLENBQUMsaUNBQUQsQ0FESDs7QUFJTixJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsd0RBQUQsQ0FBMUI7QUFDQSxJQUFJLGNBQWMsR0FBRyxNQUFNLENBQUMsc0NBQUQsQ0FBM0I7QUFDQSxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMseURBQUQsQ0FBMUI7QUFDQSxJQUFJLEtBQUssR0FBRyxDQUFaOztBQUVBLElBQUcsYUFBYSxLQUFLLE9BQXJCLEVBQTZCO0FBQ3pCLEVBQUEsS0FBSyxJQUFJLENBQVQ7QUFDSDs7QUFDRCxJQUFHLGNBQWMsS0FBSyxJQUF0QixFQUEyQjtBQUN2QixFQUFBLEtBQUssSUFBSSxDQUFUO0FBQ0g7O0FBQ0QsSUFBRyxhQUFhLEtBQUssTUFBckIsRUFBNEI7QUFDeEIsRUFBQSxLQUFLLElBQUksQ0FBVDtBQUNIOztBQUNELEtBQUssQ0FBQyxLQUFELENBQUwiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImxldCBudW0gPSBwcm9tcHQoJ0VudGVyIG51bWJlcicpO1xyXG4gc3dpdGNoKG51bSl7XHJcbiAgICAgY2FzZSAnMSc6XHJcbiAgICAgICAgYWxlcnQoJyEnKVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgIGNhc2UgJzInOlxyXG4gICAgICAgIGFsZXJ0KCdAJylcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgJzMnOlxyXG4gICAgICAgIGFsZXJ0KCcjJylcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgJzQnOlxyXG4gICAgICAgIGFsZXJ0KCckJylcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgJzUnOlxyXG4gICAgICAgIGFsZXJ0KCclJylcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgJzYnOlxyXG4gICAgICAgIGFsZXJ0KCdeJylcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgJzcnOlxyXG4gICAgICAgIGFsZXJ0KCcmJylcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgJzgnOlxyXG4gICAgICAgIGFsZXJ0KCcqJylcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgJzknOlxyXG4gICAgICAgICBhbGVydCgnKCcpXHJcbiAgICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMCc6XHJcbiAgICAgICAgYWxlcnQoJyknKVxyXG4gICAgICAgIGJyZWFrOyAgICBcclxuIH0gXHJcblxyXG5cclxubGV0IGFnZSA9IHByb21wdCgnRW50ZXIgeW91ciBhZ2UnKTtcclxuXHJcbmlmIChhZ2UgPD0gMil7XHJcbiAgICBhbGVydCgnY2hpbGQnKVxyXG59ZWxzZSBpZiAoYWdlIDw9MTgpe1xyXG4gICAgYWxlcnQoJ3RlZW4nKVxyXG59ZWxzZSBpZiggYWdlIDw9IDYwKXtcclxuICAgIGFsZXJ0KCdhZHVsdCcpXHJcbn1lbHNle1xyXG4gICAgYWxlcnQoJ3BlbnMnKVxyXG59XHJcblxyXG5sZXQgbnVtYmVyID0gcHJvbXB0KCdlbnRlciBudW1iZXInKTsgXHJcbmxldCBmaXJzdCA9IG51bWJlclswXTtcclxubGV0IHNlY29uZCA9IG51bWJlclsxXTtcclxubGV0IHRoaXJkID0gbnVtYmVyWzJdO1xyXG5pZiAoZmlyc3QgPT09IG51bWJlclsxXSB8fCBmaXJzdCA9PT0gbnVtYmVyWzJdKXtcclxuICAgIGFsZXJ0KCdlcXVhbCcpXHJcbn1lbHNlIGlmKHNlY29uZCA9PT0gbnVtYmVyWzBdIHx8IHNlY29uZCA9PT0gbnVtYmVyWzJdKXtcclxuICAgIGFsZXJ0KCdlcXVhbCcpXHJcbn1lbHNlIGlmKHRoaXJkID09PSBudW1iZXJbMF0gfHwgIHRoaXJkID09PSBudW1iZXJbMV0pe1xyXG4gICAgYWxlcnQoJ2VxdWFsJylcclxufVxyXG5lbHNle1xyXG4gICAgYWxlcnQoJ25vdCcpXHJcbn1cclxuXHJcblxyXG5sZXQgeWVhciA9IHByb21wdCgnRW50ZXIgeWVhcicpXHJcbmlmICh5ZWFyICUgNDAwID09IDAgfHwgeWVhciAlIDQgPT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKSB7XHJcbiAgICBhbGVydCgnTGVhcCB5ZWFyJylcclxuICB9IGVsc2Uge1xyXG4gICAgYWxlcnQgKCdZZWFyIGlzIG5vdCBhIGxlYXAnKVxyXG4gIH1cclxuXHJcblxyXG5sZXQgcGFsaW5kcm9tID0gcHJvbXB0KCdFbnRlciBhIGZpdmUgZGlnaXQgbnVtYmVyJyk7XHJcbmxldCByZXZlcnNlID0gcGFsaW5kcm9tLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7O1xyXG5pZihwYWxpbmRyb20gPT09IHJldmVyc2Upe1xyXG4gICAgYWxlcnQoJ3RydWUnKVxyXG59ZWxzZXtcclxuICAgIGFsZXJ0KCdub24nKVxyXG59ICAgXHJcblxyXG5cclxubGV0IHVzZCA9IHByb21wdCgnRW50ZXIgeW91ciBzdW0nKTtcclxubGV0IGV1ciA9IDAuOTAzMjYxO1xyXG5sZXQgdWFuID0gMjMuOTM5MjtcclxubGV0IGF6biA9IDEuNzAwMDtcclxubGV0IHN1bSA9IHByb21wdCgnY2hvb3NlIGN1cnJlbmN5OkVVUixVQU4gb3IgQVpOJyk7XHJcblxyXG5zd2l0Y2goc3VtKXtcclxuICAgIGNhc2UgJ0VVUic6XHJcbiAgICAgICAgYWxlcnQodXNkICogZXVyKTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgJ1VBTic6XHJcbiAgICAgICAgICAgIGFsZXJ0KHVzZCAqIHVhbik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnQVpOJzpcclxuICAgICAgICBhbGVydCh1c2QgKiBhem4pO1xyXG4gICAgICAgIGJyZWFrO1xyXG59XHJcblxyXG5cclxuXHJcbmxldCBwdXJjaGFzZUFtb3VudCA9IHByb21wdCgnRW50ZXIgeW91ciBwdXJjaGFzZSBhbW91bnQnKTtcclxuaWYgKHB1cmNoYXNlQW1vdW50ID49IDEwMCAmJiBwdXJjaGFzZUFtb3VudCA8PTMwMCApe1xyXG4gICAgYWxlcnQgKCdZb3VyIGRpc2NvdW50ZWQgYW1vdW50ICcgKyAoKHB1cmNoYXNlQW1vdW50IC8gMTAwICogMykgLSBwdXJjaGFzZUFtb3VudCkpXHJcbn1lbHNlIGlmKHB1cmNoYXNlQW1vdW50ID49IDMwMCAmJiBwdXJjaGFzZUFtb3VudCA8PTUwMCApe1xyXG4gICAgYWxlcnQgKCdZb3VyIGRpc2NvdW50ZWQgYW1vdW50ICcgKyAoKHB1cmNoYXNlQW1vdW50IC8gMTAwICogNSkgLSBwdXJjaGFzZUFtb3VudCkpXHJcbn1lbHNlIGlmKHB1cmNoYXNlQW1vdW50ID49IDUwMCAgKXtcclxuICAgIGFsZXJ0ICgnWW91ciBkaXNjb3VudGVkIGFtb3VudCAnICsgKChwdXJjaGFzZUFtb3VudCAvIDEwMCAqIDcpIC0gcHVyY2hhc2VBbW91bnQpKVxyXG59ZWxzZXtcclxuICAgIGFsZXJ0KCdhc3RhbGF2aXN0YSBiYWJ5JylcclxufSAgICBcclxuXHJcbmxldCBjaXJjbGVzID0gcHJvbXB0ICgnRW50ZXIgbGVuZ3RoIGNpcmNsZXMnKTtcclxubGV0IHNxdWFyZSA9IHByb21wdCAoJ0VudGVyIHNxdWFyZSBwZXJpbWV0ZXInKTtcclxubGV0IGNpcmNsZURpYW1ldHIgPSAoY2lyY2xlcyAvIE1hdGguUEkpLnRvRml4ZWQoMik7XHJcblxyXG5pZiAoY2lyY2xlRGlhbWV0ciA8PSBzcXVhcmUgLyA0KXtcclxuICAgIGFsZXJ0KCfQoWlyY2xlIGZpdCBpbiBhIHNxdWFyZScpXHJcbn1lbHNlIChcclxuICAgIGFsZXJ0KCfQoWlyY2xlIGRvZXMgbm90IGZpdCBpbiBhIHNxdWFyZScpXHJcbilcclxuXHJcbmxldCBxdWVzdGlvbkZpcnN0ID0gcHJvbXB0KCdXaGF0IGlzIHRoZSBjYXBpdGFsIG9mIEZyYW5jZTogUGFyaXMsTmFybmlhIG9yIExvbmRvbj8nKTtcclxubGV0IHF1ZXN0aW9uU2Vjb25kID0gcHJvbXB0KCdIb3cgbXVjaCB3aWxsIDEwICsgMTA6IDI0LCAyMSBvciAyMD8nKTtcclxubGV0IHF1ZXN0aW9uVGhpcmQgPSBwcm9tcHQoJ1doYXQgeWVhciBkaWQgdGhlIEJlcmxpbiBXYWxsIGZhbGw6IDE5ODksIDE5OTAgb3IgMTk4OD8nKTtcclxubGV0IHNjb3JlID0gMDtcclxuXHJcbmlmKHF1ZXN0aW9uRmlyc3QgPT09ICdQYXJpcycpe1xyXG4gICAgc2NvcmUgKz0gMjtcclxufVxyXG5pZihxdWVzdGlvblNlY29uZCA9PT0gJzIwJyl7XHJcbiAgICBzY29yZSArPSAyO1xyXG59XHJcbmlmKHF1ZXN0aW9uVGhpcmQgPT09ICcxOTg5Jyl7XHJcbiAgICBzY29yZSArPSAyO1xyXG59XHJcbmFsZXJ0KHNjb3JlKTtcclxuXHJcblxyXG4iXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OWljbTkzYzJWeUxYQmhZMnN2WDNCeVpXeDFaR1V1YW5NaUxDSndjbTlxWldOMGN5OHlNMTlxY3k5emNtTXZhbk12WVhCd0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN1FVTkJRU3hKUVVGSkxFZEJRVWNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNZMEZCUkN4RFFVRm9RanM3UVVGRFF5eFJRVUZQTEVkQlFWQTdRVUZEU1N4UFFVRkxMRWRCUVV3N1FVRkRSeXhKUVVGQkxFdEJRVXNzUTBGQlF5eEhRVUZFTEVOQlFVdzdRVUZEUVRzN1FVRkRTQ3hQUVVGTExFZEJRVXc3UVVGRFJ5eEpRVUZCTEV0QlFVc3NRMEZCUXl4SFFVRkVMRU5CUVV3N1FVRkRRVHM3UVVGRFNpeFBRVUZMTEVkQlFVdzdRVUZEU1N4SlFVRkJMRXRCUVVzc1EwRkJReXhIUVVGRUxFTkJRVXc3UVVGRFFUczdRVUZEU2l4UFFVRkxMRWRCUVV3N1FVRkRTU3hKUVVGQkxFdEJRVXNzUTBGQlF5eEhRVUZFTEVOQlFVdzdRVUZEUVRzN1FVRkRTaXhQUVVGTExFZEJRVXc3UVVGRFNTeEpRVUZCTEV0QlFVc3NRMEZCUXl4SFFVRkVMRU5CUVV3N1FVRkRRVHM3UVVGRFNpeFBRVUZMTEVkQlFVdzdRVUZEU1N4SlFVRkJMRXRCUVVzc1EwRkJReXhIUVVGRUxFTkJRVXc3UVVGRFFUczdRVUZEU2l4UFFVRkxMRWRCUVV3N1FVRkRTU3hKUVVGQkxFdEJRVXNzUTBGQlF5eEhRVUZFTEVOQlFVdzdRVUZEUVRzN1FVRkRTaXhQUVVGTExFZEJRVXc3UVVGRFNTeEpRVUZCTEV0QlFVc3NRMEZCUXl4SFFVRkVMRU5CUVV3N1FVRkRRVHM3UVVGRFNpeFBRVUZMTEVkQlFVdzdRVUZEU3l4SlFVRkJMRXRCUVVzc1EwRkJReXhIUVVGRUxFTkJRVXc3UVVGRFFUczdRVUZEVEN4UFFVRkxMRWRCUVV3N1FVRkRTU3hKUVVGQkxFdEJRVXNzUTBGQlF5eEhRVUZFTEVOQlFVdzdRVUZEUVR0QlFUbENVRHM3UVVGclEwUXNTVUZCU1N4SFFVRkhMRWRCUVVjc1RVRkJUU3hEUVVGRExHZENRVUZFTEVOQlFXaENPenRCUVVWQkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFWZ3NSVUZCWVR0QlFVTlVMRVZCUVVFc1MwRkJTeXhEUVVGRExFOUJRVVFzUTBGQlREdEJRVU5JTEVOQlJrUXNUVUZGVFN4SlFVRkpMRWRCUVVjc1NVRkJSeXhGUVVGV0xFVkJRV0U3UVVGRFppeEZRVUZCTEV0QlFVc3NRMEZCUXl4TlFVRkVMRU5CUVV3N1FVRkRTQ3hEUVVaTExFMUJSVUVzU1VGQlNTeEhRVUZITEVsQlFVa3NSVUZCV0N4RlFVRmpPMEZCUTJoQ0xFVkJRVUVzUzBGQlN5eERRVUZETEU5QlFVUXNRMEZCVER0QlFVTklMRU5CUmtzc1RVRkZSRHRCUVVORUxFVkJRVUVzUzBGQlN5eERRVUZETEUxQlFVUXNRMEZCVER0QlFVTklPenRCUVVWRUxFbEJRVWtzVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4alFVRkVMRU5CUVc1Q08wRkJRMEVzU1VGQlNTeExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVRc1EwRkJiRUk3UVVGRFFTeEpRVUZKTEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJSQ3hEUVVGdVFqdEJRVU5CTEVsQlFVa3NTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRUxFTkJRV3hDT3p0QlFVTkJMRWxCUVVrc1MwRkJTeXhMUVVGTExFMUJRVTBzUTBGQlF5eERRVUZFTEVOQlFXaENMRWxCUVhWQ0xFdEJRVXNzUzBGQlN5eE5RVUZOTEVOQlFVTXNRMEZCUkN4RFFVRXpReXhGUVVFclF6dEJRVU16UXl4RlFVRkJMRXRCUVVzc1EwRkJReXhQUVVGRUxFTkJRVXc3UVVGRFNDeERRVVpFTEUxQlJVMHNTVUZCUnl4TlFVRk5MRXRCUVVzc1RVRkJUU3hEUVVGRExFTkJRVVFzUTBGQmFrSXNTVUZCZDBJc1RVRkJUU3hMUVVGTExFMUJRVTBzUTBGQlF5eERRVUZFTEVOQlFUVkRMRVZCUVdkRU8wRkJRMnhFTEVWQlFVRXNTMEZCU3l4RFFVRkRMRTlCUVVRc1EwRkJURHRCUVVOSUxFTkJSa3NzVFVGRlFTeEpRVUZITEV0QlFVc3NTMEZCU3l4TlFVRk5MRU5CUVVNc1EwRkJSQ3hEUVVGb1FpeEpRVUYzUWl4TFFVRkxMRXRCUVVzc1RVRkJUU3hEUVVGRExFTkJRVVFzUTBGQk0wTXNSVUZCSzBNN1FVRkRha1FzUlVGQlFTeExRVUZMTEVOQlFVTXNUMEZCUkN4RFFVRk1PMEZCUTBnc1EwRkdTeXhOUVVkR08wRkJRMEVzUlVGQlFTeExRVUZMTEVOQlFVTXNTMEZCUkN4RFFVRk1PMEZCUTBnN08wRkJSMFFzU1VGQlNTeEpRVUZKTEVkQlFVY3NUVUZCVFN4RFFVRkRMRmxCUVVRc1EwRkJha0k3TzBGQlEwRXNTVUZCU1N4SlFVRkpMRWRCUVVjc1IwRkJVQ3hKUVVGakxFTkJRV1FzU1VGQmJVSXNTVUZCU1N4SFFVRkhMRU5CUVZBc1NVRkJXU3hEUVVGYUxFbEJRV2xDTEVsQlFVa3NSMEZCUnl4SFFVRlFMRXRCUVdVc1EwRkJka1FzUlVGQk1FUTdRVUZEZEVRc1JVRkJRU3hMUVVGTExFTkJRVU1zVjBGQlJDeERRVUZNTzBGQlEwUXNRMEZHU0N4TlFVVlRPMEZCUTB3c1JVRkJRU3hMUVVGTExFTkJRVVVzYjBKQlFVWXNRMEZCVER0QlFVTkVPenRCUVVkSUxFbEJRVWtzVTBGQlV5eEhRVUZITEUxQlFVMHNRMEZCUXl3eVFrRkJSQ3hEUVVGMFFqdEJRVU5CTEVsQlFVa3NUMEZCVHl4SFFVRkhMRk5CUVZNc1EwRkJReXhMUVVGV0xFTkJRV2RDTEVWQlFXaENMRVZCUVc5Q0xFOUJRWEJDTEVkQlFUaENMRWxCUVRsQ0xFTkJRVzFETEVWQlFXNURMRU5CUVdRN1FVRkJjVVE3TzBGQlEzSkVMRWxCUVVjc1UwRkJVeXhMUVVGTExFOUJRV3BDTEVWQlFYbENPMEZCUTNKQ0xFVkJRVUVzUzBGQlN5eERRVUZETEUxQlFVUXNRMEZCVER0QlFVTklMRU5CUmtRc1RVRkZTenRCUVVORUxFVkJRVUVzUzBGQlN5eERRVUZETEV0QlFVUXNRMEZCVER0QlFVTklPenRCUVVkRUxFbEJRVWtzUjBGQlJ5eEhRVUZITEUxQlFVMHNRMEZCUXl4blFrRkJSQ3hEUVVGb1FqdEJRVU5CTEVsQlFVa3NSMEZCUnl4SFFVRkhMRkZCUVZZN1FVRkRRU3hKUVVGSkxFZEJRVWNzUjBGQlJ5eFBRVUZXTzBGQlEwRXNTVUZCU1N4SFFVRkhMRWRCUVVjc1RVRkJWanRCUVVOQkxFbEJRVWtzUjBGQlJ5eEhRVUZITEUxQlFVMHNRMEZCUXl4blEwRkJSQ3hEUVVGb1FqczdRVUZGUVN4UlFVRlBMRWRCUVZBN1FVRkRTU3hQUVVGTExFdEJRVXc3UVVGRFNTeEpRVUZCTEV0QlFVc3NRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJVQ3hEUVVGTU8wRkJRMEU3TzBGQlEwb3NUMEZCU3l4TFFVRk1PMEZCUTFFc1NVRkJRU3hMUVVGTExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFWQXNRMEZCVER0QlFVTkJPenRCUVVOU0xFOUJRVXNzUzBGQlREdEJRVU5KTEVsQlFVRXNTMEZCU3l4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGUUxFTkJRVXc3UVVGRFFUdEJRVlJTT3p0QlFXTkJMRWxCUVVrc1kwRkJZeXhIUVVGSExFMUJRVTBzUTBGQlF5dzBRa0ZCUkN4RFFVRXpRanM3UVVGRFFTeEpRVUZKTEdOQlFXTXNTVUZCU1N4SFFVRnNRaXhKUVVGNVFpeGpRVUZqTEVsQlFVY3NSMEZCT1VNc1JVRkJiVVE3UVVGREwwTXNSVUZCUVN4TFFVRkxMRU5CUVVVc05rSkJRVGhDTEdOQlFXTXNSMEZCUnl4SFFVRnFRaXhIUVVGMVFpeERRVUY0UWl4SFFVRTJRaXhqUVVFeFJDeERRVUZHTEVOQlFVdzdRVUZEU0N4RFFVWkVMRTFCUlUwc1NVRkJSeXhqUVVGakxFbEJRVWtzUjBGQmJFSXNTVUZCZVVJc1kwRkJZeXhKUVVGSExFZEJRVGRETEVWQlFXdEVPMEZCUTNCRUxFVkJRVUVzUzBGQlN5eERRVUZGTERaQ1FVRTRRaXhqUVVGakxFZEJRVWNzUjBGQmFrSXNSMEZCZFVJc1EwRkJlRUlzUjBGQk5rSXNZMEZCTVVRc1EwRkJSaXhEUVVGTU8wRkJRMGdzUTBGR1N5eE5RVVZCTEVsQlFVY3NZMEZCWXl4SlFVRkpMRWRCUVhKQ0xFVkJRVEpDTzBGQlF6ZENMRVZCUVVFc1MwRkJTeXhEUVVGRkxEWkNRVUU0UWl4alFVRmpMRWRCUVVjc1IwRkJha0lzUjBGQmRVSXNRMEZCZUVJc1IwRkJOa0lzWTBGQk1VUXNRMEZCUml4RFFVRk1PMEZCUTBnc1EwRkdTeXhOUVVWRU8wRkJRMFFzUlVGQlFTeExRVUZMTEVOQlFVTXNhMEpCUVVRc1EwRkJURHRCUVVOSU96dEJRVVZFTEVsQlFVa3NUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJSU3h6UWtGQlJpeERRVUZ3UWp0QlFVTkJMRWxCUVVrc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlJTeDNRa0ZCUml4RFFVRnVRanRCUVVOQkxFbEJRVWtzWVVGQllTeEhRVUZITEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhGUVVGb1FpeEZRVUZ2UWl4UFFVRndRaXhEUVVFMFFpeERRVUUxUWl4RFFVRndRanM3UVVGRlFTeEpRVUZKTEdGQlFXRXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJPVUlzUlVGQlowTTdRVUZETlVJc1JVRkJRU3hMUVVGTExFTkJRVU1zZDBKQlFVUXNRMEZCVER0QlFVTklMRU5CUmtRc1RVRkhTU3hMUVVGTExFTkJRVU1zYVVOQlFVUXNRMEZFU0RzN1FVRkpUaXhKUVVGSkxHRkJRV0VzUjBGQlJ5eE5RVUZOTEVOQlFVTXNkMFJCUVVRc1EwRkJNVUk3UVVGRFFTeEpRVUZKTEdOQlFXTXNSMEZCUnl4TlFVRk5MRU5CUVVNc2MwTkJRVVFzUTBGQk0wSTdRVUZEUVN4SlFVRkpMR0ZCUVdFc1IwRkJSeXhOUVVGTkxFTkJRVU1zZVVSQlFVUXNRMEZCTVVJN1FVRkRRU3hKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZhT3p0QlFVVkJMRWxCUVVjc1lVRkJZU3hMUVVGTExFOUJRWEpDTEVWQlFUWkNPMEZCUTNwQ0xFVkJRVUVzUzBGQlN5eEpRVUZKTEVOQlFWUTdRVUZEU0RzN1FVRkRSQ3hKUVVGSExHTkJRV01zUzBGQlN5eEpRVUYwUWl4RlFVRXlRanRCUVVOMlFpeEZRVUZCTEV0QlFVc3NTVUZCU1N4RFFVRlVPMEZCUTBnN08wRkJRMFFzU1VGQlJ5eGhRVUZoTEV0QlFVc3NUVUZCY2tJc1JVRkJORUk3UVVGRGVFSXNSVUZCUVN4TFFVRkxMRWxCUVVrc1EwRkJWRHRCUVVOSU96dEJRVU5FTEV0QlFVc3NRMEZCUXl4TFFVRkVMRU5CUVV3aUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdWa0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaWhtZFc1amRHbHZiaWdwZTJaMWJtTjBhVzl1SUhJb1pTeHVMSFFwZTJaMWJtTjBhVzl1SUc4b2FTeG1LWHRwWmlnaGJsdHBYU2w3YVdZb0lXVmJhVjBwZTNaaGNpQmpQVndpWm5WdVkzUnBiMjVjSWowOWRIbHdaVzltSUhKbGNYVnBjbVVtSm5KbGNYVnBjbVU3YVdZb0lXWW1KbU1wY21WMGRYSnVJR01vYVN3aE1DazdhV1lvZFNseVpYUjFjbTRnZFNocExDRXdLVHQyWVhJZ1lUMXVaWGNnUlhKeWIzSW9YQ0pEWVc1dWIzUWdabWx1WkNCdGIyUjFiR1VnSjF3aUsya3JYQ0luWENJcE8zUm9jbTkzSUdFdVkyOWtaVDFjSWsxUFJGVk1SVjlPVDFSZlJrOVZUa1JjSWl4aGZYWmhjaUJ3UFc1YmFWMDllMlY0Y0c5eWRITTZlMzE5TzJWYmFWMWJNRjB1WTJGc2JDaHdMbVY0Y0c5eWRITXNablZ1WTNScGIyNG9jaWw3ZG1GeUlHNDlaVnRwWFZzeFhWdHlYVHR5WlhSMWNtNGdieWh1Zkh4eUtYMHNjQ3h3TG1WNGNHOXlkSE1zY2l4bExHNHNkQ2w5Y21WMGRYSnVJRzViYVYwdVpYaHdiM0owYzMxbWIzSW9kbUZ5SUhVOVhDSm1kVzVqZEdsdmJsd2lQVDEwZVhCbGIyWWdjbVZ4ZFdseVpTWW1jbVZ4ZFdseVpTeHBQVEE3YVR4MExteGxibWQwYUR0cEt5c3BieWgwVzJsZEtUdHlaWFIxY200Z2IzMXlaWFIxY200Z2NuMHBLQ2tpTENKc1pYUWdiblZ0SUQwZ2NISnZiWEIwS0NkRmJuUmxjaUJ1ZFcxaVpYSW5LVHRjY2x4dUlITjNhWFJqYUNodWRXMHBlMXh5WEc0Z0lDQWdJR05oYzJVZ0p6RW5PbHh5WEc0Z0lDQWdJQ0FnSUdGc1pYSjBLQ2NoSnlsY2NseHVJQ0FnSUNBZ0lDQmljbVZoYXp0Y2NseHVJQ0FnSUNCallYTmxJQ2N5SnpwY2NseHVJQ0FnSUNBZ0lDQmhiR1Z5ZENnblFDY3BYSEpjYmlBZ0lDQWdJQ0FnWW5KbFlXczdYSEpjYmlBZ0lDQmpZWE5sSUNjekp6cGNjbHh1SUNBZ0lDQWdJQ0JoYkdWeWRDZ25JeWNwWEhKY2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEhKY2JpQWdJQ0JqWVhObElDYzBKenBjY2x4dUlDQWdJQ0FnSUNCaGJHVnlkQ2duSkNjcFhISmNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hISmNiaUFnSUNCallYTmxJQ2MxSnpwY2NseHVJQ0FnSUNBZ0lDQmhiR1Z5ZENnbkpTY3BYSEpjYmlBZ0lDQWdJQ0FnWW5KbFlXczdYSEpjYmlBZ0lDQmpZWE5sSUNjMkp6cGNjbHh1SUNBZ0lDQWdJQ0JoYkdWeWRDZ25YaWNwWEhKY2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEhKY2JpQWdJQ0JqWVhObElDYzNKenBjY2x4dUlDQWdJQ0FnSUNCaGJHVnlkQ2duSmljcFhISmNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hISmNiaUFnSUNCallYTmxJQ2M0SnpwY2NseHVJQ0FnSUNBZ0lDQmhiR1Z5ZENnbktpY3BYSEpjYmlBZ0lDQWdJQ0FnWW5KbFlXczdYSEpjYmlBZ0lDQmpZWE5sSUNjNUp6cGNjbHh1SUNBZ0lDQWdJQ0FnWVd4bGNuUW9KeWduS1Z4eVhHNGdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2NseHVJQ0FnSUdOaGMyVWdKekFuT2x4eVhHNGdJQ0FnSUNBZ0lHRnNaWEowS0NjcEp5bGNjbHh1SUNBZ0lDQWdJQ0JpY21WaGF6c2dJQ0FnWEhKY2JpQjlJRnh5WEc1Y2NseHVYSEpjYm14bGRDQmhaMlVnUFNCd2NtOXRjSFFvSjBWdWRHVnlJSGx2ZFhJZ1lXZGxKeWs3WEhKY2JseHlYRzVwWmlBb1lXZGxJRHc5SURJcGUxeHlYRzRnSUNBZ1lXeGxjblFvSjJOb2FXeGtKeWxjY2x4dWZXVnNjMlVnYVdZZ0tHRm5aU0E4UFRFNEtYdGNjbHh1SUNBZ0lHRnNaWEowS0NkMFpXVnVKeWxjY2x4dWZXVnNjMlVnYVdZb0lHRm5aU0E4UFNBMk1DbDdYSEpjYmlBZ0lDQmhiR1Z5ZENnbllXUjFiSFFuS1Z4eVhHNTlaV3h6Wlh0Y2NseHVJQ0FnSUdGc1pYSjBLQ2R3Wlc1ekp5bGNjbHh1ZlZ4eVhHNWNjbHh1YkdWMElHNTFiV0psY2lBOUlIQnliMjF3ZENnblpXNTBaWElnYm5WdFltVnlKeWs3SUZ4eVhHNXNaWFFnWm1seWMzUWdQU0J1ZFcxaVpYSmJNRjA3WEhKY2JteGxkQ0J6WldOdmJtUWdQU0J1ZFcxaVpYSmJNVjA3WEhKY2JteGxkQ0IwYUdseVpDQTlJRzUxYldKbGNsc3lYVHRjY2x4dWFXWWdLR1pwY25OMElEMDlQU0J1ZFcxaVpYSmJNVjBnZkh3Z1ptbHljM1FnUFQwOUlHNTFiV0psY2xzeVhTbDdYSEpjYmlBZ0lDQmhiR1Z5ZENnblpYRjFZV3duS1Z4eVhHNTlaV3h6WlNCcFppaHpaV052Ym1RZ1BUMDlJRzUxYldKbGNsc3dYU0I4ZkNCelpXTnZibVFnUFQwOUlHNTFiV0psY2xzeVhTbDdYSEpjYmlBZ0lDQmhiR1Z5ZENnblpYRjFZV3duS1Z4eVhHNTlaV3h6WlNCcFppaDBhR2x5WkNBOVBUMGdiblZ0WW1WeVd6QmRJSHg4SUNCMGFHbHlaQ0E5UFQwZ2JuVnRZbVZ5V3pGZEtYdGNjbHh1SUNBZ0lHRnNaWEowS0NkbGNYVmhiQ2NwWEhKY2JuMWNjbHh1Wld4elpYdGNjbHh1SUNBZ0lHRnNaWEowS0NkdWIzUW5LVnh5WEc1OVhISmNibHh5WEc1Y2NseHViR1YwSUhsbFlYSWdQU0J3Y205dGNIUW9KMFZ1ZEdWeUlIbGxZWEluS1Z4eVhHNXBaaUFvZVdWaGNpQWxJRFF3TUNBOVBTQXdJSHg4SUhsbFlYSWdKU0EwSUQwOUlEQWdKaVlnZVdWaGNpQWxJREV3TUNBaFBUMGdNQ2tnZTF4eVhHNGdJQ0FnWVd4bGNuUW9KMHhsWVhBZ2VXVmhjaWNwWEhKY2JpQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lHRnNaWEowSUNnbldXVmhjaUJwY3lCdWIzUWdZU0JzWldGd0p5bGNjbHh1SUNCOVhISmNibHh5WEc1Y2NseHViR1YwSUhCaGJHbHVaSEp2YlNBOUlIQnliMjF3ZENnblJXNTBaWElnWVNCbWFYWmxJR1JwWjJsMElHNTFiV0psY2ljcE8xeHlYRzVzWlhRZ2NtVjJaWEp6WlNBOUlIQmhiR2x1WkhKdmJTNXpjR3hwZENnbkp5a3VjbVYyWlhKelpTZ3BMbXB2YVc0b0p5Y3BPenRjY2x4dWFXWW9jR0ZzYVc1a2NtOXRJRDA5UFNCeVpYWmxjbk5sS1h0Y2NseHVJQ0FnSUdGc1pYSjBLQ2QwY25WbEp5bGNjbHh1ZldWc2MyVjdYSEpjYmlBZ0lDQmhiR1Z5ZENnbmJtOXVKeWxjY2x4dWZTQWdJRnh5WEc1Y2NseHVYSEpjYm14bGRDQjFjMlFnUFNCd2NtOXRjSFFvSjBWdWRHVnlJSGx2ZFhJZ2MzVnRKeWs3WEhKY2JteGxkQ0JsZFhJZ1BTQXdMamt3TXpJMk1UdGNjbHh1YkdWMElIVmhiaUE5SURJekxqa3pPVEk3WEhKY2JteGxkQ0JoZW00Z1BTQXhMamN3TURBN1hISmNibXhsZENCemRXMGdQU0J3Y205dGNIUW9KMk5vYjI5elpTQmpkWEp5Wlc1amVUcEZWVklzVlVGT0lHOXlJRUZhVGljcE8xeHlYRzVjY2x4dWMzZHBkR05vS0hOMWJTbDdYSEpjYmlBZ0lDQmpZWE5sSUNkRlZWSW5PbHh5WEc0Z0lDQWdJQ0FnSUdGc1pYSjBLSFZ6WkNBcUlHVjFjaWs3WEhKY2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEhKY2JpQWdJQ0JqWVhObElDZFZRVTRuT2x4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JoYkdWeWRDaDFjMlFnS2lCMVlXNHBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2NseHVJQ0FnSUdOaGMyVWdKMEZhVGljNlhISmNiaUFnSUNBZ0lDQWdZV3hsY25Rb2RYTmtJQ29nWVhwdUtUdGNjbHh1SUNBZ0lDQWdJQ0JpY21WaGF6dGNjbHh1ZlZ4eVhHNWNjbHh1WEhKY2JseHlYRzVzWlhRZ2NIVnlZMmhoYzJWQmJXOTFiblFnUFNCd2NtOXRjSFFvSjBWdWRHVnlJSGx2ZFhJZ2NIVnlZMmhoYzJVZ1lXMXZkVzUwSnlrN1hISmNibWxtSUNod2RYSmphR0Z6WlVGdGIzVnVkQ0ErUFNBeE1EQWdKaVlnY0hWeVkyaGhjMlZCYlc5MWJuUWdQRDB6TURBZ0tYdGNjbHh1SUNBZ0lHRnNaWEowSUNnbldXOTFjaUJrYVhOamIzVnVkR1ZrSUdGdGIzVnVkQ0FuSUNzZ0tDaHdkWEpqYUdGelpVRnRiM1Z1ZENBdklERXdNQ0FxSURNcElDMGdjSFZ5WTJoaGMyVkJiVzkxYm5RcEtWeHlYRzU5Wld4elpTQnBaaWh3ZFhKamFHRnpaVUZ0YjNWdWRDQStQU0F6TURBZ0ppWWdjSFZ5WTJoaGMyVkJiVzkxYm5RZ1BEMDFNREFnS1h0Y2NseHVJQ0FnSUdGc1pYSjBJQ2duV1c5MWNpQmthWE5qYjNWdWRHVmtJR0Z0YjNWdWRDQW5JQ3NnS0Nod2RYSmphR0Z6WlVGdGIzVnVkQ0F2SURFd01DQXFJRFVwSUMwZ2NIVnlZMmhoYzJWQmJXOTFiblFwS1Z4eVhHNTlaV3h6WlNCcFppaHdkWEpqYUdGelpVRnRiM1Z1ZENBK1BTQTFNREFnSUNsN1hISmNiaUFnSUNCaGJHVnlkQ0FvSjFsdmRYSWdaR2x6WTI5MWJuUmxaQ0JoYlc5MWJuUWdKeUFySUNnb2NIVnlZMmhoYzJWQmJXOTFiblFnTHlBeE1EQWdLaUEzS1NBdElIQjFjbU5vWVhObFFXMXZkVzUwS1NsY2NseHVmV1ZzYzJWN1hISmNiaUFnSUNCaGJHVnlkQ2duWVhOMFlXeGhkbWx6ZEdFZ1ltRmllU2NwWEhKY2JuMGdJQ0FnWEhKY2JseHlYRzVzWlhRZ1kybHlZMnhsY3lBOUlIQnliMjF3ZENBb0owVnVkR1Z5SUd4bGJtZDBhQ0JqYVhKamJHVnpKeWs3WEhKY2JteGxkQ0J6Y1hWaGNtVWdQU0J3Y205dGNIUWdLQ2RGYm5SbGNpQnpjWFZoY21VZ2NHVnlhVzFsZEdWeUp5azdYSEpjYm14bGRDQmphWEpqYkdWRWFXRnRaWFJ5SUQwZ0tHTnBjbU5zWlhNZ0x5Qk5ZWFJvTGxCSktTNTBiMFpwZUdWa0tESXBPMXh5WEc1Y2NseHVhV1lnS0dOcGNtTnNaVVJwWVcxbGRISWdQRDBnYzNGMVlYSmxJQzhnTkNsN1hISmNiaUFnSUNCaGJHVnlkQ2duMEtGcGNtTnNaU0JtYVhRZ2FXNGdZU0J6Y1hWaGNtVW5LVnh5WEc1OVpXeHpaU0FvWEhKY2JpQWdJQ0JoYkdWeWRDZ24wS0ZwY21Oc1pTQmtiMlZ6SUc1dmRDQm1hWFFnYVc0Z1lTQnpjWFZoY21VbktWeHlYRzRwWEhKY2JseHlYRzVzWlhRZ2NYVmxjM1JwYjI1R2FYSnpkQ0E5SUhCeWIyMXdkQ2duVjJoaGRDQnBjeUIwYUdVZ1kyRndhWFJoYkNCdlppQkdjbUZ1WTJVNklGQmhjbWx6TEU1aGNtNXBZU0J2Y2lCTWIyNWtiMjQvSnlrN1hISmNibXhsZENCeGRXVnpkR2x2YmxObFkyOXVaQ0E5SUhCeWIyMXdkQ2duU0c5M0lHMTFZMmdnZDJsc2JDQXhNQ0FySURFd09pQXlOQ3dnTWpFZ2IzSWdNakEvSnlrN1hISmNibXhsZENCeGRXVnpkR2x2YmxSb2FYSmtJRDBnY0hKdmJYQjBLQ2RYYUdGMElIbGxZWElnWkdsa0lIUm9aU0JDWlhKc2FXNGdWMkZzYkNCbVlXeHNPaUF4T1RnNUxDQXhPVGt3SUc5eUlERTVPRGcvSnlrN1hISmNibXhsZENCelkyOXlaU0E5SURBN1hISmNibHh5WEc1cFppaHhkV1Z6ZEdsdmJrWnBjbk4wSUQwOVBTQW5VR0Z5YVhNbktYdGNjbHh1SUNBZ0lITmpiM0psSUNzOUlESTdYSEpjYm4xY2NseHVhV1lvY1hWbGMzUnBiMjVUWldOdmJtUWdQVDA5SUNjeU1DY3BlMXh5WEc0Z0lDQWdjMk52Y21VZ0t6MGdNanRjY2x4dWZWeHlYRzVwWmloeGRXVnpkR2x2YmxSb2FYSmtJRDA5UFNBbk1UazRPU2NwZTF4eVhHNGdJQ0FnYzJOdmNtVWdLejBnTWp0Y2NseHVmVnh5WEc1aGJHVnlkQ2h6WTI5eVpTazdYSEpjYmx4eVhHNWNjbHh1SWwxOSJ9