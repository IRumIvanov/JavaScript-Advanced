function addItem() {
    let list = document.getElementById('items');
    let addedEl = document.getElementById('newItemText').value;

    if (addedEl.length === 0) return;

    let liCreated = document.createElement('li');
    liCreated.textContent = addedEl;
    let add = document.createElement('a');

    liCreated.addEventListener("click", addItem);
    liCreated.appendChild(add);

    list.appendChild(liCreated);
}