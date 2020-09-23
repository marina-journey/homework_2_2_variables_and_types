// Вывести в консоль произвольные значения 5 разными методами (имеется в виду методы объекта console)

let myFirstTry = 'my first try';
console.log(myFirstTry);

console.log('Hi');
console.warn('Warning!');
console.error('Error');
console.info('Information');

//Среднее арифметическое:
//Запросить у пользователя последовательно несколько числовых значений и вывести в консоль их среднее арифметическое

// let num1 = +prompt('Назовите первое число');
// console.log(num1);
// let num2 = +prompt('Назовите второе число');
// console.log(num2);
// let num3 = +prompt('Назовите третье число');
// console.log(num3);
// let result = (num1 + num2 + num3) / 3;
// console.log(result);

//(Усложнить) Запросить у пользователя ввести числа через запятую. Вывести в консоль среднее арифметическое
// let numbers = prompt('Назовите 3 числа через запятую').split(',');
// console.log(numbers);
// var result = 0;
// for (var i = 0; i < numbers.length; i++) {
//     result += parseInt(numbers[i]);
// }
// console.log(result/3);



// Запросить у пользователя год рождения. Вывести в консоль возраст пользователя.
let yearOfBirth = prompt('What is your year of birth?');
let presentYear = 2020;
let userAge = presentYear - yearOfBirth;

if (yearOfBirth < 2020 && yearOfBirth > 1920) {
    console.log('Your age is - ', userAge);
} else {
    console.log('Your year of birth is incorrect! Sorry, I cannot tell your age!');
}




