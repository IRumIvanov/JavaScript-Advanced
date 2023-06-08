function addItem() {
    let input = document.getElementById('newItemText').value;
    let list = document.getElementById('items');
    let createLi = document.createElement('li');
    createLi.textContent = input;
    let remove = document.createElement("a");
    let button = document.createTextNode('[Delete]');


    remove.appendChild(button);
    remove.href = "#";
    remove.addEventListener("click", deleteItem);


    list.appendChild(createLi);
    createLi.appendChild(remove);


    function deleteItem() {
        createLi.remove();
        remove.remove();
    }
}