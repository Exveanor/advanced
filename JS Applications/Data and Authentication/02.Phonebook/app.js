// load phonebook -> use fetch (get)
// capture elements
// delete entries -> use fetch (delete)
// create entry - use fetch (post)

const baseURL = "http://localhost:3030/jsonstore/phonebook"

function attachEvents() {
    document.getElementById("btnLoad").addEventListener("click", loadPhoneBook);

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
        const deleteButtonElement = 
        phoneBookElement.appendChild(liElement);
    });
}