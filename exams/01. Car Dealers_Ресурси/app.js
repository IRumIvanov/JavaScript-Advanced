window.addEventListener("load", solve);

function solve() {

  let make = document.getElementById('make');
  let model = document.getElementById('model');
  let year = document.getElementById('year');
  let fuel = document.getElementById('fuel');
  let costPrice = document.getElementById('original-cost');
  let sellingPrice = document.getElementById('selling-price');

  let tbody = document.getElementById('table-body');
  let carSell = document.getElementById('cars-list');
  let profitCell = document.getElementById('profit');

  document.getElementById('publish').addEventListener('click', e => {
    if (make.value !== '' && model.value !== '' && year.value !== '' && fuel.value !== '' &&
      costPrice.value !== '' && sellingPrice.value !== '') {

      e.preventDefault();
      let textFuel = fuel.options[fuel.selectedIndex].text;

      let row = document.createElement('tr');
      row.setAttribute('class', 'row');

      let makeTd = document.createElement('td');
      makeTd.innerText = make.value;

      let modelTd = document.createElement('td');
      modelTd.innerText = model.value;

      let yearTd = document.createElement('td');
      yearTd.innerText = year.value;

      let fuelTd = document.createElement('td');
      fuelTd.innerText = fuel.value;

      let costTd = document.createElement('td');
      costTd.innerText = costPrice.value;

      let sellTd = document.createElement('td');
      sellTd.innerText = sellingPrice.value;

      let buttonEdit = document.createElement('button');
      buttonEdit.setAttribute('class', 'action-btn edit');
      buttonEdit.innerText = 'Edit';

      let buttonSell = document.createElement('button');
      buttonSell.setAttribute('class', 'action-btn sell');
      buttonSell.innerText = 'Sell';

      let buttons = document.createElement('td');
      buttons.append(buttonEdit);
      buttons.append(buttonSell);

      row.append(makeTd);
      row.append(modelTd)
      row.append(yearTd);
      row.append(fuelTd);
      row.append(costTd);
      row.append(sellTd);
      row.append(buttons);
      tbody.append(row);


      let makeEdit = make.value;
      console.log(makeEdit)
      make.value = '';
      let modelEdit = model.value;
      model.value = '';
      let fuelEdit = fuel.options[fuel.selectedIndex].value;
      textFuel = fuel.options[fuel.selectedIndex = 0].text;
      let yearEdit = year.value;
      year.value = 2017;
      let costEdit = costPrice.value;
      costPrice.value = '';
      let sellEdit = sellingPrice.value;
      sellingPrice.value = '';

      buttonEdit.addEventListener('click', e => {
        make.value = makeEdit;
        model.value = modelEdit;
        fuel.value = fuelEdit;
        year.value = yearEdit;
        costPrice.value = costEdit;
        sellingPrice.value = sellEdit;
        row.remove();
      })

      buttonSell.addEventListener('click', e => {
        let list = document.createElement('li');
        list.setAttribute('class', 'each-list');
        let spanMake = document.createElement('span');
        spanMake.textContent = makeEdit;
        list.append(spanMake);

        let yearSapn = document.createElement('span');
        yearSapn.textContent = yearEdit;
        list.append(yearSapn);

        let profit = Number(sellEdit) - Number(costEdit);
        let profitSpan = document.createElement('span');
        profitSpan.textContent = profit;
        list.append(profitSpan);

        carSell.append(list);
        row.remove();
        let text = profitCell.textContent;
        let number = parseInt(text).toFixed(2) + profit;
        profitCell.innerText = number;
      })

    } else {
      return;
    }

  })
}