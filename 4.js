// Ваша задача — написать функцию, которая увеличивает строку, чтобы создать новую строку.
// Если строка уже заканчивается числом, число должно быть увеличено на 1.
// Если строка не заканчивается цифрой. число 1 должно быть добавлено к новой строке.

let str = 'foobar023'; 

function incrementString (string) {
    let regex = /\d+$/; 
    let result = string.match(regex);
    let numberOfDigit;
    if (result) {
        numberOfDigit = result[0].length;
        let number = (parseInt(result[0]) + 1).toString();
        number = number.padStart(numberOfDigit, "0");
        let newString = string.substring(0, string.lastIndexOf(result[0])) + number;
        return newString;
    } else {
        return string + "1";
    }
}

console.log(incrementString(str));

// let result = string.replace(/\D/g,'')

// let res = string.substring(0, string.length - result.length);
// let last = Number(result);
// console.log(last);
// return  last == 0 ? res + result.substring(0, result.length -1 ) + 1 : res + ++result;