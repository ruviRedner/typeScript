"use strict";
<<<<<<< HEAD
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
const getTasks = async (url) => {
    try {
        const res = await fetch(url);
        // if(res.status === 200) {
        const data = await res.json();
        return data;
        // }
        // else{
        //     throw;
        // }    
    }
    catch (err) {
        throw new Error(err.message);
    }
};
const postTask = async (url, payload) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const result = await response.json();
        return result;
    }
    catch (err) {
        throw new Error(err instanceof Error ? err.message : 'An unknown error occurred');
    }
};
const updateTask = async (url, payload) => {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const result = await response.json();
        return result;
    }
    catch (err) {
        throw new Error(err instanceof Error ? err.message : 'An unknown error occurred');
    }
};
const deleteTask = async (url, taskId) => {
    try {
        await fetch(`${url} + ${taskId}`, {
            method: 'DELETE',
        });
        console.log(`Task with id ${taskId} deleted successfully.`);
    }
    catch (err) {
        throw new Error(err instanceof Error ? err.message : 'An unknown error occurred');
    }
};
=======
const baseUrl = "https://jsonplaceholder.typicode.com/";
const select = document.querySelector("select");
const todos = document.querySelector(".todos");
const btnT = document.querySelector(".btnT");
const btnP = document.querySelector(".btnP");
const getUsers = async () => {
    try {
        const res = await fetch(baseUrl + "users");
        const users = await res.json();
        for (const user of users) {
            const opt = document.createElement("option");
            opt.value = user.id.toString();
            opt.textContent = `${user.name}` + `(${user.username})`;
            select.appendChild(opt);
        }
    }
    catch (e) {
        console.log(e);
    }
};
getUsers();
const getPostsByUser = async () => {
    try {
        const res = await fetch(`${baseUrl}posts?userId=${select.value}`);
        const posts = await res.json();
        todos.innerHTML = "";
        for (const post of posts) {
            const div = document.createElement("div");
            const p = document.createElement("p");
            p.textContent = `(#${post.id}) ${post.body}`;
            div.appendChild(p);
            todos.appendChild(div);
        }
    }
    catch (err) {
        console.log(err);
    }
};
const getTodosByUser = async () => {
    try {
        const res = await fetch(`${baseUrl}todos?userId=${select.value}`);
        const todoos = await res.json();
        // console.log(todoos);
        todos.innerHTML = "";
        for (const todo of todoos) {
            const div = document.createElement("div");
            const titel = document.createElement("p");
            titel.textContent = `(#${todo.id}) ${todo.title}`;
            titel.addEventListener("click", () => {
                alert(`ToDo #${todo.id}:${todo.completed ? "Completed" : "Not Completed"}${todo.title}`);
            });
            div.appendChild(titel);
            todos.appendChild(div);
        }
        // tableBody.innerHTML = "";
        // todos.forEach(todo => {
        //     const row:HTMLTableRowElement = document.createElement("tr");
        //     row.innerHTML = `
        //         <td>${todo.id}</td>
        //         <td>${todo.userId}</td>
        //         <td>${todo.title}</td>
        //         <td>${todo.completed? "Completed" : "Not Completed"}</td>
        //     `;
        //     tableBody.appendChild(row);
        // })    
    }
    catch (e) {
        console.log(e);
    }
};
btnT.addEventListener("click", getTodosByUser);
btnP.addEventListener("click", getPostsByUser);
// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442"
>>>>>>> 4f9db4f15b0c7916efa53a51d5702795c8dd3ce3
