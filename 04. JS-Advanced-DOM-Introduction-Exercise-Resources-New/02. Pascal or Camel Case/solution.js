function solve() {

  let input = document.getElementById('text').value;
  let command = document.getElementById('naming-convention').value;

  let cut = input
  .split(' ').map((el,i) => {
    if(command.includes('Camel Case')){
    if(i !== 0){
 el = el[0].toUpperCase() + el.slice(1).toLowerCase();
    }else{
      el = el.toLowerCase();
    }
  }
  if(command.includes('Pascal Case')){
el = el[0].toUpperCase() + el.slice(1).toLowerCase();
  }
 return el;
  }).join('')

if(!command.includes('Camel Case') && !command.includes('Pascal Case')){
    document.getElementById('result').innerText = `Error!`;

   
  }else{
  document.getElementById('result').innerText = cut;
  }
}

