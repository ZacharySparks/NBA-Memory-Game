# NBA Memory Game
This is a 4x4 NBA-themed memory matching game where players flip over cards to find matching pairs of NBA player images. The goal is to match all the pairs as quickly as possible while tracking your best time. It’s a fun and interactive way to test your memory skills and compete against your own high score.

Screenshot of Game: <img width="1470" alt="NBA-Memory-Game" src="https://github.com/user-attachments/assets/bada173c-09be-4a8e-8b96-9111c1e47bf0" />

Hyperlink to video explanation: [![Watch the demo](<img width="1470" alt="NBA-Memory-Game" src="https://github.com/user-attachments/assets/61a61f48-eb58-4933-8cfc-2a24e3c7884e" />
](https://www.youtube.com/watch?v=P0TUkgqGT5k)

index.html: This is the main page of the website where the memory game is played. It contains the game layout, including the card grid, timer, restart button, and links to other pages.

style.css: This file styles the entire website. It handles the appearance of the cards, the flip animations, the layout of the grid, buttons, and text styling to make the game visually appealing.

images folder: This folder stores all the NBA player images used on the cards in the memory game.

about.html: This page provides information about the game, such as how to play, the goal of the game, and maybe some background about the NBA theme.

AI Use (all ChatGPT):

index.html:

script.js:
1. Understanding how to duplicate the array using [...images, ...images] for matching cards.
   
2. Learning how to randomly shuffle an array for card placement.

3. Setting up the timer to update every 0.1 seconds using setInterval and formatting the display.

4. Understanding how to stop the timer using clearInterval.

5. Starting the timer only after the first card is clicked, and ensuring it doesn’t restart on subsequent clicks.

6. Creating a "Restart" button that resets the game state and restarts the board.

7. Automatically initializing the game board when the page loads.

style.css:
1. Designing the card flip animation using 3D transforms, including layering with .card-inner, .card-front, and .card-back, setting backface visibility, and adding perspective for smooth flipping.

2. Learning how to use a Media query to make the the website usable on a phone.
