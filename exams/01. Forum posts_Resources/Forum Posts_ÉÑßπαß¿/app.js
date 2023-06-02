window.addEventListener("load", solve);

function solve() {
  const title = document.getElementById('post-title');
  const category = document.getElementById('post-category');
  const question = document.getElementById('post-content');
  const review = document.getElementById('review-list');
  const published = document.getElementById('published-list');

  document.getElementById('publish-btn').addEventListener('click', e => {

    e.preventDefault();

    if (title.value == '' || category.value == '' || question.value == '') {
      return;
    }

    const li = document.createElement('li');
    li.setAttribute('class', 'rpost');
    const article = document.createElement('article');

    const header = document.createElement('h4');
    const headerEdit = title.value;
    header.textContent = title.value;
    article.appendChild(header);

    const pCategory = document.createElement('p');
    const categoryEdit = category.value;
    pCategory.textContent = 'Category: ' + category.value;
    article.appendChild(pCategory);

    const pQuestion = document.createElement('p');
    const questionEdit = question.value;
    pQuestion.textContent = 'Content: ' + question.value;
    article.appendChild(pQuestion);

    li.appendChild(article);

    const btnEdit = document.createElement('button');
    btnEdit.setAttribute('class', 'action-btn edit');
    btnEdit.textContent = 'EDIT';
    li.appendChild(btnEdit);

    const btnApprove = document.createElement('button');
    btnApprove.setAttribute('class', 'action-btn approve');
    btnApprove.textContent = 'APPROVE';
    li.appendChild(btnApprove);

    review.appendChild(li);

    title.value = '';
    category.value = '';
    question.value = '';

    btnEdit.addEventListener('click', e => {
      // e.preventDefault();
      li.remove();
      title.value = headerEdit;
      category.value = categoryEdit;
      question.value = questionEdit;
    });

    btnApprove.addEventListener('click', e => {
      // e.preventDefault();
      const liApp = document.createElement('li');
      li.setAttribute('class', 'rpost');
      const article = document.createElement('article');

      const header = document.createElement('h4');
      header.textContent = headerEdit;
      article.appendChild(header);

      const category = document.createElement('p');
      category.textContent = categoryEdit;
      article.appendChild(category);

      const question = document.createElement('p');
      question.textContent = questionEdit;
      article.appendChild(question);

      liApp.appendChild(article);
      published.appendChild(liApp);
      li.remove();

      document.getElementById('clear-btn').addEventListener('click', e => {
        liApp.remove();
      })
    })

  })
}