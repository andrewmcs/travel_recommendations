fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        const countries = data.countries;
        countries.forEach(function (country) {
            console.log(`Found country: ${country.name}`);
        });

    })
    .catch(error => {
        console.error('Error:', error);
        console.log('An error occurred while fetching data.');
    });