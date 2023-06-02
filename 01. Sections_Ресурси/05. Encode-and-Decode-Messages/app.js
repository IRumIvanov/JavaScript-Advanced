// function encodeAndDecodeMessages() {
//     let arr = [];
//     let buttons = Array.from(document.querySelectorAll('button'));

//     for(let i = 0; i < buttons.length; i++) {
//         buttons[0].addEventListener('click', convert);
//         buttons[1].addEventListener('click', encode);
//     }

//     function convert(e) {
//         let divs = e.target.parentNode;
//         let message = divs.querySelector('textarea');
//         let sibling = divs.nextElementSibling;
//         let encodedMessage = sibling.querySelector('textarea');
//         let letters = Array.from(message.value);

//         for(let letter of letters) {
//             let newEl = (letter.charCodeAt() + 1);
//            encodedMessage.value += String.fromCharCode(newEl);
//             arr.push(String.fromCharCode(newEl));
//         }

//         message.value = '';


//     }
//      function encode(e) {
//          let divs = e.target.parentNode;
//          let message = divs.querySelector('textarea');
//         message.value = '';

//         for(let letter of arr) {

//             let newEl = (letter.charCodeAt() - 1);
//             message.value += String.fromCharCode(newEl);
//         }


//     }
// }

function encodeAndDecodeMessages() {
    const textareas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    buttons[0].addEventListener('click', function (e) {
        const message = textareas[0].value
            .split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');

        textareas[0].value = '';
        textareas[1].value = message;
    })

    buttons[1].addEventListener('click', function (e) {
        const message = textareas[1].value
            .split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
        textareas[1].value = message;
    })
}