<<<<<<< HEAD
const baseUrl :string = "https://jsonplaceholder.typicode.com/";
const select :HTMLSelectElement = document.querySelector("select")!;
const todos : HTMLDivElement = document.querySelector(".todos")!;
const btnT:HTMLButtonElement = document.querySelector(".btnT")!;
const btnP:HTMLButtonElement = document.querySelector(".btnP")!;
const todoList:User[] = []
const tdInput:HTMLInputElement = document.querySelector(".inp")!
const tdChecked:HTMLSelectElement = document.querySelector(".seclBool")!
const btnAddPost :HTMLButtonElement = document.querySelector(".btnAddPost")!
const btnPut :HTMLButtonElement = document.querySelector(".put")!
const btnDel :HTMLButtonElement = document.querySelector(".del")!







const getUsers = async ():Promise<void> => {
    try{
        const res:Response = await fetch(baseUrl + "users");
        const users:User[] = await res.json();
        for(const user of users){
            const opt:HTMLOptionElement = document.createElement("option");
            opt.value = user.id.toString();
            opt.textContent = `${user.name}` + `(${user.username})`;
            select.appendChild(opt);
            todoList.push(user);   
        }
        console.log(todoList);

        }catch(e) {
            console.log(e);
            
        }
    }
getUsers();

const getPostsByUser = async (): Promise<void> => {
    try{
       const res:Response = await fetch(`${baseUrl}posts?userId=${select.value}`)
       const posts:Post[] = await res.json()
       todos.innerHTML =""
       for(const post of posts){
        const div:HTMLDivElement =document.createElement("div");
        const p:HTMLParagraphElement = document.createElement("p")
        p.textContent =  `(#${post.id}) ${post.body}`
        div.appendChild(p)
        todos.appendChild(div)  
       }
    }catch(err){
        console.log(err);
        
    }
}

const getTodosByUser = async (): Promise<void> => {
    try{
        const res:Response = await fetch(`${baseUrl}todos?userId=${select.value}`);
        const todoos:Todo[] = await res.json();
        // console.log(todoos);
        todos.innerHTML = "";
        for(const todo of todoos){
            const div:HTMLDivElement = document.createElement("div");
            const titel:HTMLParagraphElement = document.createElement("p");
            const btnDel:HTMLButtonElement = document.createElement("button")
            btnDel.textContent = "DELETE"
            titel.textContent = `(#${todo.id}) ${todo.title}`;
            titel.addEventListener("click",()=>{
                alert(`ToDo #${todo.id}:${todo.completed ? "Completed" : "Not Completed"}${todo.title}`);
                });
                div.appendChild(titel);
                div.appendChild(btnDel)
                todos.appendChild(div);
            btnDel.addEventListener("click",()=>{
                deleteTodo(todo.id)
                div.remove()
            })
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
    }catch(e) {
        console.log(e);
    }
}
const addTodo = async ():Promise<void> =>{
    try{
        const res:Response = await fetch(baseUrl + "todos",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                title:tdInput.value,
                userId:select.value,
                completed:tdChecked.value,
                
            })
        })
        const data:Todo = await res.json()
        console.log(data);
    }catch(err){
        console.log(err);
        
    }
   
    
}
const updateTodo = async (id:number,newTodo:Partial<Todo>) : Promise<void> =>{
    try{
        const res:Response = await fetch(`${baseUrl}todos/${id}`,
         {
            method:"PUT",
            body:JSON.stringify(newTodo),
            headers:{
                "content-type":"application/json"
            }
         })
         const data:Todo = await res.json()
         console.log(data);
         console.log(res.status);    
    }catch(err){
        console.log(err);
        
    }
}
const deleteTodo = async (id:number) :Promise<void>=>{
    try{
        const res:Response = await fetch(`${baseUrl}todos/${id}`,{
            method:"DELETE"
        })
        console.log(res.status);
        
    }catch(err){
        console.log(err);
        
    }
}


btnT.addEventListener("click", getTodosByUser); 
btnP.addEventListener("click",getPostsByUser)
btnAddPost.addEventListener("click",()=>{
    if(select.value === "" || tdChecked.value === "" || tdInput.value === "" ){
        alert("fill all the fileds")
    }else{
        addTodo()
    }

})
btnPut.addEventListener("click",() => {
    updateTodo(parseInt(select.value) ,{
        title:"you are the best",
        completed:true
    })
})





   


interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
            phone: string;
    
}

interface Todo{
    userId: number,
    id: number,
    title: string;
    completed: boolean;
}
interface Post{
    id:number,
    userId:number,
    title:string,
    body:string

}

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
interface Flight {
    date: string,
    from:string,
    to:string,
    id:string,
}
interface Passenger {
    id:number,
    createdAt:string,
    name:string,
    gender:string,
    flight_id:string,
    agent:string 
}
const selectFl:HTMLSelectElement = document.querySelector(".selectFlight")!
const divPasenger:HTMLDivElement = document.querySelector(".containerS")!


const agentId: string ="agent 1";
const baseUrl:string = "https://66ead5fe55ad32cda47a9f39.mockapi.io/api/"

const getAllFlights = async ():Promise<void> => {
    try{
        const res:Response = await fetch(`${baseUrl}flights`);
        if(!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const flights: Flight[] = await res.json();
        // console.log(flights);
        for (const flight of flights) {
            const option: HTMLOptionElement = document.createElement("option");
            option.value = flight.id.toString();
            option.textContent = `${flight.from} → ${flight.to} (${flight.date})`;
            selectFl.appendChild(option);
            
        }
        
        
    }catch(error){
        console.error("Error fetching flights:", error);
    }
}
const getALLpasengers = async (agentid:string): Promise<void> => {
    try{
        const res:Response = await fetch(`${baseUrl}pasengers/?agent=${agentid}`);
        if(!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const pasengers: Passenger[] = await res.json();
        // console.log(pasengers);
        for (const pasenger of pasengers) {
             const pName:HTMLParagraphElement = document.createElement("p");
             pName.textContent = `Name: ${pasenger.name}, Gender: ${pasenger.gender}, Flight: ${pasenger.flight_id}`;
             divPasenger.appendChild(pName);
             const editButton: HTMLButtonElement = document.createElement("button");
             editButton.textContent = "✏️";
             editButton.id = "editBTN";
             editButton.addEventListener("click",()=>{
                 const divEdit = document.createElement("div");
                 const labelName: HTMLLabelElement = document.createElement("label");
                 labelName.textContent = "Name:";
                 const inputName: HTMLInputElement = document.createElement("input");
                 inputName.id = "editInput";
                 labelName.appendChild(inputName);
                 divEdit.appendChild(labelName);
                 const mainDiv: HTMLDivElement = document.createElement("div");
                 const h3: HTMLHeadingElement = document.createElement("h3");
                 h3.textContent = "gender:";
                 mainDiv.appendChild(h3);
                 const divMale: HTMLDivElement = document.createElement("div");
                 const genderName: HTMLInputElement = document.createElement("input");
                 genderName.type = "radio";
                 genderName.name = "gender";
                 genderName.value = "male";
                 genderName.textContent = "Male";
                 genderName.checked = true;
                 const maleName: HTMLLabelElement = document.createElement("label");
                 maleName.textContent = "Male";
                 maleName.appendChild(genderName);
                 divMale.appendChild(maleName);
                 mainDiv.appendChild(divMale);
                 const divFemale: HTMLDivElement = document.createElement("div");
                 const femaleName: HTMLInputElement = document.createElement("input");
                 femaleName.type = "radio";
                 femaleName.name = "gender";
                 femaleName.value = "female";
                 femaleName.textContent = "Female";
                 const femaleLabel: HTMLLabelElement = document.createElement("label");
                 femaleLabel.textContent = "Female";
                 femaleLabel.appendChild(femaleName);
                 divFemale.appendChild(femaleLabel);
                 mainDiv.appendChild(divFemale);
                 divEdit.appendChild(mainDiv);
                 const saveButton: HTMLButtonElement = document.createElement("button");
                 saveButton.textContent = "💾️"
                 divEdit.appendChild(saveButton);
                 divPasenger.appendChild(divEdit);
                 saveButton.addEventListener("click",()=>{
                    const selectedGender:HTMLInputElement = document.querySelector('input[name="gender"]:checked')!
                    editPasenger(pasenger.id,{
                        name: inputName.value,
                        gender: selectedGender.value
                    });
                    window.location.reload();   
                   
                 })
             })
                 
             const deleteButton: HTMLButtonElement = document.createElement("button");
             deleteButton.textContent = "🗑️";
             deleteButton.id = "deleteBTN";
             deleteButton.addEventListener("click",()=>{
                deletePasenger(pasenger.id);
                window.location.reload();
             })
             divPasenger.appendChild(editButton);
             divPasenger.appendChild(deleteButton);   
        }
    }catch(error){
        console.log("Error fetching pasengers:", error);
    }
}
const addNewPasenger = async (passenger:Partial<Passenger>): Promise<void> => {
    try{
        const res:Response = await fetch(`${baseUrl}pasengers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(passenger)
        });
        if(!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const newPassenger: Passenger = await res.json();
        console.log("New pasenger added:", newPassenger);

        }catch(error){
           console.error("Error adding new pasenger:", error);
        }};

const editPasenger = async (passengerId: number, updatedPassenger: Partial<Passenger>): Promise<void> => {
    try{
        const res:Response = await fetch(`${baseUrl}pasengers/${passengerId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedPassenger)
        });
        if(!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        console.log("Pasenger updated successfully" + JSON.stringify(updatedPassenger));
        }catch(error){
            console.error("Error editing pasenger:", error);
        }};
        
const deletePasenger = async (passengerId: number): Promise<void> => {
    try{
        const res:Response = await fetch(`${baseUrl}pasengers/${passengerId}`, {
            method: 'DELETE'
        });
        if(!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        console.log("Pasenger deleted successfully");
        }catch(error){
            console.error("Error deleting pasenger:", error);
        }};

const btnDel: HTMLButtonElement = document.querySelector("#deleteBTN")!;
const btnAdd: HTMLButtonElement = document.querySelector(".btnSent")!;
const inputName: HTMLInputElement = document.querySelector(".inpName")!;
const radioName: HTMLInputElement = document.querySelector(".rb")!

btnAdd.addEventListener("click", ()=>{
    addNewPasenger({
        createdAt: "07/19/2024",
        name: inputName.value,
        gender: radioName.value,
        flight_id: selectFl.value,
        agent: agentId
    });
    window.location.reload();
})

        











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


