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







