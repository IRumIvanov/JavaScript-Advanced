function attachEventsListeners() {
    let buttons = Array.from(document.querySelectorAll('input[type=button]'));
    console.log(buttons);

    for (let button of buttons) {
        button.addEventListener('click', convert);
    }

    function convert(event) {
        let value = Number(event.target.parentElement.querySelector('input[type=text]').value);
        let unit = event.target.id;
        switch (unit) {
            case "daysBtn":
                populate(value);
                break;
            case "hoursBtn":
                populate(value);
                break;
            case "minutesBtn":
                populate(value);
                break;
            case "secondsBtn":
                break;
        }
    }

    function populate(value) {
        let inputs = Array.from(document.querySelectorAll("input[type=text]"));
        inputs.shift().value = value;
        let currentValue = value * 24;
        for (let input of inputs) {
            input.value = currentValue;
            currentValue *= 60;

        }
    }

}