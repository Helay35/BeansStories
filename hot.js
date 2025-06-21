const container = document.querySelector('.coffee-container');

// List of titles to exclude from hot coffees
const excludeList = [
  'Macchiato',
  'Islatte',
  'Islatte Mocha',
  'Frapino Caramel',
  'Frapino Mocka',
  'Apelsinjuice',
  'Frozen Lemonade',
  'Lemonad',
  'Latte Amaretto',
  'Latte Violette',
  'Caramel Latte',
  'Matcha Latte'
];

async function fetchHotCoffees() {
  try {
    const response = await fetch('https://api.sampleapis.com/coffee/hot');
    if (!response.ok) throw new Error('Network response was not ok');
    let coffees = await response.json();

    // Filter out the unwanted drinks by title
    coffees = coffees.filter(coffee => !excludeList.includes(coffee.title));

    displayCoffees(coffees);
  } catch (error) {
    container.innerHTML = `<p style="color:red; text-align:center;">Failed to load hot coffees.</p>`;
    console.error(error);
  }
}

function displayCoffees(coffees) {
  container.innerHTML = ''; // Clear container

  coffees.forEach((coffee, index) => {
    const card = document.createElement('div');
    card.classList.add('coffee-card');
    card.style.setProperty('--order', index);

    const img = document.createElement('img');
    img.src = coffee.image || 'images/default-coffee.jpg';
    img.alt = coffee.title || 'Coffee image';
    img.onerror = () => {
      img.src = 'images/default-coffee.jpg';
    };

    const title = document.createElement('h3');
    title.textContent = coffee.title;

    const description = document.createElement('p');
    description.textContent = coffee.description || 'A delightful coffee experience.';

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);

    container.appendChild(card);
  });
}

// Run fetch on page load
fetchHotCoffees();
