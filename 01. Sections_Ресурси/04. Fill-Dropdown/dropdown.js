// function addItem() {
//     document.querySelector('body').addEventListener('click', () => {

//         let menu = document.getElementById('menu')

//         let opt = document.createElement('option');

//         let newItem = document.getElementById('newItemText').value;
//         let newValue = document.getElementById('newItemValue').value;

//         opt.textContent = newItem;
//         opt.value = newValue;

//         if (newItem !== '' && newValue !== '') {
//             menu.append(opt);
//             document.getElementById('newItemText').value = '';
//             document.getElementById('newItemValue').value = '';

//         } else {
//             return;
//         }

//     });
//     debugger;
// }

function addItem() {
  let text = document.getElementById('newItemText');
  let val = document.getElementById('newItemValue');
  let select = document.getElementById('menu');
  let option = document.createElement('option');
  option.value = val.value;
  option.textContent = text.value;
  select.appendChild(option);
  text.value = '';
  val.value = '';
}