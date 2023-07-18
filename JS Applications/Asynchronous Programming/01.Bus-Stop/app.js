async function getInfo() {
    // get data from http://localhost:3030/jsonstore/bus/businfo/:busId
    // parse
    // error handle 
    // add li elements per bus -> "Bus {busID} arrives in {time} minutes"

    // get elements 
    const stopId = document.getElementById("stopId").value;
    const busesUl = document.getElementById("buses");
    busesUl.innerHTML = "";
    try {
       
        const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);

        if (!response.ok) {
            const error = new Error(response.statusText);
            throw error;
        }
        const data = await response.json();

        document.getElementById("stopName").textContent = data.name;

        Object.entries(data.buses).forEach(([busId, time]) => {
            const liElement = document.createElement("li");
            liElement.textContent = `Bus ${busId} arrives in ${time} minutes`;
            busesUl.appendChild(liElement);
        });
    } catch (err) {
        document.getElementById("stopName").textContent = `Error`;
    }
}