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
const agentId = "8289757";
const baseUrl = "https://66e98a6387e417609449dfc5.mockapi.io/api/";
const getAllFlights = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(`${baseUrl}flights`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const flights = yield res.json();
        console.log(flights);
    }
    catch (error) {
        console.error("Error fetching flights:", error);
    }
});
const getALLpasengers = (agentid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(`${baseUrl}pasangers/?agent=${agentid}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const pasengers = yield res.json();
        console.log(pasengers);
    }
    catch (error) {
        console.log("Error fetching pasengers:", error);
    }
});
const addNewPasenger = (passenger) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(`${baseUrl}pasangers`, {
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
        const res = yield fetch(`${baseUrl}pasangers/${passengerId}`, {
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
        const res = yield fetch(`${baseUrl}pasangers/${passengerId}`, {
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
