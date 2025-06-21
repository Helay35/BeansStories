const container = document.querySelector('.coffee-container');

const uglyImagesFix = {
  'Frappuccino': 'images/Frappuccino.jpg',
  'Strawberry Iced Coffee': 'images/strawberry-coffee.jpg',
  'Nitro': 'images/nitro.jpg',
  'Mazagran': 'images/mazagran.jpg',
  'Iced Espresso': 'images/iced-espresso.jpg', // your local image
  'Sprinkle Iced Coffee': 'images/default-coffee.jpg' // fallback for sprinkle iced coffee, can change if you have a better image
};

async function fetchIcedCoffees() {
  try {
    const response = await fetch('https://api.sampleapis.com/coffee/iced');
    if (!response.ok) throw new Error('Network response was not ok');
    let coffees = await response.json();

    // Remove duplicate titles, keep only first occurrence
    // Also remove second Sprinkle Iced Coffee duplicate explicitly by keeping first only
    const seenTitles = new Set();
    coffees = coffees.filter(coffee => {
      if (seenTitles.has(coffee.title)) {
        return false;
      } else {
        seenTitles.add(coffee.title);
        return true;
      }
    });

    displayCoffees(coffees);
  } catch (error) {
    container.innerHTML = `<p style="color:red; text-align:center;">Failed to load iced coffees.</p>`;
    console.error(error);
  }
}

function displayCoffees(coffees) {
  container.innerHTML = '';

  coffees.forEach((coffee, index) => {
    const card = document.createElement('div');
    card.classList.add('coffee-card');
    card.style.setProperty('--order', index);

    const img = document.createElement('img');

    if (uglyImagesFix[coffee.title]) {
      img.src = uglyImagesFix[coffee.title];
    } else {
      img.src = coffee.image || 'images/default-coffee.jpg';
    }

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

fetchIcedCoffees();
