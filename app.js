"use strict";
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
