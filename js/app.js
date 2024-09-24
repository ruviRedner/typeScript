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
<<<<<<< HEAD
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
=======
const selectFl = document.querySelector(".selectFlight");
const divPasenger = document.querySelector(".containerS");
const agentId = "agent 1";
const baseUrl = "https://66ead5fe55ad32cda47a9f39.mockapi.io/api/";
const getAllFlights = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(`${baseUrl}flights`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const flights = yield res.json();
        // console.log(flights);
        for (const flight of flights) {
            const option = document.createElement("option");
            option.value = flight.id.toString();
            option.textContent = `${flight.from} → ${flight.to} (${flight.date})`;
            selectFl.appendChild(option);
        }
    }
    catch (error) {
        console.error("Error fetching flights:", error);
    }
});
const getALLpasengers = (agentid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(`${baseUrl}pasengers/?agent=${agentid}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const pasengers = yield res.json();
        // console.log(pasengers);
        for (const pasenger of pasengers) {
            const pName = document.createElement("p");
            pName.textContent = `Name: ${pasenger.name}, Gender: ${pasenger.gender}, Flight: ${pasenger.flight_id}`;
            divPasenger.appendChild(pName);
            const editButton = document.createElement("button");
            editButton.textContent = "✏️";
            editButton.id = "editBTN";
            editButton.addEventListener("click", () => {
                const divEdit = document.createElement("div");
                const labelName = document.createElement("label");
                labelName.textContent = "Name:";
                const inputName = document.createElement("input");
                inputName.id = "editInput";
                labelName.appendChild(inputName);
                divEdit.appendChild(labelName);
                const mainDiv = document.createElement("div");
                const h3 = document.createElement("h3");
                h3.textContent = "gender:";
                mainDiv.appendChild(h3);
                const divMale = document.createElement("div");
                const genderName = document.createElement("input");
                genderName.type = "radio";
                genderName.name = "gender";
                genderName.value = "male";
                genderName.textContent = "Male";
                genderName.checked = true;
                const maleName = document.createElement("label");
                maleName.textContent = "Male";
                maleName.appendChild(genderName);
                divMale.appendChild(maleName);
                mainDiv.appendChild(divMale);
                const divFemale = document.createElement("div");
                const femaleName = document.createElement("input");
                femaleName.type = "radio";
                femaleName.name = "gender";
                femaleName.value = "female";
                femaleName.textContent = "Female";
                const femaleLabel = document.createElement("label");
                femaleLabel.textContent = "Female";
                femaleLabel.appendChild(femaleName);
                divFemale.appendChild(femaleLabel);
                mainDiv.appendChild(divFemale);
                divEdit.appendChild(mainDiv);
                const saveButton = document.createElement("button");
                saveButton.textContent = "💾️";
                divEdit.appendChild(saveButton);
                divPasenger.appendChild(divEdit);
                saveButton.addEventListener("click", () => {
                    const selectedGender = document.querySelector('input[name="gender"]:checked');
                    editPasenger(pasenger.id, {
                        name: inputName.value,
                        gender: selectedGender.value
                    });
                    window.location.reload();
                });
            });
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "🗑️";
            deleteButton.id = "deleteBTN";
            deleteButton.addEventListener("click", () => {
                deletePasenger(pasenger.id);
                window.location.reload();
            });
            divPasenger.appendChild(editButton);
            divPasenger.appendChild(deleteButton);
        }
    }
    catch (error) {
        console.log("Error fetching pasengers:", error);
    }
});
const addNewPasenger = (passenger) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(`${baseUrl}pasengers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(passenger)
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const newPassenger = yield res.json();
        console.log("New pasenger added:", newPassenger);
    }
    catch (error) {
        console.error("Error adding new pasenger:", error);
    }
});
const editPasenger = (passengerId, updatedPassenger) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(`${baseUrl}pasengers/${passengerId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedPassenger)
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        console.log("Pasenger updated successfully" + JSON.stringify(updatedPassenger));
    }
    catch (error) {
        console.error("Error editing pasenger:", error);
    }
});
const deletePasenger = (passengerId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(`${baseUrl}pasengers/${passengerId}`, {
            method: 'DELETE'
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        console.log("Pasenger deleted successfully");
    }
    catch (error) {
        console.error("Error deleting pasenger:", error);
    }
});
const btnDel = document.querySelector("#deleteBTN");
const btnAdd = document.querySelector(".btnSent");
const inputName = document.querySelector(".inpName");
const radioName = document.querySelector(".rb");
btnAdd.addEventListener("click", () => {
    addNewPasenger({
        createdAt: "07/19/2024",
        name: inputName.value,
        gender: radioName.value,
        flight_id: selectFl.value,
        agent: agentId
    });
    window.location.reload();
});
getAllFlights();
// addNewPasenger({
//     createdAt: new Date().toISOString(),
//     name: "ruvi",
//     gender: "male",
//     flight_id: "1",
//     agent: agentId
// });
getALLpasengers(agentId);
// editPasenger(14, {
//     createdAt: new Date().toISOString(),
//     name: "ruvi updated test",
//     gender: "male",
//     flight_id: "1",
//     agent: agentId
// });
// deletePasenger(15);
>>>>>>> ad69ebe11a8dddb912033cb147d8cacb4d1e6c78
