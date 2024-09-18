interface Flight {
    date: string,
    from:string,
    to:string,
    id:number
}
interface Passenger {
    createdAt:string,
    name:string,
    gender:string,
    flight_id:number,
    agent:string 
}

const agentId: string ="8289757";
const baseUrl:string = "https://66e98a6387e417609449dfc5.mockapi.io/api/"

const getAllFlights = async ():Promise<void> => {
    try{
        const res:Response = await fetch(`${baseUrl}flights`);
        if(!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const flights: Flight[] = await res.json();
        console.log(flights);
        
        
    }catch(error){
        console.error("Error fetching flights:", error);
    }
}
const getALLpasengers = async (agentid:string): Promise<void> => {
    try{
        const res:Response = await fetch(`${baseUrl}pasangers/?agent=${agentid}`);
        if(!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const pasengers: Passenger[] = await res.json();
        console.log(pasengers);
        

    }catch(error){
        console.log("Error fetching pasengers:", error);
    }
}
const addNewPasenger = async (passenger: Passenger): Promise<void> => {
    try{
        const res:Response = await fetch(`${baseUrl}pasangers`, {
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

const editPasenger = async (passengerId: number, updatedPassenger: Passenger): Promise<void> => {
    try{
        const res:Response = await fetch(`${baseUrl}pasangers/${passengerId}`, {
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
        const res:Response = await fetch(`${baseUrl}pasangers/${passengerId}`, {
            method: 'DELETE'
        });
        if(!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        console.log("Pasenger deleted successfully");
        }catch(error){
            console.error("Error deleting pasenger:", error);
        }};
        











// getAllFlights();
// addNewPasenger({
//     createdAt: new Date().toISOString(),
//     name: "ruvi",
//     gender: "male",
//     flight_id: 1,
//     agent: agentId
// });
// getALLpasengers(agentId);
// editPasenger(15, {
//     createdAt: new Date().toISOString(),
//     name: "ruvi updated test",
//     gender: "male",
//     flight_id: 1,
//     agent: agentId
// });
// deletePasenger(15);







