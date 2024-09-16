"use strict";
const getMaxValue = (n, b) => {
    return Math.max(n, b);
};
console.log(getMaxValue(5, 10)); // Output: 10

const printMaxValue = (n, b) => {
    console.log(getMaxValue(n, b));
};
printMaxValue(7, 15); // Output: 15
const returnString = (n) => {
    if (n % 2 === 0) {
        return 'Even';
    }
    return 'Odd';
};
console.log(returnString(10)); // Output: Even
const printLengthStr = (str) => {
    return str.length;
};
console.log(printLengthStr('Hello World')); // Output: 11
const printArrayNumbers = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i);
    }
    return arr;
};
console.log(printArrayNumbers(5)); // Output: [0, 1, 2, 3, 4]
const printMaxNumOfArray = (arr) => {
    return Math.max(...arr);
};
console.log(printMaxNumOfArray([5, 10, 15, 20])); // Output: 20
const person = {
    name: 'John Doe',
    age: 25,
    isStudent: true
};
const printPersonDetails = (person) => {
    return `Name: ${person.name}, Age: ${person.age}, Is Student: ${person.isStudent ? 'Yes' : 'No'}`;
};
console.log(printPersonDetails(person)); // Output: Name: John Doe, Age: 25, Is Student: Yes
const isMinorStudent = (person) => {
    return person.age < 18 ? true : false;
};
console.log(isMinorStudent(person)); // Output: false
const renderers = [
    { person: { name: 'John Doe', age: 25, isStudent: true }, favoriteBook: { Title: 'To Kill a Mockingbird', Author: 'Harper Lee', Year: 1960 } },
    { person: { name: 'Jane Doe', age: 30, isStudent: false }, favoriteBook: { Title: '1984', Author: 'George Orwell', Year: 1949 } },
    { person: { name: 'Sam Smith', age: 17, isStudent: true }, favoriteBook: { Title: 'The Great Gatsby', Author: 'F. Scott Fitzgerald', Year: 1 } }
];
const returnOldesReder = (render) => {
    let oldest = render[0];
    for (let i = 1; i < render.length; i++) {
        if (render[i].person.age > oldest.person.age) {
            oldest = render[i];
        }
    }
    return oldest;
    ;
};
console.log(returnOldesReder(renderers)); // Output: { person: { name: 'Jane Doe', age: 30, isStudent: false }, favoriteBook: { Title: '1984}
const returnOldestBook = (render) => {
    let oldestBook = render[0].favoriteBook;
    for (let i = 1; i < render.length; i++) {
        if (render[i].favoriteBook.Year > oldestBook.Year) {
            oldestBook = render[i].favoriteBook;
        }
    }
    return oldestBook;
    ;
};
console.log(returnOldestBook(renderers)); // Output: { Title: '1984', Author: 'George Orwell', Year: 1949}
