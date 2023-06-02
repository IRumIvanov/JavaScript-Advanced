window.addEventListener("load", solution);

function solution() {
  
  let first = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = (document.getElementById('age'));
  let titleStory = document.getElementById('story-title');
  let genre = document.getElementById('genre');
  let story = document.getElementById('story');
  
  document.getElementById('form-btn').addEventListener('click', e => {
      if(first.value.length != 0 && lastName.value.length != 0 && age.value.length != 0 && titleStory.value.length != 0 && story.value.length != 0){
       first = document.getElementById('first-name');
       lastName = document.getElementById('last-name');
       age = (document.getElementById('age'));
       titleStory = document.getElementById('story-title');
       genre = document.getElementById('genre');
       story = document.getElementById('story');

      console.log(first.value);

      let value = genre.options[genre.selectedIndex].value;
      let text = genre.options[genre.selectedIndex].text;

      let list = document.getElementById('preview-list');
      let li = document.createElement('li');
      let save = document.createElement('button');
      save.classList.add('save-btn');
      save.innerText = 'Save Story';

      let edit = document.createElement('button');
      edit.classList.add('edit-btn');
      edit.innerText = 'Edit Story';

      let deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-btn');
      deleteBtn.innerText = 'Delete Story';


      li.classList.add('story-info');
      let article = document.createElement('article');

      let h2 = document.createElement("H4");
      let p = document.createElement('p');
      let title = document.createElement('p');
      let genreStory = document.createElement('p');
      let storyLine = document.createElement('p');


      article.append(h2);
      article.append(p);
      article.append(title);
      article.append(genreStory);
      article.append(storyLine);

      let txt = document.createTextNode("Name: " + first.value + " " + lastName.value);
      let setAge = document.createTextNode("Age: " + age.value);
      let setTitle = document.createTextNode("Title: " + titleStory.value)
      let setGenre = document.createTextNode("Genre: " + text);
      let setStory = document.createTextNode(story.value)

      h2.appendChild(txt);
      p.appendChild(setAge);
      title.appendChild(setTitle)
      genreStory.appendChild(setGenre);
      storyLine.appendChild(setStory);

      li.append(article);
      li.append(save);
      li.append(edit);
      li.append(deleteBtn);
      list.append(li);
     
      first.value = "";
      lastName.value = "";
      age.value = "";
      titleStory.value = "";
      story.value = "";
      text = genre.options[genre.selectedIndex=0].text;
      document.getElementById("form-btn").disabled = true;

      let buttons = document.querySelectorAll('button');
           //console.log(buttons)

      save.addEventListener('click', e => {
          let div = document.getElementById('main');
            
          while(div.firstChild) {
              div.removeChild(div.firstChild);
          }
          let text = document.createElement('H1');
          let message = document.createTextNode('Your scary story is saved!');
          text.append(message)
          div.append(text);
      })

      deleteBtn.addEventListener('click', e => {
        let div = document.getElementById('preview-list');
            
        while (div.children.length > 1) {
          div.removeChild(div.lastChild);
      }
          document.getElementById("form-btn").disabled = false;

      })

      edit.addEventListener('click', e => {
        let div = document.getElementById('preview-list');
          let names = document.querySelector('article>h4').textContent.split(' ');
          first.value = names[1];
          lastName.value = names[2];
         
           let returnData = document.querySelectorAll('p');
           //console.log(returnData)
           for(let i = 0; i < returnData.length; i++){
            if(i === 0){
              let ageNew = returnData[i].textContent.split(' ');
              age.value = (ageNew[1]);
            }
            if(i === 1){
              let title = returnData[i].textContent.split(' ');
              titleStory.value = title[1];
            }
            if(i === 2){
              let genr = returnData[i].textContent.split(' ');
              //text = genr.innerText;
             // console.log(genr[1])
              genre.value = genr[1];

            }
            if(i === 3){
              story.value = returnData[i].innerText;
            }

           }
          // age.value = dataAge;
          for(let button of buttons){
            button.disabled = true;
          }
          // document.querySelectorAll('#button').disabled = true;
          document.getElementById("form-btn").disabled = false;
          li.remove();
          //   while (div.children.length > 1) {
          //     div.removeChild(div.lastChild);
          // }

      })
    }
    })
  }
