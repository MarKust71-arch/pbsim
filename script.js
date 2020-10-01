fetch('realizations.json')
    .then( (response) => {
        return response.json();
    })
    .then( (data) => {
        appendData(data);
    })
    .catch( (err) => {
        console.log('error: ' + err);
    });

const appendData = (data) => {

    const mainContainer = document.getElementById("realizations");

    data.map(el => {
        const container = document.createElement("div");
        container.classList.add("realizations__card");
        const name = document.createElement("p");
        const investor = document.createElement("p");
        const date = document.createElement("p");
        name.innerHTML = el.opis;
        investor.innerHTML = 'Inwestor: ' + el.inwestor;
        date.innerHTML = 'Okres realizacji: ' + el.okres;
        name.classList.add('realizations__card__text--normal');
        investor.classList.add('realizations__card__text');
        date.classList.add('realizations__card__text');
        container.appendChild(name);
        container.appendChild(investor);
        container.appendChild(date);
        mainContainer.appendChild(container);
    })

}