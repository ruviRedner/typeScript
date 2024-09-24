"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const baseUrl = "https://jsonplaceholder.typicode.com/";
const select = document.querySelector("select");
const todos = document.querySelector(".todos");
const btnT = document.querySelector(".btnT");
const btnP = document.querySelector(".btnP");
const todoList = [];
const tdInput = document.querySelector(".inp");
const tdChecked = document.querySelector(".seclBool");
const btnAddPost = document.querySelector(".btnAddPost");
const btnPut = document.querySelector(".put");
const btnDel = document.querySelector(".del");
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(baseUrl + "users");
        const users = yield res.json();
        for (const user of users) {
            const opt = document.createElement("option");
            opt.value = user.id.toString();
            opt.textContent = `${user.name}` + `(${user.username})`;
            select.appendChild(opt);
            todoList.push(user);
        }
        console.log(todoList);
    }
    catch (e) {
        console.log(e);
    }
});
getUsers();
const getPostsByUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(`${baseUrl}posts?userId=${select.value}`);
        const posts = yield res.json();
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
});
const getTodosByUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(`${baseUrl}todos?userId=${select.value}`);
        const todoos = yield res.json();
        // console.log(todoos);
        todos.innerHTML = "";
        for (const todo of todoos) {
            const div = document.createElement("div");
            const titel = document.createElement("p");
            const btnDel = document.createElement("button");
            btnDel.textContent = "DELETE";
            titel.textContent = `(#${todo.id}) ${todo.title}`;
            titel.addEventListener("click", () => {
                alert(`ToDo #${todo.id}:${todo.completed ? "Completed" : "Not Completed"}${todo.title}`);
            });
            div.appendChild(titel);
            div.appendChild(btnDel);
            todos.appendChild(div);
            btnDel.addEventListener("click", () => {
                deleteTodo(todo.id);
                div.remove();
            });
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
});
const addTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(baseUrl + "todos", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                title: tdInput.value,
                userId: select.value,
                completed: tdChecked.value,
            })
        });
        const data = yield res.json();
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
});
const updateTodo = (id, newTodo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(`${baseUrl}todos/${id}`, {
            method: "PUT",
            body: JSON.stringify(newTodo),
            headers: {
                "content-type": "application/json"
            }
        });
        const data = yield res.json();
        console.log(data);
        console.log(res.status);
    }
    catch (err) {
        console.log(err);
    }
});
const deleteTodo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(`${baseUrl}todos/${id}`, {
            method: "DELETE"
        });
        console.log(res.status);
    }
    catch (err) {
        console.log(err);
    }
});
btnT.addEventListener("click", getTodosByUser);
btnP.addEventListener("click", getPostsByUser);
btnAddPost.addEventListener("click", () => {
    if (select.value === "" || tdChecked.value === "" || tdInput.value === "") {
        alert("fill all the fileds");
    }
    else {
        addTodo();
    }
});
btnPut.addEventListener("click", () => {
    updateTodo(parseInt(select.value), {
        title: "you are the best",
        completed: true
    });
});
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
