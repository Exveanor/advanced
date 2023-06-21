window.addEventListener('load', solve);

function solve() {
        // capture elements
        const carModelElement = document.getElementById('car-model');
        const carYearElement = document.getElementById('car-year');
        const partNameElement = document.getElementById('part-name');
        const partNumberElement = document.getElementById('part-number');
        const conditionElement = document.getElementById('condition');
        const nextBtn = document.getElementById('next-btn');
        // add events
        nextBtn.addEventListener('click', onNext);
        // attach
        function onNext(e) {
                e.preventDefault();

                const carModelElementValue = carModelElement.value;
                const carYearElementValue = carYearElement.value;
                const partNameElementValue = partNameElement.value;
                const partNumberElementValue = partNumberElement.value;
                const conditionElementValue = conditionElement.value;

                if (carModelElementValue === ''
                        || carYearElementValue === ''
                        || partNameElementValue === ''
                        || partNumberElementValue === ''
                        || conditionElementValue === ''
                        || carYearElementValue < 1980
                        || carYearElementValue > 2023) {
                        return;
                }

                const ulPreviewElement = document.querySelector('.info-list');
                const elConfirmElement = document.querySelector('.confirm-list');

                const completeImgElement = document.getElementById('complete-img');
                completeImgElement.style.visibility = 'hidden';

                const completeTextElement = document.getElementById('complete-text');
                completeTextElement.textContent = '';
                // create elements
                const liPreviewElement = document.createElement('li');
                liPreviewElement.setAttribute('class', 'part-content');

                const article = document.createElement('article');

                const p1Element = document.createElement('p');
                p1Element.textContent = `Car Model: ${carModelElementValue}`;

                const p2Element = document.createElement('p');
                p2Element.textContent = `Car Year: ${carYearElementValue}`;

                const p3Element = document.createElement('p');
                p3Element.textContent = `Part Name: ${partNameElementValue}`;

                const p4Element = document.createElement('p');
                p4Element.textContent = `Part Number: ${partNumberElementValue}`;

                const p5Element = document.createElement('p');
                p5Element.textContent = `Condition: ${conditionElementValue}`;

                const editBtn = document.createElement('button');
                editBtn.setAttribute('class', 'edit-btn');
                editBtn.textContent = 'Edit';

                const continueBtn = document.createElement('button');
                continueBtn.setAttribute('class', 'continue-btn');
                continueBtn.textContent = 'Continue';
                // attach all ps
                article.appendChild(p1Element);
                article.appendChild(p2Element);
                article.appendChild(p3Element);
                article.appendChild(p4Element);
                article.appendChild(p5Element);
                //attach other elements
                liPreviewElement.appendChild(article);
                liPreviewElement.appendChild(editBtn);
                liPreviewElement.appendChild(continueBtn);

                ulPreviewElement.appendChild(liPreviewElement);

                carModelElement.value = '';
                carYearElement.value = '';
                partNameElement.value = '';
                partNumberElement.value = '';
                conditionElement.value = '';
                nextBtn.disabled = true;

                editBtn.addEventListener('click', onEdit);

                function onEdit(e) {
                        carModelElement.value = carModelElementValue;
                        carYearElement.value = carYearElementValue;
                        partNameElement.value = partNameElementValue;
                        partNumberElement.value = partNumberElementValue;
                        conditionElement.value = conditionElementValue;

                        liPreviewElement.remove();

                        nextBtn.disabled = false;
                };

                continueBtn.addEventListener('click', onContinue);

                function onContinue(e) {
                        liPreviewElement.children[1].remove();
                        liPreviewElement.children[1].remove();

                        const confirmBtn = document.createElement('button');
                        confirmBtn.setAttribute('class', 'confirm-btn');
                        confirmBtn.textContent = 'Confirm';

                        const cancelBtn = document.createElement('button');
                        cancelBtn.setAttribute('class', 'cancel-btn');
                        cancelBtn.textContent = 'Cancel';

                        liPreviewElement.appendChild(confirmBtn);
                        liPreviewElement.appendChild(cancelBtn);

                        elConfirmElement.appendChild(liPreviewElement);

                        confirmBtn.addEventListener('click', onConfirm);

                        function onConfirm(e) {
                                liPreviewElement.remove();
                                nextBtn.disabled = false;
                                completeImgElement.style.visibility = 'visible';
                                completeTextElement.textContent = 'Part is Ordered!';
                        }

                        cancelBtn.addEventListener('click', onCancel);

                        function onCancel(e) {
                                liPreviewElement.remove();
                                nextBtn.disabled = false;
                        }
                }

        };

};



