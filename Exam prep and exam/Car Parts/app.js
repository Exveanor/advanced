window.addEventListener('load', solve);

function solve() {
        // capture inputs
        const carModelInput = document.getElementById("car-model");
        const carYearInput = document.getElementById("car-year");
        const partNameInput = document.getElementById("part-name");
        const partNumberInput = document.getElementById("part-number");
        const conditionSelect = document.getElementById("condition");

        // capture outher elements
        const infoList = document.querySelector(".info-list");
        const confirmList = document.querySelector(".confirm-list");
        const completeImg = document.getElementById("complete-img");
        const completeText = document.getElementById("complete-text");

        const nextBtn = document.getElementById("next-btn");

        // attach events
        nextBtn.addEventListener('click', (e) => {
                e.preventDefault();

                completeImg.style.visibility = "hidden";
                completeText.textContent = "";

                let carModelValue = carModelInput.value;
                let carYearValue = carYearInput.value;
                let partNameValue = partNameInput.value;
                let partNumberValue = partNumberInput.value;
                let conditionValue = conditionSelect.value;

                if (
                        !carModelValue ||
                        !carYearValue || 
                        !partNameValue ||
                        !partNumberValue ||
                        !conditionValue ||
                        Number(carYearValue) <= 1980 ||
                        Number(carYearValue) >= 2023
                ) {
                        return;
                }

                nextBtn.disabled = true;
                Array.from([carModelInput, carYearInput, partNameInput, partNumberInput, conditionSelect]).forEach(input => input.value = "");


                //create elements
                const liPartContent = document.createElement("li");
                liPartContent.classList.add("part-content");

                const articleEl = document.createElement("article");
                // create ps
                const modelP = document.createElement("p");
                modelP.textContent = carModelValue;

                const yearP = document.createElement("p");
                yearP.textContent = carYearValue;

                const nameP = document.createElement("p");
                nameP.textContent = partNameValue;

                const numberP = document.createElement("p");
                numberP.textContent = partNumberValue;

                const conditionP = document.createElement("p");
                conditionP.textContent = conditionValue;

                const editBtn = document.createElement("button");
                editBtn.classList.add("edit-btn");
                editBtn.textContent = "Edit";

                const continueBtn = document.createElement("button");
                continueBtn.classList.add("continue-btn");
                continueBtn.textContent = "Continue"


                //attach
                articleEl.appendChild(modelP);
                articleEl.appendChild(yearP);
                articleEl.appendChild(nameP);
                articleEl.appendChild(numberP);
                articleEl.appendChild(conditionP);
                liPartContent.appendChild(articleEl);
                infoList.appendChild(liPartContent);
                
                articleEl.appendChild(editBtn);
                articleEl.appendChild(continueBtn);
                
        

                editBtn.addEventListener('click', (e) => {
                        e.preventDefault();

                        infoList.innerHTML = '';

                        carModelInput.value = carModelValue;
                        carYearInput.value = carYearValue;
                        partNameInput.value = partNameValue;
                        partNumberInput.value = partNumberValue;
                        conditionSelect.value = conditionValue;
                        nextBtn.disabled = false;
                });

                continueBtn.addEventListener('click', (e) => {
                        e.preventDefault();

                        infoList.innerHTML = '';

                        confirmList.innerHTML = `
            <li class="part-content">
                <article>
                    <p>Car Model: ${carModelValue}</p>
                    <p>Part Name: ${partNameValue}</p>
                    <p>Car Year: ${carYearValue}</p>
                    <p>Condition: ${conditionValue}</p>
                    <p>Part Number: ${partNumberValue}</p>
                    <button class="cancel-btn">Cancel</button>
                    <button class="confirm-btn">Confirm</button>
                </article>
            </li>
            `;

                        let confirmBtn = document.querySelector('.confirm-btn');
                        let cancelBtn = document.querySelector('.cancel-btn');

                        confirmBtn.addEventListener('click', (e) => {
                                e.preventDefault();

                                confirmList.innerHTML = '';
                                nextBtn.disabled = false;
                                completeImg.style.visibility = 'visible';
                                completeText.textContent = 'Part is Ordered!';
                        });

                        cancelBtn.addEventListener('click', (e) => {
                                e.preventDefault();

                                confirmList.innerHTML = '';
                                nextBtn.disabled = false;
                        });
                });
        });

}



