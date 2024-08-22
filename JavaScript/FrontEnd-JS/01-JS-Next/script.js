//'use strict'    Плпробуй убрать комментарий :) Чтобы компилятор бил по рукам за ошибки
//console.log(variable); Если вызвать переменную до её создания то будет ошибка!
// Урок 1: Объявление переменной (Инициализация переменной)
let variable;// С помошью ключевого слова let можно позднее переопределить значение переменной
variable=12;
// Простое и быстрое объявление переменной
let message='I am a message';
console.log(message);

message = 'I am a bigger message now!';
console.log(message);

console.log(undef); // используя объявление переменной через var можно вызвать переменную до её создания, однако её значение будет undefined
var undef = 'Haha';
console.log(undef);

const iAmConst = 'tryMe!';//Если использовать const при объявлении переменной, то её нельзя будет переопределить!
//iAmConst = 12;
console.log(iAmConst);

// В итоге имеем 3 различных способа объявления переменной - let, const, var (в порядке убывания популярности)

const assign1 = 12, assign2 = 'iamString', noBitches = true; // так тоже можно объявлять переменные!
const 
highr = 'Jaa',
middl = 'iAm',
lowr = 'daym';
//И так тоже можно!! :)

const ffy = 'Admeen';
const admin = ffy;
console.log(admin);

//Однако можно создать переменную без объявления, но так делать не следует!:
notgood = 'butWorks!';//По новым правилам сначала нужно объявить тип переменной а затем присвоить ей значение
console.log(notgood);//Не следует пользоваться таким способом объявления переменных из-за  нелогичности

//Ключевые слова - зарезервированне слова, которые нельзя использовать для создания переменных!!

//Объявлять переменные можно даже с символов юникода, без учёта регистра, со знаками например $ или _.. и добавлять цифры к имени переменной
//Однако нельзя начинать объявление переменной с цифры!!
const camelCaseVariable = 'I like it!';//CamelCase - это такой способ именования переменной что каждое новое слово кроме первого начинается с заглавной буквы
const SCREAMING_SNAKE_CASE = 'Имеет место быть и Screaming Snake Case - все буквы пишутся в Upper Case и между ними нижний прочерк'//Верхний регистр а слова разделяются подчеркиванием

let notaTion = 'В итоге имеем 3 способа объявления переменных - let , const , var + объявление переменной без указания типа, но используя use strict будет выдана ошибка о некорректности объявления переменной';

//************************************************************************************************************************************************************************************************************ */
//************************************************************************************************************************************************************************************************************ */
//************************************************************************************************************************************************************************************************************ */
const lessonName3 = "Урок 3 - Типы данных, проверка типов, преобразование типов";

const allTypesOfData = "В Языке программирования JavaScript есть 8 типов данных:";

const stringData = 'I am String';// Строчный тип данных
const numberData = 42;//Числовое значение
const iAmCool = true;//Булевый тип данных
const powerData = 999999999999n;// Для чисел, превышающих максимальное значение Number в конце ставится n
const charData = Symbol();// Символьный тип данных
const somethingData = undefined;//Неопределённый тип данных

const userCreatedForTest = {// Тип данных Object
    userNameForTest : 'rndmname',
    userPasswordForTest : 'rndmpassword',
}

const dataTest = null;//И 2 специальных типа данных - Object и null

//А именно:

//Строчный тип данных***********************************************************************
const stringOne = 'И так можно';//Одинарные кавычки
const stringTwo = "Ну и так тоже!";//Двойные кавычки
const stringThree = `Try me!`;//BackTick - ``Shift + Ё или Shift + ~~``, появляется возможность добавлять новые сущности с помощью спец конструкции ${сущность_нейм}

const messageTestHere = `${stringOne}, ${stringTwo}, ${stringThree}`;//Причём, считаются даже пробелы между сущностями!!
console.log(messageTestHere);

//const stringInterpolation = `${varredData}`; Такая конструкция называется интерполяцией строк, в рамках фигурных скобок можно использовать любые ВЫРАЖЕНИЯ JavaScript!
//Например, сложение двух чисел:
const CHISLO_ONE = 15;
const CHISLO_TWO = 27;
const interpolatedSum = `Итак, сумма переданных чисел равна: ${CHISLO_ONE + CHISLO_TWO}`;//пробелы тоже учитываются, так что можно не беспокоиться о забытых где-то пробелах!
console.log(interpolatedSum);
//Однако для конкатенации строк есть и такой костыль:
const concatinationKostyl = 'Сумма с помощью конкатенации строк: ' + (CHISLO_ONE + CHISLO_TWO);
console.log(concatinationKostyl);

const iAmMultiStringBoss = `
hehe
haha
look at me Niakka!`;
function printEnteredData(data) {
    console.log(data);
}
printEnteredData(iAmMultiStringBoss);

//Числовой тип данных ***********************************************************************

const numData_One = 12;
const numData_Two = -100500;
const numData_Three = 162.5;//Через точку!! Не через запятую!! 

const interPolSum = `Here is ur result sir: ${(numData_One + numData_Two + numData_Three)/5}`;
console.log(`${interPolSum}`);
console.log('Ща буит Not A Number - NaN' / `${interPolSum}`);//Данное выражение невозможно вычислить, но ошибкой это не будет, так что результатом будет NaN - Not A Number
//NaN - это специальное особое значение
//Сначала переденное значение в скобках вычисляется, а потом выводится в консоль!
console.log(1 / 0);//Результат деления на ноль будет еще одно специальное значение - Infinity
console.log(-1 / 0);//И ёщё одно - отрицательная бесконечность   -Infinity   !!!!

//Тип данных BigInt - Big Integer, в пределах -9007199254740991 < number < 9007199254740991
const adviceForBigInt = `Если сложить число, выходящее за рамки типа данных number, то такая операция произойдет с коллизией и как результат
вычислится неправильно. Чтобы такого не происходило, следует указывать тип BigInt следующим образом:`;

const beegIntTry = 901291093021903n;
const beegIntTry2 = 1232139n;
const sumOfBeegInts = `Here's your sum of Big Numbers: ${beegIntTry + beegIntTry2}`;
printEnteredData(sumOfBeegInts);//Продолжить с 4:19


//Логический данных (Boolean) Булевый тип ***********************************************************************
const shouldLearnJS = true;//В консоли Булевы значения выводятся фиолетовым цветом, как и Числовые
const isAlreadyLate = false;

const boolNum = 10;
const isTrue = boolNum > 9; //True так как 10 > 9

//Тип данных null ***********************************************************************
//Формально это даже не тип а значение
const iAmNull = null;//Это значит значение либо неизвестно, либо неопределено - используется для создания переменных значение которых будет определено позже

//Тип данных undefined ***********************************************************************
//Означает что значение не было присвоено
let iAmUndefined ;
console.log(iAmUndefined);

//Тип данных Символ ***********************************************************************

const iAmSymbol = Symbol("jaa");
const isTrueee = Symbol("jaa") === iAmSymbol;
console.log(isTrueee);


//Тип данных Объект ***********************************************************************

const user0 = {};//Объект - особенный и самый непростой тип данных в JavaScript и является единственным непримитивным типом данных

const user = {  //Объект - сложный тип данных, более сложная структура - набор ключ : значение
    name : "Mike",
    age : "29",
    isLearning : "true",
};

const arrayIB = [1, 2, 3, true];//Массив так же является объектом
const map = new Map();//Коллекция Map тоже будет объектом
const set = new Set();//Коллекция Set тоже будет объектом
const date = new Date();//В Javascript объектом может быть что угодно, созданное с помощью ключевого слова new!!

//************************************************************************************************************************************************************************************************************ */
//Проверка типов данных - typeof
const varr = true;
console.log(
    typeof varr //Вернёт (покажет) тип данных переменной
);

console.log(
    typeof (11 + 14)
);


//************************************************************************************************************************************************************************************************************ */
//Преобразование типов данных 8:32
//Бывают явные и неявные
const ay1 = 111;
const ay2 = '222';
console.log(ay1 + ay2);//Неявное преобразование числа переменной ay1 в строку
console.log(
    typeof (ay1 + ay2) //String
)

console.log(
    typeof ('12' / '3') //Number, тоже неявное преобразование строк в нечто исчисляемое
);//Однако лучше всегда прибегать к явному преобразованию типов

const Chiclo = 2;
console.log(Chiclo);//Числовые значения выводятся в консоли фиолетовым цветом, так же как и boolean
console.log(String(Chiclo));//Строковые значения выводятся в консоли белым цветом

const booly = true;
console.log(booly);
console.log(String(booly));






function positiveSum(arr) {
  let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i]
        } else {
        sum += 0
        }
    }
    return sum
}

let posi = [];
let anti = [-1, -2, -3, -5, 2];
let doubled = [1, -3, 17, 6, 3, -2 , 4, -7];
console.log(positiveSum(posi));

function positiveSummy(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

console.log(positiveSummy(posi));
//Улучшенная и гораздо более крутая версия функции выше:
console.log(posi.reduce((a, b) => a + (b < 0 ? b : 0),0));
console.log(anti.reduce((a, b) => a + (b < 0 ? 0 : b),1));
console.log(doubled.reduce((a, b) => a + (b > 10 || b < -3 ? 0 : b),0));//9 тк в случае с -3 : -3 < -3 ? -> false. И включит в счёт


const classPoints = [2,6,5];
const yourPoints = 4;
function betterThanAverage(classPoints, yourPoints) {
    let better = true;
    let avg = 0;
    let sum = 0;
    for (let i = 0; i < classPoints.length; i++){
        //console.log(sum); Это первая строка цикла. sum действительно равно 0
        sum += classPoints[i];
        //console.log(sum); Эта строка следует после выполнения операции сложения элемента массива с текущим значением суммы.
    }
    avg = sum / classPoints.length;
    console.log(avg);
    if (yourPoints < avg ) {
        return !better;
    } else {
        return better;
    }
}
console.log(betterThanAverage(classPoints, yourPoints));


const arrY = [1,2,3,4,5];

function callMe(arr) {
    let solution = [];
    let min = undefined;
    let max = undefined;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > min) {
            min += 0;
        } else {
            min = arr[i];
        }
    }

    for (let i = 0; i < arr.length; i++){
        if (arr[i] < max) {
            max += 0;
        } else {           
            max = arr[i];
        }
    }
    solution.push(min);
    solution.push(max);
    return solution
}

callMe(arrY);

//if(arr[i]>max) max = arr[i];КОРОТКАЯ КОНСТРУКЦИЯ если от инструкции интересно только true

function minMax(arr){
    return arr.reduce(function(p, e){
      return [p[0] < e ? p[0] : e, p[1] > e ? p[1] : e];//ПРОИЗВЕДЕНИЕ ИСКУССТВА, по совместительству CAUPEDAH!
    },[arr[0], arr[0]]);
}
console.log(minMax(arrY));


//НЕМНОГО Math:
//Math.abs(число) - покажет абсолютное значение числа (без знаков + или -)
//Math.pow(число, степень) - вернёт число возведённое в степень
//Math.hypot(число,число,...,число) - вернёт квадратный корень суммы квадратов всех введённых чисел!! Оч удобно
//Math.sign(число) - Вернёт -1 если число отрицательное, 0 если 0, 1 если число положительное
//


function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // Expected output: 6
  
  console.log(sum.apply(null, numbers));
  console.log(sum.app)