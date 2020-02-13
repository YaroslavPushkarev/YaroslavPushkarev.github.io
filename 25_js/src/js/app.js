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
let perfectNumber = function (num = +prompt('Введите число')) {
	// let num = +prompt('Введите число');
	let sum = 0;
	let reminder;
	for(let i = 1 ; i < num - 1; i++){
		reminder = num%i;
		if(reminder === 0){
			sum += i;
		}
	}
	if(num === sum){
		alert(num + ' - совершенное число')
	} else {
		alert(num + ' - не совершенное число')
	};
};

perfectNumber();


