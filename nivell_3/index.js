//Exercici 1: 

const exercici1Button = document.getElementById('rep-letters-butt')

exercici1Button.addEventListener('click', event => {
    const string = document.getElementById('name1').value;
    document.getElementById('name1').value = '';
    const ul = document.getElementById('lettersUl')
    for (let i = 0; i < string.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(string[i]));
        ul.appendChild(li)
    }
})

//Exercici 2: 

const exercici2Button = document.getElementById('find-vowels')

exercici2Button.addEventListener('click', event => {

    const string = document.getElementById('vowels').value;
    document.getElementById('vowels').value = '';
    const ul = document.getElementById('vowelsUl');
    const vowels = /[aeiou]/gi;
    const consonants = /(?![aeiou])[a-z]/gi;
    const numbers = /[0-9]/g

    const vowelsFind = string.match(vowels);
    const consonantsFind = string.match(consonants);
    const numbersFind = string.match(numbers)

    for (let i = 0; i < string.length; i++) {
        const li = document.createElement("li");
        if (vowelsFind.includes(string[i])) {
            li.appendChild(document.createTextNode(`He trobat la vocal ${string[i]}`));
            ul.appendChild(li);
        } else if (consonantsFind.includes(string[i])) {
            li.appendChild(document.createTextNode(`He trobat la consonant ${string[i]}`));
            ul.appendChild(li);
        } else if (numbersFind.includes(string[i])) {
            li.appendChild(document.createTextNode(`Els noms de persones no contenen el número ${string[i]}`));
            ul.appendChild(li);
        } else {
            li.appendChild(document.createTextNode(`Spai`));
            ul.appendChild(li);
        }
    }
})

//Exercici 3: 

const exercici3Button = document.getElementById('letters-occ')

function countOccurrences(arr) {
    return arr.reduce(function (acc, curr) {
        acc[curr] = acc[curr] + 1 || 1
        return acc;
    }, {});
}

exercici3Button.addEventListener('click', event => {
    const string = document.getElementById('map-input').value;
    document.getElementById('map-input').value = '';
    const array = string.split(' ').join('').split('');
    console.log(array)
    let object = countOccurrences(array);
    const ul = document.getElementById('object-list');

    for (let key in object) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`He trobat ${object[key]} ocurrència(s) de la lletra ${key}`));
        ul.append(li)
        console.log(key + " " + object[key])
    }
})

//Exercici 4: 

const exercici4Button = document.getElementById('full-name-button');
const ul = document.getElementById('fullname-list');
exercici4Button.addEventListener('click', event => {
    const firstName = document.getElementById('first-name').value.split('');
    const lastName = document.getElementById('last-name').value.split('');
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';

    let fullName = firstName.concat('', lastName);
    console.log(fullName)
    for (let i = 0; i < fullName.length; i++) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(fullName[i]));
        ul.append(li)
    }
})

//Exercici 1 - nivell 2: 

const exercici5Button = document.getElementById('find-email-button');

exercici5Button.addEventListener('click', event => {
    const string = document.getElementById('email-find').value;
    document.getElementById('email-find').value = '';
    const ul = document.getElementById('find-email');
    let allEmails = string.match(/([\w\u00C0-\u024F.-]+@[\w\u00C0-\u024F.-]+\.[a-z0-9_-]+)/gi);
    let uniqueEmails = []
    console.log('antes', uniqueEmails)

    for (let i = 0; i < allEmails.length; i++) {
        if (uniqueEmails.indexOf(allEmails[i]) === -1) {
            uniqueEmails.push(allEmails[i])
        }
    }
    console.log('despues', uniqueEmails)

    for (let i = 0; i < uniqueEmails.length; i++) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(uniqueEmails[i]));
        ul.append(li)
    }

})






