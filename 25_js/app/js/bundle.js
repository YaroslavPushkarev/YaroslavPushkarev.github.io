(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

//1
// let number = function (num1,num2){
// 	if(num1 < num2){
// 		return '1'
// 	}
// }
// number(2,5);
//2
// function factorial(n) {
//   return (n != 1) ? n * factorial(n - 1) : 1;
// }
// alert( factorial(5));
//3
// let numbers = function(){
// 	let num = prompt('sdd');
// 	let num2 = prompt('sd');
// 	let num3 = prompt('21');
// 	return num+num2+num3;
// }
// alert(numbers());
//4
// let area = function(){
// 	let a = prompt('1');
// 	let b = prompt('2');
// 	if(a == null || b == null){
// 		return alert('+')
// 	}
// 	return alert('-');
// };
// alert(area());
//5
// let perfectNumber = function () {
// 	let num = +prompt('Введите число');
// 	let sum = 0;
// 	let reminder;
// 	for(let i = 1 ; i < num - 1; i++){
// 		reminder = num%i;
// 		if(reminder === 0){
// 			sum += i;
// 		}
// 	}
// 	if(num === sum){
// 		alert(num + ' - совершенное число')
// 	}
// 	return alert(num + ' - не совершенное число');
// };
// perfectNumber();
//6
var perfectNumber = function perfectNumber() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : +prompt('Введите число');
  // let num = +prompt('Введите число');
  var sum = 0;
  var reminder;

  for (var i = 1; i < num - 1; i++) {
    reminder = num % i;

    if (reminder === 0) {
      sum += i;
    }
  }

  if (num === sum) {
    alert(num + ' - совершенное число');
  } else {
    alert(num + ' - не совершенное число');
  }

  ;
};

perfectNumber();

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy8yNV9qcy9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQSxJQUFJLGFBQWEsR0FBRyxTQUFoQixhQUFnQixHQUEwQztBQUFBLE1BQWhDLEdBQWdDLHVFQUExQixDQUFDLE1BQU0sQ0FBQyxlQUFELENBQW1CO0FBQzdEO0FBQ0EsTUFBSSxHQUFHLEdBQUcsQ0FBVjtBQUNBLE1BQUksUUFBSjs7QUFDQSxPQUFJLElBQUksQ0FBQyxHQUFHLENBQVosRUFBZ0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUExQixFQUE2QixDQUFDLEVBQTlCLEVBQWlDO0FBQ2hDLElBQUEsUUFBUSxHQUFHLEdBQUcsR0FBQyxDQUFmOztBQUNBLFFBQUcsUUFBUSxLQUFLLENBQWhCLEVBQWtCO0FBQ2pCLE1BQUEsR0FBRyxJQUFJLENBQVA7QUFDQTtBQUNEOztBQUNELE1BQUcsR0FBRyxLQUFLLEdBQVgsRUFBZTtBQUNkLElBQUEsS0FBSyxDQUFDLEdBQUcsR0FBRyxzQkFBUCxDQUFMO0FBQ0EsR0FGRCxNQUVPO0FBQ04sSUFBQSxLQUFLLENBQUMsR0FBRyxHQUFHLHlCQUFQLENBQUw7QUFDQTs7QUFBQTtBQUNELENBZkQ7O0FBaUJBLGFBQWEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vMVxyXG4vLyBsZXQgbnVtYmVyID0gZnVuY3Rpb24gKG51bTEsbnVtMil7XHJcbi8vIFx0aWYobnVtMSA8IG51bTIpe1xyXG4vLyBcdFx0cmV0dXJuICcxJ1xyXG4vLyBcdH1cclxuLy8gfVxyXG4vLyBudW1iZXIoMiw1KTtcclxuXHJcbi8vMlxyXG4vLyBmdW5jdGlvbiBmYWN0b3JpYWwobikge1xyXG4vLyAgIHJldHVybiAobiAhPSAxKSA/IG4gKiBmYWN0b3JpYWwobiAtIDEpIDogMTtcclxuLy8gfVxyXG5cclxuLy8gYWxlcnQoIGZhY3RvcmlhbCg1KSk7XHJcblxyXG4vLzNcclxuXHJcbi8vIGxldCBudW1iZXJzID0gZnVuY3Rpb24oKXtcclxuLy8gXHRsZXQgbnVtID0gcHJvbXB0KCdzZGQnKTtcclxuLy8gXHRsZXQgbnVtMiA9IHByb21wdCgnc2QnKTtcclxuLy8gXHRsZXQgbnVtMyA9IHByb21wdCgnMjEnKTtcclxuLy8gXHRyZXR1cm4gbnVtK251bTIrbnVtMztcclxuLy8gfVxyXG4vLyBhbGVydChudW1iZXJzKCkpO1xyXG5cclxuLy80XHJcblxyXG4vLyBsZXQgYXJlYSA9IGZ1bmN0aW9uKCl7XHJcbi8vIFx0bGV0IGEgPSBwcm9tcHQoJzEnKTtcclxuLy8gXHRsZXQgYiA9IHByb21wdCgnMicpO1xyXG5cclxuLy8gXHRpZihhID09IG51bGwgfHwgYiA9PSBudWxsKXtcclxuLy8gXHRcdHJldHVybiBhbGVydCgnKycpXHJcbi8vIFx0fVxyXG4vLyBcdHJldHVybiBhbGVydCgnLScpO1xyXG4vLyB9O1xyXG4vLyBhbGVydChhcmVhKCkpO1xyXG5cclxuLy81XHJcblxyXG4vLyBsZXQgcGVyZmVjdE51bWJlciA9IGZ1bmN0aW9uICgpIHtcclxuLy8gXHRsZXQgbnVtID0gK3Byb21wdCgn0JLQstC10LTQuNGC0LUg0YfQuNGB0LvQvicpO1xyXG4vLyBcdGxldCBzdW0gPSAwO1xyXG4vLyBcdGxldCByZW1pbmRlcjtcclxuLy8gXHRmb3IobGV0IGkgPSAxIDsgaSA8IG51bSAtIDE7IGkrKyl7XHJcbi8vIFx0XHRyZW1pbmRlciA9IG51bSVpO1xyXG4vLyBcdFx0aWYocmVtaW5kZXIgPT09IDApe1xyXG4vLyBcdFx0XHRzdW0gKz0gaTtcclxuLy8gXHRcdH1cclxuLy8gXHR9XHJcbi8vIFx0aWYobnVtID09PSBzdW0pe1xyXG4vLyBcdFx0YWxlcnQobnVtICsgJyAtINGB0L7QstC10YDRiNC10L3QvdC+0LUg0YfQuNGB0LvQvicpXHJcbi8vIFx0fVxyXG4vLyBcdHJldHVybiBhbGVydChudW0gKyAnIC0g0L3QtSDRgdC+0LLQtdGA0YjQtdC90L3QvtC1INGH0LjRgdC70L4nKTtcclxuLy8gfTtcclxuXHJcbi8vIHBlcmZlY3ROdW1iZXIoKTtcclxuXHJcbi8vNlxyXG5sZXQgcGVyZmVjdE51bWJlciA9IGZ1bmN0aW9uIChudW0gPSArcHJvbXB0KCfQktCy0LXQtNC40YLQtSDRh9C40YHQu9C+JykpIHtcclxuXHQvLyBsZXQgbnVtID0gK3Byb21wdCgn0JLQstC10LTQuNGC0LUg0YfQuNGB0LvQvicpO1xyXG5cdGxldCBzdW0gPSAwO1xyXG5cdGxldCByZW1pbmRlcjtcclxuXHRmb3IobGV0IGkgPSAxIDsgaSA8IG51bSAtIDE7IGkrKyl7XHJcblx0XHRyZW1pbmRlciA9IG51bSVpO1xyXG5cdFx0aWYocmVtaW5kZXIgPT09IDApe1xyXG5cdFx0XHRzdW0gKz0gaTtcclxuXHRcdH1cclxuXHR9XHJcblx0aWYobnVtID09PSBzdW0pe1xyXG5cdFx0YWxlcnQobnVtICsgJyAtINGB0L7QstC10YDRiNC10L3QvdC+0LUg0YfQuNGB0LvQvicpXHJcblx0fSBlbHNlIHtcclxuXHRcdGFsZXJ0KG51bSArICcgLSDQvdC1INGB0L7QstC10YDRiNC10L3QvdC+0LUg0YfQuNGB0LvQvicpXHJcblx0fTtcclxufTtcclxuXHJcbnBlcmZlY3ROdW1iZXIoKTtcclxuXHJcblxyXG4iXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OWljbTkzYzJWeUxYQmhZMnN2WDNCeVpXeDFaR1V1YW5NaUxDSndjbTlxWldOMGN5OHlOVjlxY3k5emNtTXZhbk12WVhCd0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN1FVTkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSVUU3UVVGRlFUdEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSVUU3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRlFUdEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVWQk8wRkJSVUU3UVVGRFFTeEpRVUZKTEdGQlFXRXNSMEZCUnl4VFFVRm9RaXhoUVVGblFpeEhRVUV3UXp0QlFVRkJMRTFCUVdoRExFZEJRV2RETEhWRlFVRXhRaXhEUVVGRExFMUJRVTBzUTBGQlF5eGxRVUZFTEVOQlFXMUNPMEZCUXpkRU8wRkJRMEVzVFVGQlNTeEhRVUZITEVkQlFVY3NRMEZCVmp0QlFVTkJMRTFCUVVrc1VVRkJTanM3UVVGRFFTeFBRVUZKTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVZvc1JVRkJaMElzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRXhRaXhGUVVFMlFpeERRVUZETEVWQlFUbENMRVZCUVdsRE8wRkJRMmhETEVsQlFVRXNVVUZCVVN4SFFVRkhMRWRCUVVjc1IwRkJReXhEUVVGbU96dEJRVU5CTEZGQlFVY3NVVUZCVVN4TFFVRkxMRU5CUVdoQ0xFVkJRV3RDTzBGQlEycENMRTFCUVVFc1IwRkJSeXhKUVVGSkxFTkJRVkE3UVVGRFFUdEJRVU5FT3p0QlFVTkVMRTFCUVVjc1IwRkJSeXhMUVVGTExFZEJRVmdzUlVGQlpUdEJRVU5rTEVsQlFVRXNTMEZCU3l4RFFVRkRMRWRCUVVjc1IwRkJSeXh6UWtGQlVDeERRVUZNTzBGQlEwRXNSMEZHUkN4TlFVVlBPMEZCUTA0c1NVRkJRU3hMUVVGTExFTkJRVU1zUjBGQlJ5eEhRVUZITEhsQ1FVRlFMRU5CUVV3N1FVRkRRVHM3UVVGQlFUdEJRVU5FTEVOQlprUTdPMEZCYVVKQkxHRkJRV0VpTENKbWFXeGxJam9pWjJWdVpYSmhkR1ZrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpZ3BlMloxYm1OMGFXOXVJSElvWlN4dUxIUXBlMloxYm1OMGFXOXVJRzhvYVN4bUtYdHBaaWdoYmx0cFhTbDdhV1lvSVdWYmFWMHBlM1poY2lCalBWd2lablZ1WTNScGIyNWNJajA5ZEhsd1pXOW1JSEpsY1hWcGNtVW1KbkpsY1hWcGNtVTdhV1lvSVdZbUptTXBjbVYwZFhKdUlHTW9hU3doTUNrN2FXWW9kU2x5WlhSMWNtNGdkU2hwTENFd0tUdDJZWElnWVQxdVpYY2dSWEp5YjNJb1hDSkRZVzV1YjNRZ1ptbHVaQ0J0YjJSMWJHVWdKMXdpSzJrclhDSW5YQ0lwTzNSb2NtOTNJR0V1WTI5a1pUMWNJazFQUkZWTVJWOU9UMVJmUms5VlRrUmNJaXhoZlhaaGNpQndQVzViYVYwOWUyVjRjRzl5ZEhNNmUzMTlPMlZiYVYxYk1GMHVZMkZzYkNod0xtVjRjRzl5ZEhNc1puVnVZM1JwYjI0b2NpbDdkbUZ5SUc0OVpWdHBYVnN4WFZ0eVhUdHlaWFIxY200Z2J5aHVmSHh5S1gwc2NDeHdMbVY0Y0c5eWRITXNjaXhsTEc0c2RDbDljbVYwZFhKdUlHNWJhVjB1Wlhod2IzSjBjMzFtYjNJb2RtRnlJSFU5WENKbWRXNWpkR2x2Ymx3aVBUMTBlWEJsYjJZZ2NtVnhkV2x5WlNZbWNtVnhkV2x5WlN4cFBUQTdhVHgwTG14bGJtZDBhRHRwS3lzcGJ5aDBXMmxkS1R0eVpYUjFjbTRnYjMxeVpYUjFjbTRnY24wcEtDa2lMQ0l2THpGY2NseHVMeThnYkdWMElHNTFiV0psY2lBOUlHWjFibU4wYVc5dUlDaHVkVzB4TEc1MWJUSXBlMXh5WEc0dkx5QmNkR2xtS0c1MWJURWdQQ0J1ZFcweUtYdGNjbHh1THk4Z1hIUmNkSEpsZEhWeWJpQW5NU2RjY2x4dUx5OGdYSFI5WEhKY2JpOHZJSDFjY2x4dUx5OGdiblZ0WW1WeUtESXNOU2s3WEhKY2JseHlYRzR2THpKY2NseHVMeThnWm5WdVkzUnBiMjRnWm1GamRHOXlhV0ZzS0c0cElIdGNjbHh1THk4Z0lDQnlaWFIxY200Z0tHNGdJVDBnTVNrZ1B5QnVJQ29nWm1GamRHOXlhV0ZzS0c0Z0xTQXhLU0E2SURFN1hISmNiaTh2SUgxY2NseHVYSEpjYmk4dklHRnNaWEowS0NCbVlXTjBiM0pwWVd3b05Ta3BPMXh5WEc1Y2NseHVMeTh6WEhKY2JseHlYRzR2THlCc1pYUWdiblZ0WW1WeWN5QTlJR1oxYm1OMGFXOXVLQ2w3WEhKY2JpOHZJRngwYkdWMElHNTFiU0E5SUhCeWIyMXdkQ2duYzJSa0p5azdYSEpjYmk4dklGeDBiR1YwSUc1MWJUSWdQU0J3Y205dGNIUW9KM05rSnlrN1hISmNiaTh2SUZ4MGJHVjBJRzUxYlRNZ1BTQndjbTl0Y0hRb0p6SXhKeWs3WEhKY2JpOHZJRngwY21WMGRYSnVJRzUxYlN0dWRXMHlLMjUxYlRNN1hISmNiaTh2SUgxY2NseHVMeThnWVd4bGNuUW9iblZ0WW1WeWN5Z3BLVHRjY2x4dVhISmNiaTh2TkZ4eVhHNWNjbHh1THk4Z2JHVjBJR0Z5WldFZ1BTQm1kVzVqZEdsdmJpZ3BlMXh5WEc0dkx5QmNkR3hsZENCaElEMGdjSEp2YlhCMEtDY3hKeWs3WEhKY2JpOHZJRngwYkdWMElHSWdQU0J3Y205dGNIUW9KekluS1R0Y2NseHVYSEpjYmk4dklGeDBhV1lvWVNBOVBTQnVkV3hzSUh4OElHSWdQVDBnYm5Wc2JDbDdYSEpjYmk4dklGeDBYSFJ5WlhSMWNtNGdZV3hsY25Rb0p5c25LVnh5WEc0dkx5QmNkSDFjY2x4dUx5OGdYSFJ5WlhSMWNtNGdZV3hsY25Rb0p5MG5LVHRjY2x4dUx5OGdmVHRjY2x4dUx5OGdZV3hsY25Rb1lYSmxZU2dwS1R0Y2NseHVYSEpjYmk4dk5WeHlYRzVjY2x4dUx5OGdiR1YwSUhCbGNtWmxZM1JPZFcxaVpYSWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNiaTh2SUZ4MGJHVjBJRzUxYlNBOUlDdHdjbTl0Y0hRb0o5Q1MwTExRdGRDMDBMalJndEMxSU5HSDBMalJnZEM3MEw0bktUdGNjbHh1THk4Z1hIUnNaWFFnYzNWdElEMGdNRHRjY2x4dUx5OGdYSFJzWlhRZ2NtVnRhVzVrWlhJN1hISmNiaTh2SUZ4MFptOXlLR3hsZENCcElEMGdNU0E3SUdrZ1BDQnVkVzBnTFNBeE95QnBLeXNwZTF4eVhHNHZMeUJjZEZ4MGNtVnRhVzVrWlhJZ1BTQnVkVzBsYVR0Y2NseHVMeThnWEhSY2RHbG1LSEpsYldsdVpHVnlJRDA5UFNBd0tYdGNjbHh1THk4Z1hIUmNkRngwYzNWdElDczlJR2s3WEhKY2JpOHZJRngwWEhSOVhISmNiaTh2SUZ4MGZWeHlYRzR2THlCY2RHbG1LRzUxYlNBOVBUMGdjM1Z0S1h0Y2NseHVMeThnWEhSY2RHRnNaWEowS0c1MWJTQXJJQ2NnTFNEUmdkQyswTExRdGRHQTBZalF0ZEM5MEwzUXZ0QzFJTkdIMExqUmdkQzcwTDRuS1Z4eVhHNHZMeUJjZEgxY2NseHVMeThnWEhSeVpYUjFjbTRnWVd4bGNuUW9iblZ0SUNzZ0p5QXRJTkM5MExVZzBZSFF2dEN5MExYUmdOR0kwTFhRdmRDOTBMN1F0U0RSaDlDNDBZSFF1OUMrSnlrN1hISmNiaTh2SUgwN1hISmNibHh5WEc0dkx5QndaWEptWldOMFRuVnRZbVZ5S0NrN1hISmNibHh5WEc0dkx6WmNjbHh1YkdWMElIQmxjbVpsWTNST2RXMWlaWElnUFNCbWRXNWpkR2x2YmlBb2JuVnRJRDBnSzNCeWIyMXdkQ2duMEpMUXN0QzEwTFRRdU5HQzBMVWcwWWZRdU5HQjBMdlF2aWNwS1NCN1hISmNibHgwTHk4Z2JHVjBJRzUxYlNBOUlDdHdjbTl0Y0hRb0o5Q1MwTExRdGRDMDBMalJndEMxSU5HSDBMalJnZEM3MEw0bktUdGNjbHh1WEhSc1pYUWdjM1Z0SUQwZ01EdGNjbHh1WEhSc1pYUWdjbVZ0YVc1a1pYSTdYSEpjYmx4MFptOXlLR3hsZENCcElEMGdNU0E3SUdrZ1BDQnVkVzBnTFNBeE95QnBLeXNwZTF4eVhHNWNkRngwY21WdGFXNWtaWElnUFNCdWRXMGxhVHRjY2x4dVhIUmNkR2xtS0hKbGJXbHVaR1Z5SUQwOVBTQXdLWHRjY2x4dVhIUmNkRngwYzNWdElDczlJR2s3WEhKY2JseDBYSFI5WEhKY2JseDBmVnh5WEc1Y2RHbG1LRzUxYlNBOVBUMGdjM1Z0S1h0Y2NseHVYSFJjZEdGc1pYSjBLRzUxYlNBcklDY2dMU0RSZ2RDKzBMTFF0ZEdBMFlqUXRkQzkwTDNRdnRDMUlOR0gwTGpSZ2RDNzBMNG5LVnh5WEc1Y2RIMGdaV3h6WlNCN1hISmNibHgwWEhSaGJHVnlkQ2h1ZFcwZ0t5QW5JQzBnMEwzUXRTRFJnZEMrMExMUXRkR0EwWWpRdGRDOTBMM1F2dEMxSU5HSDBMalJnZEM3MEw0bktWeHlYRzVjZEgwN1hISmNibjA3WEhKY2JseHlYRzV3WlhKbVpXTjBUblZ0WW1WeUtDazdYSEpjYmx4eVhHNWNjbHh1SWwxOSJ9
