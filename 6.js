// Напишите функцию, которая при задании числа >= 0 возвращает массив подмассивов возрастающей длины.\
// Примечание: подмассивы должны быть заполнены 1s

const number = 0;

function pyramid(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(Array.from({length: i}, (_, j) => (j+1)/(j+1)))
    }
    return arr;
}

console.log(pyramid(number));
