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

const iAmConst = 'tryMe!';//Если использовать const при лбъявлении переменной, то её нельзя будет переопределить!
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

const stringData = 'I am String';
const numberData = 42;
const iAmCool = true;
const powerData = 999999999999n;// Для чисел, превышающих обычныые Number в конце ставится n
const charData = Symbol();
const somethingData = undefined;//Итого 6 примитивных типов данных

const userCreatedForTest = {// Тип данных Object
    userNameForTest : 'rndmname',
    userPasswordForTest : 'rndmpassword',
}

const dataTest = null;//И 2 специальных типа данных - Object и null

//А именно:

//Строчный тип данных***********************************************************************
const stringOne = 'И так можно';
const stringTwo = "Ну и так тоже!";
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