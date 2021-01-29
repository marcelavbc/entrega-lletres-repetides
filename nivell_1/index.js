console.log("Exercici 1:");

const myName = ['M', 'A', 'R', 'C', 'E', 'L', 'A'];
for (let i = 0; i < myName.length; i++) {
    console.log(myName[i])
};

console.log("Exercici 2:");
const userName = "Marcela Vilas Boas Charchar 8";
const getConsonantsAndVowels = (inputString) => {
    const vowels = /[aeiou]/gi;
    const consonants = /(?![aeiou])[a-z]/gi;
    const numbers = /[0-9]/g;

    const vowelsFind = inputString.match(vowels);
    const consonantsFind = inputString.match(consonants);
    const numbersFind = inputString.match(numbers);

    console.log(`Partim del nom ${inputString}`);

    for (let i = 0; i < inputString.length; i++) {
        if (vowelsFind.includes(inputString[i])) {
            console.log(`He trobat la vocal ${inputString[i]}`);
        } else if (consonantsFind.includes(inputString[i])) {
            console.log(`He trobat la consonant ${inputString[i]}`)
        } else if (numbersFind.includes(inputString[i])) {
            console.log(`Els noms de persones no contenen el número ${inputString[i]}`);
        } else {
            console.log(`espai`);
        }
    };
};

getConsonantsAndVowels(userName);

console.log("Exercici 3:");

function countOccurrences(arr) {
    return arr.reduce(function (acc, curr) {
        acc[curr] = acc[curr] + 1 || 1;
        return acc;
    }, {});
};

console.log(countOccurrences(myName));

console.log("Exercici 4:");

const lastName = ['C', 'H', 'A', 'R', 'C', 'H', 'A', 'R'];

let fullName = myName.concat('', lastName);

console.log(fullName);

