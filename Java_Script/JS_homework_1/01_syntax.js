alert('Hello');
const NAME = prompt("What is your name?");
alert ("Hello " + NAME);

const thisYear = 2019;
let year = prompt('what year were you born?');
alert(thisYear - year);

let square = 4;
let side = prompt('Enter the length of the side of the square?');
alert(side * square);
 
let pi = 3.14;
let radius = prompt('Enter circle radius');
alert (radius ** 2 * pi);

let distance = prompt ('Enter distance between cities');
let time = prompt ('Enter time');
alert(distance/time );

const euro = 0.907441;
let dolars = prompt('Enter  the dollar amount');
alert(dolars * euro);

let flashMemory = prompt('Enter the flash drive volume in GB');
let sizeFile =  820;
alert(Math.floor(flashMemory / sizeFile * 1024));

let moneyWallet = prompt('How much money do you have?');
let chocolate = prompt('Enter the price of one chocolate bar');
alert(moneyWallet / chocolate);


let rez=prompt('Enter the number');
alert(rez.split("").reverse().join(""));

let sum = prompt('Enter deposit amount');
let percent = 0.05;
let oneYear = 12;
let mounths = 2;
alert(sum * percent / oneYear * mounths);
