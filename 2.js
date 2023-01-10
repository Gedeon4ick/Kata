// Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу. Например, предложение «Быстрая коричневая лиса перепрыгивает через ленивую собаку» является панграммой, потому что в нем хотя бы один раз используются буквы AZ (регистр значения не имеет) Учитывая строку, определите, является ли она панграммой. Возвращает True, если это так, False, если нет. Не обращайте внимания на цифры и знаки препинания.

let str = "The quick brown fox jumps over the lazy dog";
str = str.split(' ').join('');
console.log(str);


function isPangram(string){
    const regex = /^[A-Za-z]+$/; 
    return regex.test(string)
}

console.log(isPangram(str));