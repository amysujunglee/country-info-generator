const searchBtn = document.querySelector('#search-btn');
const countryNameInput = document.querySelector('#country-name-input');

searchBtn.addEventListener('click', () => {
    let countryName = 'canada';
    let finalURL = `
    https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    console.log(finalURL);

    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log(data[0].capital[0]);
            console.log(data[0].flags.svg);
            console.log(data[0].name.common);
    })
});