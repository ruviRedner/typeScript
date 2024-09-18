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


