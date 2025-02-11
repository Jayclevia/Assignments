// Starting freelancer array with at least 2 objects
const startingFreelancers = [
  { name: 'Sam', occupation: 'Programmer', price: 50 },
  { name: 'Alex', occupation: 'Designer', price: 60 }
];

const arrayNames = ['Jack', 'Jill', 'Jalonda', 'Jalen', 'Jackson'];
const arrayOccupations = ['Photographer', 'Journalist', 'Singer', 'Painter', 'Comedian'];

// Create init function
function init() {
    let freelancerContainer = document.querySelector('.freelancerContainer');

    let table = document.createElement('table');
    let tHeader = document.createElement('thead');
    let headerRow = document.createElement('tr');
    let tableBody = document.createElement('tbody');
    tableBody.id = "freelancerBody";

    let headers = ['Name', 'Occupation', 'Price'];
    headers.forEach(text => {
        let th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });

    tHeader.appendChild(headerRow);

    table.appendChild(tHeader);
    table.appendChild(tableBody);

    freelancerContainer.appendChild(table);

    renderFreelancers();
    renderAveragePrice();
}

// Create function to render the freelancer array to the DOM
function renderFreelancers() {
    let tbody = document.getElementById('freelancerBody');

    tbody.innerHTML = "";
    startingFreelancers.forEach(freelancer => {
        let row = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdOccupation = document.createElement('td');
        let tdPrice = document.createElement('td');

        tdName.textContent = freelancer.name;
        tdOccupation.textContent = freelancer.occupation;
        tdPrice.textContent = `$${freelancer.price}`;

        row.appendChild(tdName);
        row.appendChild(tdOccupation);
        row.appendChild(tdPrice);

        tbody.appendChild(row);
    });
}

// Create a function to render the average freelancer price to the DOM
function renderAveragePrice() {
    let avgPriceSpan = document.querySelector('.averagePrice');
    let avgPriceP = document.querySelector('p');

    let totalPrice = sum(startingFreelancers);

    let avgPrice = avg(totalPrice, startingFreelancers);

    avgPriceSpan.textContent = `$${avgPrice.toFixed(2)}`;

    avgPriceP.replaceChildren(avgPriceSpan);
}

// Create function to sum all prices in our freelancer array
function sum(arr) {
    let total = 0;
    arr.forEach(freelancer => {
        total += freelancer.price;
    });
    return total;
}

//Function to get average of given price with array
function avg(totalPrice, arr) {
    return totalPrice / arr.length;
}

// Create a function to add a new freelancer to the freelancer array
function addFreelancer() {
    let newFreelancer = {};

    newFreelancer.name = arrayNames[Math.floor(Math.random() * arrayNames.length)];

    newFreelancer.occupation = arrayOccupations[Math.floor(Math.random() * arrayOccupations.length)];

    newFreelancer.price = Math.floor(Math.random() * 100) + 20; // Random price between 20 - 120

    startingFreelancers.push(newFreelancer);

    renderFreelancers();

    renderAveragePrice();
}

setInterval(addFreelancer, 1000);

init();
