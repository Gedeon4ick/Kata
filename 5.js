// Есть массив с некоторыми числами. Все числа равны, кроме одного. Попробуйте найти!
// Гарантируется, что массив содержит не менее 3 чисел.

// Тесты содержат очень большие массивы, так что подумайте о производительности.

const arr1 = [ 1, 2, 1, 1, 1, 1 ];
const arr2 = [  3, 3, 3, 1, 3  ];

function findUniq(arr) {
    return uniqueNum = arr.reduce((a, b) => a ^ b);
}

console.log(findUniq(arr1));



// return result = arr.filter(x => arr.indexOf(x) == arr.lastIndexOf(x)).join();

  