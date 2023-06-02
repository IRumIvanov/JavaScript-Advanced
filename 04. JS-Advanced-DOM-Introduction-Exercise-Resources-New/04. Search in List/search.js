function search() {
   let towns = Array.from(document.querySelectorAll('ul li'));
   let inputs = document.getElementById('searchText').value;
   let count = 0;
   for(let town of towns) {
      let text = town.textContent;
      if(text.includes(inputs)){
        town.style.textDecoration = "underline";
        town.style.fontWeight = "bold";
        count++;
      }else{
         town.style.textDecoration = "none";
         town.style.fontWeight = "normal";
      }
   }
   document.getElementById('result').innerText = `${count} matches found`;

   debugger
}
