Beans & Stories Coffee Project
Project Overview
Beans & Stories is a warm, inviting coffee website showcasing hot and iced coffee drinks. It fetches real coffee data from the SampleAPIs Coffee API and displays it dynamically using JavaScript. The project includes separate pages for hot and iced coffees with smooth navigation between them, consistent styling, and a warm coffee-themed design.

Features
Displays data from two API endpoints: hot and iced coffees.

Navigation between hot and iced coffee pages.

Dynamic fetching and rendering of coffee data using JavaScript.

Warm, coffee-shop inspired design with consistent styling.

Responsive layout and images.

Loading indicators while data loads.

Subtle animations on coffee cards.

Known Issues
The hot.html page content is in Swedish:

"Svart te föddes i Kina. Det är tillverkat av blad från en växt som kallas Camellia och kan smaksättas olika med frukter till exempel. En trevlig, varm, smakfull och aromatisk dryck som passar till vardagen."

Attempts were made to translate this text to English, but it was not successful due to limitations with the API response or content source. The text comes directly from the API endpoint and cannot be changed without modifying the backend source. This is why the hot coffee description remains in Swedish.

Project Structure
index.html - Homepage with navigation.

hot.html - Displays hot coffee drinks data.

iced.html - Displays iced coffee drinks data.

coffee.css, home.css - Styling files.

hot.js, iced.js - JavaScript files to fetch and render coffee data.

images/ - Coffee images folder.

How to Run
Clone or download this repository.

Open the .html files in a modern web browser.

The JavaScript fetches data from the public SampleAPIs Coffee API and displays it.

Navigate between hot and iced coffee pages using the links in the navigation menu.

Development Notes
Frequent commits were made during development to save working versions.

GitHub repository: https://github.com/Helay35/BeansStories

The project uses vanilla JavaScript to fetch API data and manipulate the DOM.

Styling is inspired by warm coffee tones and cozy café aesthetics.

Future Improvements
Fix or customize API content for English text in hot.html.

Add mobile responsiveness and accessibility enhancements.

Enhance animations and user interaction.

Possibly add user search/filter features.