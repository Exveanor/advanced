function addItem() {
    //get elements
    const newElement = document.getElementById("newItemText");
    const newElementValue = newElement.value;
    const list = document.getElementById("items");

    if(newElementValue.length === 0) return;

    let listItem = document.createElement("li");
    listItem.textContent = newElementValue;

    let remove = document.createElement("a");
    let linkText = document.createTextNode("[Delete]");

    remove.appendChild(linkText);
    remove.href = "#";
    remove.addEventListener("click", deleteItem);
    listItem.appendChild(remove);
    list.appendChild(listItem);

    function deleteItem() {
        listItem.remove();
    }
}