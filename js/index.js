// Задание 1 ==========================================================
// const yodaSays = ["on JavaScript", "programming ", "I like "];
// yodaSays.reverse();
// alert(yodaSays);
// Задание 2 ==========================================================

// let login = prompt('Введите логин ?');
// if (login == 'admin') {
//     let pass = prompt('Введите пароль ?')
//     if (pass == 'BlackOverlord') {
//         alert('Welcome!');
//     }
//     else if (pass == null){
//         alert('Login canceled');
//     }else {
//         alert('Wrong passsword');
//     }

// } else if ((login == null) || (login == '')) {
//     alert('Login canceled !');
// } else {
//     alert('Unknown user');
// }
// Задание 3 ==========================================================
// const drinks = ['milk', 'beer', 'beer', 'milk', 'milk'];
// for (let i = 0; i < drinks.length; i++ ) {

//     // console.log(drinks[i]);

//     if (drinks[i] === 'milk'){
    
//         // alert(drinks);
//         console.log(drinks[i] = 'good');
//     }else if (drinks[i] === 'beer')
//     {
//        console.log(drinks[i] = 'bad');
//     }
    
// }
// console.log(drinks);
// Задание 4 ==========================================================
// let symbol = prompt('Введите символ ?');
// let triangle = '';
// for (i = 1; i <= 7; i++){
//     for(j = 1; j <= 20; j++){
//         triangle += symbol;
//     }
//     triangle += '\n';
// }
// alert(triangle);
// Задание 5 ==========================================================

// let second = prompt('Сколько секунд осталось ?');
// const hours = 3600;
// if (second / hours >= 8) {
//     alert('Осталось 8 часов');
// } else if (second / hours >= 7){
//     alert('Осталось 7 часов');
// }else if (second / hours >= 6){
//     alert('Осталось 6 часов');
// }else if (second / hours >= 5){
//     alert('Осталось 5 часов');
// }else if (second / hours >= 4){
//     alert('Осталось 4 часов');
// }else if (second / hours >= 3){
//     alert('Осталось 3 часов');
// }else if (second / hours >= 2){
//     alert('Осталось 2 часов');
// }else if (second / hours >= 1){
//     alert('Осталось 1 часов');
// }else if (second / hours < 1 ){
//     alert('Осталось менее часов');
// }else {
//     alert('Такое значение не должно быть')
// }
// Задание 6 ==========================================================

// function randomInteger(min, max) {
//     // случайное число от min до (max+1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   }
  



// function randomInt(min, max) {
//     // случайное число от min до (max+1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   }
  
// console.log( randomInt(1, 9));
// console.log(randomInteger(1, 9));

// const firstNumber = randomInt(1, 9);
// const secondNumber = randomInteger(1, 9)
// let result = prompt(`Сколько будет ${firstNumber} * ${secondNumber}`)
// if (result == firstNumber * secondNumber){
//     alert('You are correct!')
// }else {
//     alert('You are wrong ')
// }
// Доп.Задание  

// const firstNumber = prompt('Первое число');
// const secondNumber = prompt('Второе число');
// if (firstNumber > secondNumber){
//     alert('Первое число больше второго');
// }else if (firstNumber < secondNumber){
//     alert('Второе число больше первого');
// }else {
//     alert('Равны')
// }
//2. Упражнение "Сообщение в рамочке" ==========================================================
// let message = prompt('Напишите сообщение');


// let symbol = ''
// for (let i = 0; i < message.length + 4; i++) {
//     symbol = symbol + '*'
// }

// console.log(symbol);

// console.log(`* ${message} *`);

// console.log(symbol);
//3. Упражнение "Количество жизни" ==========================================================
// 3. Упражнение "Количество жизни"
// Необходимо написать программу, которая отобразит пользователю по количеству полных лет, сколько месяцев, дней, минут и секунд он прожил.

// Указания:
// Можно предположить, что в году 365 дней. 
// Дополнительное задание: приблизительно учесть високосные годы, учитывая, что он бывает 1 раз за 4 года.




//4 Упражнение "Среднее арифметическое" ==========================================================
// Создать программу, которая бесконечно спрашивает у пользователя целое число от 1 до 100. Если пользователь вводит не число, пустую строку или не попадающее в критерий число, нужно спросить пользователя заново. Если пользователь нажимает "Отмена", необходимо вывести на экран количество введенных чисел и их среднее арифметическое.
// let sum = 0;
// let k = 0;

// let number = parseInt(prompt('Введите число: '));

// while (number >= 1 && number <= 100) {
  
//     sum += number;
//     k++;
//     number = parseInt(prompt('Введите число: '));
// }

// // вывод суммы
// console.log(`Cреднее арифметическое: ${sum/2}.\n Количество введенных чисел ${k}`);

// Создать программу, которая бесконечно спрашивает у пользователя целое число от 1 до 100. Если пользователь вводит не число, пустую строку или не попадающее в критерий число, нужно спросить пользователя заново. Если пользователь нажимает "Отмена", необходимо вывести на экран количество введенных чисел и их среднее арифметическое.

// let number = prompt('Введите число');
// let result = 0;
// if(isNaN(number) || number == '' || (number < 1 || number > 100))
// {
//     for(let i = 0; i < 5; i++){
//         number = prompt('Введите число');
//         if (isNaN(number) || number == '' || (number < 1 || number > 100)){
//             console.log('rrr');
//         }
//         else if (number === null){
//            console.log(result);
//            break;
//         }
//         else {
//             result += number;
//         }

//         // if ((number !== null) || (number !== '')){
//         //     result += number;
//         // }else {
//         //     alert(result);
//         // }
        
//     }
// }else {
//     alert('no');
// }
// Задание dop ==========================================================
// let string = prompt('введите цифр ');


// if (string.length % 2 == 0){

//     alert('yes');

// }else{
//     alert('no');
// }


// let string = '4444';

// if(string.length % 2)


