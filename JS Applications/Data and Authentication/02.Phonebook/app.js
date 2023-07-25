// load phonebook -> use fetch (get)
// capture elements
// delete entries -> use fetch (delete)
// create entry - use fetch (post)

const baseURL = "http://localhost:3030/jsonstore/phonebook"

function attachEvents() {
    document.getElementById("btnLoad").addEventListener("click", loadPhoneBook);
    document.getElementById("phonebook").addEventListener("click", deletePhone);

}

attachEvents();

 async function loadPhoneBook() {
    const response = await fetch(baseURL);
    const data = await response.json();
    const phoneBookElement = document.getElementById("phonebook");
    phoneBookElement.innerHTML = "";
    
    Object.values(data).forEach(x => {
        const liElement = document.createElement("li");
        liElement.textContent = `${x.person}: ${x.phone}`;
        
        // create delete button 
        const deleteButtonElement = document.createElement("button");
        deleteButtonElement.setAttribute("id", x._id);
        deleteButtonElement.textContent = "Delete";

        liElement.appendChild(deleteButtonElement);
        phoneBookElement.appendChild(liElement);
    });
}

async function deletePhone(e) {
    if (e.target.textContent !== "Delete") {
        return;
    }
    const currentPhoneId = e.target.id;
    await fetch(`${baseURL}/${currentPhoneId}`, {
        method: "DELETE",
    });
    loadPhoneBook();
}