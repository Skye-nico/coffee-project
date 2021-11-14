"use strict"

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'}
];

// default display is dark -> light (descending)
coffees.reverse();

function renderCoffee(coffee) {
    var html = '<div class="coffee d-flex">';
    html += '<h4 class="mr-1">' + coffee.name + '</h4>';
    html += '<p class="ml-1">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees() {
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if ((coffee.roast === selectedRoast || coffee.all === selectedRoast) && coffee.name.toLowerCase().includes(search.value)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}



var search = document.querySelector('#search'); // takes value of input on line 36,37
var tbody = document.querySelector('#coffees'); // div that coffees function create in
var roastSelection = document.querySelector('#roast-selection'); // takes value of select
var submitButton = document.querySelector('#submit');

tbody.innerHTML = renderCoffees(coffees); // invokes function above

// submitButton.addEventListener('click', updateCoffees);
