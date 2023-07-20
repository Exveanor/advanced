function solve() {

    // http://localhost:3030/jsonstore/bus/schedule/:id

    // get elements
    const stopInfoElement = document.querySelector("div#info span.info");
    const departButton = document.getElementById("depart");
    const arrivetButton = document.getElementById("arrive");

    let nextStopId = "depot";
    let stopName = "";
    async function depart() {

        try {
        const response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`);

        if (!response.ok) {
            const error = new Error(response.statusText);
            throw error;
        }

        const data = await response.json();

        stopName = data.name;
        nextStopId = data.next;

        stopInfoElement.textContent = `Next stop ${stopName}`;
        departButton.disabled = true;
        arrivetButton.disabled = false;

        //error handle + disbale the buttons ---> try / catch
        } catch (err) {
            stopInfoElement.textContent = "Error";
            departButton.disabled = true;
            arrivetButton.disabled = true;
        }
    }

    function arrive() {
        stopInfoElement.textContent = `Arriving at ${stopName}`;
        departButton.disabled = false;
        arrivetButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();