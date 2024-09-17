const baseUrl :string = "https://jsonplaceholder.typicode.com/";
const select :HTMLSelectElement = document.querySelector("select")!;
const todos : HTMLDivElement = document.querySelector(".todos")!;
const btnT:HTMLButtonElement = document.querySelector(".btnT")!;
const btnP:HTMLButtonElement = document.querySelector(".btnP")!;





const getUsers = async ():Promise<void> => {
    try{
        const res:Response = await fetch(baseUrl + "users");
        const users:User[] = await res.json();
        for(const user of users){
            const opt:HTMLOptionElement = document.createElement("option");
            opt.value = user.id.toString();
            opt.textContent = `${user.name}` + `(${user.username})`;
            select.appendChild(opt);
        }

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
            titel.textContent = `(#${todo.id}) ${todo.title}`;
            titel.addEventListener("click",()=>{
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
    }catch(e) {
        console.log(e);
    }
}

btnT.addEventListener("click", getTodosByUser); 
btnP.addEventListener("click",getPostsByUser)
   


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


