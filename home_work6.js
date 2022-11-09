/*В программе задан массив, передающий строковые элементы. Напишите программу, которая которая ответит на вопрос: 
присутствует ли в массиве элемент, длина которого больше 5? В качестве ответа необходимо вывести булевый тип true, false.
Пример: [1,2,3,-4,5,-6,7,-8,9,10]
Результат: [-4,-6,-8]*/

let array1 =  [1,2,3,-4,5,-6,7,-8,9,10];

let is_elem = array1.some((elem)=> elem > 5 || elem < -5);
console.log(is_elem);

/* В программе задан массив, передающий числовые элементы. Напишите программу, которая сформирует новый массив из отрицательных чисел заданного массива.
Пример: [1,2,3,-4,5,-6,7,-8,9,10]
Результат: [-4,-6,-8]*/

let array2 = [1,2,3,-4,5,-6,7,-8,9,10];

let negativ_elem = array2.sort().slice((array2.findIndex((elem) => elem < 0)),(array2.findIndex((elem) => elem > 0)));
console.log(negativ_elem);

/*В программе задана переменная numbers, которая хранит массив из чисел. Определите, какое максимальное количество элементов массива numbers
 (в порядке, который реализован в массиве) можно сложить, чтобы их итоговая сумма не превышала 50. Результат выведите в консоль. 
Пример значений переменных: 
let numbers = [10, 20, 33, 55, 100] 
Пример результата: 2*/

let numbers = [10, 20, 33, 55, 100];

let sum_numbers = numbers.reduce((sum, elem) => sum[1] < 50 ? [sum[0] + 1, sum[1] + elem] : sum, [0, 0])[0]
console.log(sum_numbers-1);

/*В программе задана переменная values, которая хранит массив из строк. Определите математическую сумму всех элементов, 
которые при преобразовании в число не вернут значение let values = ["100", "30", "Не число", "20", "Тоже не число"] . 
Результат выведите в консоль. 
Пример значений переменных:
let values = ["100", "30", "Не число", "20", "Тоже не число"] 
Пример результата: 150

*/

let values = ["100", "30", "Не число", "20", "Тоже не число"];

let result = values.map(elem => elem /1).filter(elem => !isNaN(elem)).reduce ((sum,elem) => sum + elem);
console.log(result);

/*В программе заданы два массива array_1 и array_2, элементы которого являются числами. Значения внутри одного массива уникальные. 
Реализуйте функцию intersection, которая принимает в качестве аргументов два массива и возвращает новый массив. 
Он должен содержать значения, которые встречаются в обоих массивах-аргументах, и быть отсортирован по убыванию. 

Пример значений переменных: 
let array_1 = [2, 4, 7, 8, 1] 
let array_2 = [2, 5, 11, 6, 1]

Пример результата: [2, 1]*/

let array_1 = [2, 4, 7, 8, 1]; 
let array_2 = [2, 5, 11, 6, 1];

function intersection (array1,array2){
   let new_array = array1.filter(elem => array2.indexOf(elem) !== -1)
console.log(new_array);
}
intersection (array_1,array_2);