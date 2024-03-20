const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');

function searchTravel() {
    const input = document.getElementById('keywordInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            if (input === 'country' || input === 'countries') {
                const countries = data.countries;
                countries.forEach(function (country) {

                    const cities = country.cities;
                    cities.forEach(function (city) {
                        resultDiv.innerHTML += `<img src="${city.imageUrl}" alt="${city.name}">`;
                        resultDiv.innerHTML += `<h1>${city.name}</h1>`;
                        resultDiv.innerHTML += `<p>${city.description}</p>`;
                        resultDiv.innerHTML += `<br>`;
                    });

                });
            }
            else if (input === 'beach' || input === 'beaches') {
                const beaches = data.beaches;
                beaches.forEach(function (beach) {
                    resultDiv.innerHTML += `<img src="${beach.imageUrl}" alt="${beach.name}">`;
                    resultDiv.innerHTML += `<h1>${beach.name}</h1>`;
                    resultDiv.innerHTML += `<p>${beach.description}</p>`;
                    resultDiv.innerHTML += `<br>`;
                });
            }
            else if (input === 'temple' || input === 'temples') {
                const temples = data.temples;
                temples.forEach(function (temple) {
                    resultDiv.innerHTML += `<img src="${temple.imageUrl}" alt="${temple.name}">`;
                    resultDiv.innerHTML += `<h1>${temple.name}</h1>`;
                    resultDiv.innerHTML += `<p>${temple.description}</p>`;
                    resultDiv.innerHTML += `<br>`;
                });
            }
            else {
                resultDiv.innerHTML = 'No recommendations found.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

function resetTravel() {
    const inputField = document.getElementById('keywordInput');
    const resultDiv = document.getElementById('result');

    inputField.value='';
    resultDiv.innerHTML = '';
}
btnSearch.addEventListener('click', searchTravel);
btnClear.addEventListener('click', resetTravel);
