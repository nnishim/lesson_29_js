"use strict"
// let num = 10.5, num2 = 20;
// let result = num + num2;
// console.log(result);

/**********************************************************************************************************/

// let firstName = `Нурсултан`,
// 		age = 17,
// 		text = `Привет, меня зовут ${firstName}, мне ${age} лет!`;
// console.log(text);

/**********************************************************************************************************/

// let num1 = parseInt(prompt(`Укажите первое число`)),
// 		num2 = parseInt(prompt(`Укажите второе число`));
// let result1 = num1 + num2,
// 		result2 = num1 - num2,
// 		result3 = num1 * num2,
// 		result4 = num1 / num2;
// let message = `
// ${num1} + ${num2} = ${result1}
// ${num1} - ${num2} = ${result2}
// ${num1} * ${num2} = ${result3}
// ${num1} : ${num2} = ${result4}
// `;
// alert(message);

/**********************************************************************************************************/

// let number = 50, strNum = '50';
// let result = number + strNum;
// console.log(result);

/**********************************************************************************************************/

// let number = parseInt(prompt('Укажите число'));
// console.log(typeof number);

/**********************************************************************************************************/

// let username = prompt('Укажите ваш логин');

// if (username === 'admin') {
// 	console.log('Добро пожаловать');
// } else {
// 	console.log('Не правильный логин');
// }

/**********************************************************************************************************/

// let number = parseInt( prompt(`Укажите число от 1 до 10`) );

// if (number >= 1 && number <= 10) {
// 	console.log(`Ваше число ${number}`);
// } else {
// 	console.log(`Введины неверные данные`);
// }

/**********************************************************************************************************/

// let isAgree = confirm(`Вы согасны с условиями?`);

// if (!isAgree) {
// 	console.log(`Вы не согласны с условиями`);
// } else {
// 	console.log(`Вы согласны с улсовиями`);
// }

/**********************************************************************************************************/

// let age = +prompt(`Укажите ваше число`);

// if (age <= 10) {
// 	console.log(`Посмотрите мультфильм "Босс молокосос"`);
// } else if (age <= 40 ) {
// 	console.log(`Посмотрите "Игру кальмара"`);
// } else if (age <= 60){
// 	console.log(`Чекните Титаник`);
// } else {
// 	console.log(`Чекайте что хотите`);
// }

/**********************************************************************************************************/

// let day = +prompt(`Укажите день недели от 1 до 7`);

// switch (day) {
// 	case 1 : console.log(`Понедельник`); break;
// 	case 2 : console.log(`Вторник`); break;
// 	case 3 : console.log(`Среда`); break;
// 	case 4 : console.log(`Четверг`); break;
// 	case 5 : console.log(`Пятница`); break;
// 	case 6 : console.log(`Суббота`); break;
// 	case 7 : console.log(`Воскресенье`); break;

// 	default: console.log(`Нет такого дня недели`);
// }

/**********************************************************************************************************/

// let isAgree = confirm(`Вы согласны с условием кредите`);

// let result = null;

// if (isAgree) {
// 	result = `Согласился`;
// } else {
// 	result = `Не согласился`;
// }

// let result = isAgree ? "Согласился" : "Не согласился";

// console.log(result);

/**********************************************************************************************************/

// let username = prompt(`Укажите имя пользователя`) || `гость`;

// console.log(username);

/**********************************************************************************************************/

// let 
// 	total = 500, 
// 	cash =  `наличными`,
// 	cashText = 450,
// 	cardCash = `картой`;
// let buy = prompt(`Картой или наличными?`);
// if (buy == `${cardCash}`|| buy >= total){
// 	alert(`Оплата прошла успешно`);
// } else {
// 	alert(`Недостаточно средств`);
// }

/**********************************************************************************************************/

// let solution = prompt(`Сколько будет 2 + 2 / 2?`);
// if (+solution === 3 || solution == `three`) {
// 	alert(`Верно!`);
// } else {
// 	alert(`Неверно(`);
// }

/**********************************************************************************************************/

// let speed = +prompt(`Введите число от 1 до 9`);
// switch (speed) {
// 	case 1:
// 	case 2:
// 	case 3: alert(`Низкая скорость`); break;
// 	case 4:
// 	case 5:
// 	case 6: alert(`Средняя скорость`); break;
// 	case 7:
// 	case 8:
// 	case 9: alert(`Высокая скорость`); break;
// 	default: alert(`Нет такой скорости`);
// }

/**********************************************************************************************************/

// let numbers = [1,2,3,4,5,6];

// let fruits = [`banana`, `mandarin`, `apple`, `ananas`];

// let copy = [...numbers, ...fruits];
// console.log(copy);

/**********************************************************************************************************/

// const user = {
// 	name: `Mike`,
// 	age: 20,
// 	isMarried: true,
// 	social: {
// 		fb: `http://fb.com/mike`,
// 		twitter: `http://twitter.com/mike`
// 	}
// };
// let username = user.name;
// console.log(user.social.twitter);

/**********************************************************************************************************/

// let water = 0;

// do {
// 	console.log(`Наливаем 1л воды в ведро`);
// 	water++;
// } while (water < 10);

/**********************************************************************************************************/

// for (let index = 0; index < 4; index++) {
// 	console.log(index);
// }

// for (let item of fruits){
// 	console.log(item);
// }

/**********************************************************************************************************/

// let table = ``;
// for (let i = 1; i <= 9; i++){
// 	for(let j = 1; j <= 9; j++){
// 		table += (i*j) + ` `;
// 	}
// 	table +=`\n`;
// }
// console.log(table);

/**********************************************************************************************************/

// let isHot = confirm(`вам жарко, хотите мороженое?`);
// if (isHot) {
// 	let iceCream = prompt(`Какое мороженое предпочитаете?(шоколадное | ванильное | фруктовое)`);
// 	switch (iceCream) {
// 		case `шоколадное`: alert(`вот шоколадное`); break;
// 		case `ванильное`: alert(`вот ванильное`); break;
// 		case `фруктовое`: alert(`вот фруктовое`); break;
// 		default: alert(`нет такого мороженного`);
// 	}
// }else{
// 	alert(`не хотите как хотите`);
// }

/**********************************************************************************************************/

// let skills = [`смотреть видосы`, `спать`, `верстать`];
// console.log(`Я умею`, skills[2], `, люблю`, skills[1], `, нравится`, skills[0]);

/**********************************************************************************************************/

// const hero = {
// 	name: `Тор`,
// 	age: 1000,
// 	superStrong: `Гром`,
// 	wins:{
// 		win1: `Сестру`,
// 		win2: `кого-то`,
// 		win3: `кого-то`
// 	}
// }
// console.log(`Привет меня зовут`, hero.name);
// console.log(`Мне`, hero.age, `лет`);
// console.log(`Моя супер сила`, hero.superStrong );
// console.log(`Я победил:`, hero.wins.win1, hero.wins.win2, hero.wins.win3 );

/**********************************************************************************************************/

// let user = prompt(`Введите логин`);
// if (user === `root`) {
// 	let pass = prompt(`Введите пароль`);
// 	if (pass === `secret`) {
// 		alert(`Добро пожаловать!`);
// 	} else {
// 		alert(`Неверный пароль`);
// 	}
// } else if (user === ``){
// 	alert(`Введите логин`);
// } else {
// 	alert(`Вход отменен`)
// }

/**********************************************************************************************************/

// let shots = [
// 	`попал`,
// 	`попал`,
// 	`промах`,
// 	`попал`,
// 	`промах`,
// 	`попал`,
// 	`промах`,
// ];
// let hits = 0;
// let miss = 0;
// for(let i = 0; i < shots.length; i++){
// 	let shot = shots[i];
// 	if (shot === shots[i]) {
// 		console.log(`Количество попаданий:${shot}`);
// 	} else {
// 		console.log(`Количество промахов:${shot}`);
// 	}
// }

/**********************************************************************************************************/

// let symbol = prompt(`Введите символ`);
// let result = ``;
// for (let i = 0; i <= 7; i++) {
// 	for (let j = 0; j <= 21; j++){
// 		if (i === 3 && j === 11) {
// 			result += `😁`;
// 		} else {
// 			result += symbol;
// 		}
// 	}
// 	result += `\n`;
// }
// alert(result);

/**********************************************************************************************************/

// let number1 = +prompt(`Введите первое число`);
// let number2 = +prompt(`Введите второе число`);
// if (number1 > number2) {
// 	alert(`Первое число больше чем второе`);
// } else if (number1 < number2){
// 	alert(`Второе число больше первого`);
// } else {
// 	alert(`Эти числа равны`);
// }

/**********************************************************************************************************/

// let dice1 = Math.floor(Math.random() * 3 + 1);
// let dice2 = Math.floor(Math.random() * 3 + 1);
// let dice3 = Math.floor(Math.random() * 3 + 1);
// if (dice1 === dice2 && dice2 === dice3) {
	// 	console.log(`Вы выиграли`);
	// } else {
		// 	console.log(``);
// }
// console.log(dice1, dice2, dice3);

/**********************************************************************************************************/

// let random1 = Math.floor(Math.random() * 9 + 1);
// let random2 = Math.floor(Math.random() * 9 + 1);
// let table = +prompt(`${random1} * ${random2}`);
// if (random1 * random2 === table) {
// 	alert(`Верно`);
// } else {
// 	alert(`Неверно`);
// }

/**********************************************************************************************************/

// let random1 = Math.floor(Math.random() * 9 + 1);
// let random2 = Math.floor(Math.random() * 9 + 1);
// let table = prompt(`${random1} * ${random2}`);
// while (true) {
// 	if (table === null) {
	// 		break;
	// 	}
	// 	table = parseInt(`${random1} * ${random2}`);
	// 	if (table <= 1000) {
// 		+prompt(`${random1} * ${random2}`)
// 	}
// }

/**********************************************************************************************************/

// let getMessage = function () {
// 	console.log(`Hello function`);
// }
// getMessage();

/**********************************************************************************************************/

// function getMessage() {
// 	console.log(`hello function`);
// }
// getMessage();

/**********************************************************************************************************/

// let getMessage = () => {
// 	console.log(`hello arrow function`);
// };

/**********************************************************************************************************/

// let getRandomNumberFromOneTo = function (limit) {
// 	return Math.floor(Math.random() * limit + 1);
// };
// let result = getRandomNumberFromOneTo(10);
// let result2 = getRandomNumberFromOneTo(100);
// console.log(result, result2);

/**********************************************************************************************************/

// function askForNumber(message,min,max) {
// 	let number;

// 	do {
// 		number = +(prompt(message));
// 	} while (!number || number < min || number > max);
// 	return number;
// }

// let result = askForNumber(`Укажите число от 1 до 10`, 1, 10);

// console.log(result);

/**********************************************************************************************************/

// let animals = [
// 	{name: `Cows`, amount: 7, width: 3},
// 	{name: `Chickens`, amount: 30, width: 3},
// 	{name: `Sheeps`, amount: 20, width: 4},
// 	{name: `Hourses`, amount: 2, width: 2}
// ];

// let fruits = [
// 	{name: `Banana`, amount: 3, width: 3},
// 	{name: `cherry`, amount: 2, width: 3},
// 	{name: `apple`, amount: 7, width: 4},
// 	{name: `pineapple`, amount: 9, width: 2}
// ];

// function printFarmInventory(data ) {
// 	for (let item of data) {
// 		console.log(zeroFill(item.amount, item.width) + ` ` + item.name);
// 	}
// }

// function zeroFill(number, width) {
// 	let string = String(number);
// 	while (string.length < width) {
// 		string = `0` + string;
// 	}
// 	return string;
// }

// printFarmInventory(animals);
// console.log(`--------------------------------`);
// printFarmInventory(fruits);


