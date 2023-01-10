// Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает ту же строку, но с перевернутыми всеми словами из пяти или более букв (точно так же, как имя этого Ката). Передаваемые строки будут состоять только из букв и пробелов. Пробелы будут включены только в том случае, если присутствует более одного слова.

let str = "Hey fellow warriors";

function spinWords(string){
    const words = string.split(' ')
    for (let i = 0; i<words.length; i++) {
        if (words[i].length >= 5) {
            words[i] =  words[i].split("").reverse().join("");
        }
    }
    return words.join(" ")
}

console.log(spinWords(str));
