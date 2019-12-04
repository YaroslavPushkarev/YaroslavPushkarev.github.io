let num = prompt('Enter number');
 switch(num){
     case '1':
        alert('!')
        break;
     case '2':
        alert('@')
        break;
    case '3':
        alert('#')
        break;
    case '4':
        alert('$')
        break;
    case '5':
        alert('%')
        break;
    case '6':
        alert('^')
        break;
    case '7':
        alert('&')
        break;
    case '8':
        alert('*')
        break;
    case '9':
         alert('(')
         break;
    case '0':
        alert(')')
        break;    
 } 


let age = prompt('Enter your age');

if (age <= 2){
    alert('child')
}else if (age <=18){
    alert('teen')
}else if( age <= 60){
    alert('adult')
}else{
    alert('pens')
}

let number = prompt('enter number'); 
let first = number[0];
let second = number[1];
let third = number[2];
if (first === number[1] || first === number[2]){
    alert('equal')
}else if(second === number[0] || second === number[2]){
    alert('equal')
}else if(third === number[0] ||  third === number[1]){
    alert('equal')
}
else{
    alert('not')
}


let year = prompt('Enter year')
if (year % 400 == 0 || year % 4 == 0 && year % 100 !== 0) {
    alert('Leap year')
  } else {
    alert ('Year is not a leap')
  }


let palindrom = prompt('Enter a five digit number');
let reverse = palindrom.split('').reverse().join('');;
if(palindrom === reverse){
    alert('true')
}else{
    alert('non')
}   


let usd = prompt('Enter your sum');
let eur = 0.903261;
let uan = 23.9392;
let azn = 1.7000;
let sum = prompt('choose currency:EUR,UAN or AZN');

switch(sum){
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



let purchaseAmount = prompt('Enter your purchase amount');
if (purchaseAmount >= 100 && purchaseAmount <=300 ){
    alert ('Your discounted amount ' + ((purchaseAmount / 100 * 3) - purchaseAmount))
}else if(purchaseAmount >= 300 && purchaseAmount <=500 ){
    alert ('Your discounted amount ' + ((purchaseAmount / 100 * 5) - purchaseAmount))
}else if(purchaseAmount >= 500  ){
    alert ('Your discounted amount ' + ((purchaseAmount / 100 * 7) - purchaseAmount))
}else{
    alert('astalavista baby')
}    

let circles = prompt ('Enter length circles');
let square = prompt ('Enter square perimeter');
let circleDiametr = (circles / Math.PI).toFixed(2);

if (circleDiametr <= square / 4){
    alert('Сircle fit in a square')
}else (
    alert('Сircle does not fit in a square')
)

let questionFirst = prompt('What is the capital of France: Paris,Narnia or London?');
let questionSecond = prompt('How much will 10 + 10: 24, 21 or 20?');
let questionThird = prompt('What year did the Berlin Wall fall: 1989, 1990 or 1988?');
let score = 0;

if(questionFirst === 'Paris'){
    score += 2;
}
if(questionSecond === '20'){
    score += 2;
}
if(questionThird === '1989'){
    score += 2;
}
alert(score);


