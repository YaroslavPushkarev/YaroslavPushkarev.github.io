//1
	let sum = 0;
	let num1 = +prompt("first");
	let num2 = +prompt("second");

	for (let i = num1; i <= num2; i++){
	  sum += i;

	}
	alert(sum);

//2


let x = prompt ('first');
let y = prompt ('second');
function gcd(x,y){
  while (y !== 0) y = x % (x = y);
  return x;
}
alert('Наибольший общий делитель: '+(gcd(x,y)));

//3

let number = prompt('Ведите число');
let i = 1;

 while (i < number) {
  i++;
  if(i > 1 && i <= number && number % i === 0) {
     alert('Делитель числа: '+ i);
     }
}

//4

let numberSum = prompt('Ведите число');
let quantity = 0;
	for (let i = 1; numberSum / i >= 1; i *= 10) {
		quantity ++;
}
alert('Количество цифр в введенном числе: '+ quantity);

//5

let num = [];
for(let i = 1;i <= 10; i++) {
	num[i] = prompt('Ведите число'+i);
}


let negativeNumbers = 0;
let positiveNumbers = 0;
let zero = 0;
let even = 0;
let odd = 0;

for(let i = 0; i < num.length; i++){
	if(num[i] < 0){
		negativeNumbers++;
	}else if(num[i] > 0){
	 positiveNumbers++;
	}else if (num[i] == 0){
		zero++;
	}
	if((num[i] % 2) == 0) {
		even++;
	} else {
		odd++;
	}
}
alert('отрицательных ' + negativeNumbers +','+'положительных: ' + positiveNumbers + ',' + 'нулей: ' + zero + ','+'нечетных: ' + odd +',' +'четных: ' + even);


//6

while(true){
	let calcFirst = +prompt('Enter first number','');
	let calcSecond = +prompt('Enter second number','');
	let calcSign = prompt('Enter sign','');

	switch (calcSign){
		case '+':
			alert(calcFirst + calcSecond);
			break;

		case '-':
		alert(calcFirst - calcSecond);
			break;

		case '/':
			alert(calcFirst / calcSecond);
			break;

		case '*':
		alert(calcFirst * calcSecond);
			break;

		default:
    		alert( 'There are no such values');

		}

	 let question = prompt('Want to continue?');

	 if(question  == null){
	 	break;
	 }
}

//7

let count = prompt('Введите число','')
let step = +prompt('На сколько сдвинуть', '0')
let arr = count.split('');

for(let i = 0; i < step; i++) {
  arr.push(arr.shift())
}
alert(arr.join``);

//8



let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < days.length; i++){

	 alert(days[i]);

	 let question = confirm('Want to continue?');

	 if(question  == false){
	 	break;
	}
}

//9

for(let i = 2; i <= 9; i++) {
	for(let j = 1; j <= 10; j++) {
		document.write(i + " * " + j + " = " + (i
		* j) + "<br>");
	}
	document.write("<br>")

}

