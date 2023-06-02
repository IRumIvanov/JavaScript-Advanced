function create(words) {
   for (let i = 0; i < words.length; i++) {
      let div = document.createElement('div');
      let paragraph = document.createElement('p');
      let content = document.getElementById('content');
      paragraph.textContent = words[i];
      paragraph.style.display = 'none';
      div.appendChild(paragraph);
      div.addEventListener('click', visiblePar)
      content.appendChild(div);

      function visiblePar() {
         paragraph.style.display = '';
      }
   }
}