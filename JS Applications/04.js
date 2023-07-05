async function lockedProfile() {
    const hiddenDivEl = document.querySelector('.user1Username');
    const mainElement = document.getElementById('main');
    const divProfile = document.querySelector('.profile')
    const inputElements = document.querySelectorAll('input');
    mainElement.innerHTML = '';
    hiddenDivEl.style.display = 'none';
 
    const response = await fetch(`http://localhost:3030/jsonstore/advanced/profiles`);
    const data = await response.json();
    const [radioBtnLock, radioBtnUnlock, currentUserName, currentUserEmail, currentUserAge] = Array.from(inputElements);
    Object.values(data).forEach(Obj => {
        currentUserName.value = Obj.username;
        currentUserEmail.value = Obj.email;
        currentUserAge.value = Obj.age;
        radioBtnLock.checked = true;
 
        const currentDivElement = divProfile.cloneNode(true);
        currentDivElement.addEventListener('click', showMeThatInfo);
        mainElement.appendChild(currentDivElement);
    });
 
    function showMeThatInfo(event) {
        if (!event.target.parentElement.children[2].checked) {
            const hidden = event.target.parentElement.children[9]
            if (hidden.style.display === 'block') {
                hidden.style.display = 'none';
                event.target.textContent = 'Show more';
            } else {
                hidden.style.display = 'block';
                event.target.textContent = 'Hide it';
            }
        }
    }
}