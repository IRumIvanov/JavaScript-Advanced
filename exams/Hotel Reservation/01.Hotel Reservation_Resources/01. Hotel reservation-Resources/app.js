window.addEventListener('load', solve);

function solve() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const dateIn = document.getElementById('date-in');
    const dateOut = document.getElementById('date-out');
    const people = document.getElementById('people-count');
    const infoList = document.querySelector('.info-list');
    const next = document.getElementById('next-btn');
    const confirmation = document.querySelector('.confirm-list');
    const verify = document.getElementById('verification');


    document.getElementById('next-btn').addEventListener('click', e => {
        e.preventDefault();

        if (firstName.value == '' || lastName.value == '' ||
            dateIn.value == '' || dateOut.value == '' || people.value == '') {
            return;
        }

        const li = document.createElement('li');
        li.setAttribute('class', 'reservation-content');

        const article = document.createElement('article');

        const header = document.createElement('h3');
        const firstNameEdit = firstName.value;
        const lastNameEdit = lastName.value;
        header.textContent = `Name: ${firstName.value} ${lastName.value}`;
        article.appendChild(header);

        const fromDateIn = document.createElement('p');
        const fromDateInEdit = dateIn.value;
        fromDateIn.textContent = `From date: ${dateIn.value}`;
        article.appendChild(fromDateIn);

        const fromDateOut = document.createElement('p');
        const fromDateOutEdit = dateOut.value;
        fromDateOut.textContent = `To date: ${dateOut.value}`;
        article.appendChild(fromDateOut);

        const peopleCount = document.createElement('p');
        const peopleCountEdit = people.value;
        peopleCount.textContent = `For ${people.value} people`;
        article.appendChild(peopleCount);

        const editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';

        const continueBtn = document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        infoList.appendChild(li);

        firstName.value = '';
        lastName.value = '';
        dateIn.value = '';
        dateOut.value = '';
        people.value = '';
        next.disabled = true;

        editBtn.addEventListener('click', e => {
            next.disabled = false;
            li.remove();
            firstName.value = firstNameEdit;
            lastName.value = lastNameEdit;
            dateIn.value = fromDateInEdit;
            dateOut.value = fromDateOutEdit;
            people.value = peopleCountEdit;
        })

        continueBtn.addEventListener('click', e => {
            const liContinue = document.createElement('li');
            liContinue.setAttribute('class', 'reservation-info');
            const article = document.createElement('article');

            const names = document.createElement('h3');
            names.textContent = `Name: ${firstNameEdit} ${lastNameEdit}`;
            article.appendChild(names);

            const datesIn = document.createElement('p');
            datesIn.textContent = `From date: ${fromDateInEdit}`;
            article.appendChild(datesIn);

            const datesOut = document.createElement('p');
            datesOut.textContent = `To date: ${fromDateOutEdit}`;
            article.appendChild(datesOut);

            const numberPeople = document.createElement('p');
            numberPeople.textContent = `For ${peopleCountEdit} people`;
            article.appendChild(numberPeople);

            liContinue.appendChild(article);

            const confirmBtn = document.createElement('button');
            confirmBtn.setAttribute('class', 'confirm-btn');
            confirmBtn.textContent = 'Confirm';

            const cancelBtn = document.createElement('button');
            cancelBtn.setAttribute('class', 'cancel-btn');
            cancelBtn.textContent = 'Cancel';
            liContinue.appendChild(confirmBtn);
            liContinue.appendChild(cancelBtn);

            confirmation.appendChild(liContinue);

            li.remove();

            cancelBtn.addEventListener('click', e => {
                verify.setAttribute('class', 'reservation-cancelled');
                verify.textContent = `Cancelled.`;
                next.disabled = false;

                liContinue.remove();
            })
            confirmBtn.addEventListener('click', e => {
                verify.setAttribute('class', 'reservation-confirmed');
                verify.textContent = `Confirmed.`;
                next.disabled = false;
                liContinue.remove();
            })
        })
    })
}