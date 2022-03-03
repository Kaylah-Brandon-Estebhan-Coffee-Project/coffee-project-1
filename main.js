"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee d-flex col-6">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

   function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);


    }
    var filteredCoffeeList = updateCoffees;

 function updateCoffeeListByName(){
     let input = document.getElementById('search-bar').value
     input=input.toLowerCase();
     let x = document.getElementsByTagName('h2');
     let y = document.getElementsByTagName('p');

     for (var i = 0; i < x.length; i++) {
         if (!x[i].innerHTML.toLowerCase().includes(input)) {
             x[i].style.display="none";
             y[i].style.display='none';
         }
         else {
             x[i].style.display="";
             y[i].style.display="";
         }
     }
 }
// //
// // // Declare variables
// var input, filter, coffeeList, coffee, a, i, txtValue;
// input = document.getElementById('search-bar');
// filter = input.value.toUpperCase();
// coffeeList = filteredCoffeeList;
// coffee = coffeeList.getElementsByClassName('coffee').getElementsByTagName('h2');
//
// // Loop through all list items, and hide those who don't match the search query
// for (i = 0; i < coffee.length; i++) {
//     a = coffee[i];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         coffee[i].style.display = "";
//     } else {
//         coffee[i].style.display = "none";
//     }
// }
// }

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
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
document.getElementById('search-bar').addEventListener('keyup',updateCoffeeListByName);
