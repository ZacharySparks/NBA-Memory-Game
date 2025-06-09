# NBA Memory Game
This is a 4x4 NBA-themed memory matching game where players flip over cards to find matching pairs of NBA player images. The goal is to match all the pairs as quickly as possible while tracking your best time. It’s a fun and interactive way to test your memory skills and compete against your own high score.

Screenshot of Game: <img width="1470" alt="NBA-Memory-Game" src="https://github.com/user-attachments/assets/bada173c-09be-4a8e-8b96-9111c1e47bf0" />

How to use the website: [![Watch the demo](<img width="1470" alt="NBA-Memory-Game" src="https://github.com/user-attachments/assets/61a61f48-eb58-4933-8cfc-2a24e3c7884e" />
](https://www.youtube.com/watch?v=LLoxz7hNxlg)

   What can the user do? How do you interact with it?

      The user flips over two cards at a time and tries to remember the NBA players under the card they flip. If they flip over two card with          the same player, those two cards disappear. Their goal is to clear the board in the quickest time possible. If they set a fastest time,          that time will be saved under "Best Time" for a future user to beat.

File structure
   
   index.html: This file is the main game page featuring the card grid, timer, restart button, About page link, and loading external CSS/JS.

   script.js: This file contains game logic for shuffling, flipping, matching cards, checking wins, timer, and saving best times using              localStorage, with a timer and flip setup.

   style.css: This file styles the entire website. It handles the appearance of the cards, the flip animations, the layout of the grid, buttons,    and text styling to make the game visually appealing.

   images folder: This folder stores all the NBA player images used on the cards in the memory game.

   about.html: This page provides information about the game, such as how to play, the goal of the game, and maybe some background about the NBA    theme.

Credits/Resources

   Einstein showed me how to put images in the image folder

   David showed be how to transfer all my code from VScode to Github through the terminal

AI Use (all ChatGPT):

   index.html: Not used

   script.js:
   
      1. Understanding how to duplicate the array using [...images, ...images] for matching cards.
   
      2. Learning how to randomly shuffle an array for card placement.

      3. Setting up the timer to update every 0.1 seconds using setInterval and formatting the display.

      4. Understanding how to stop the timer using clearInterval.

      5. Starting the timer only after the first card is clicked, and ensuring it doesn’t restart on subsequent clicks.

      6. Creating a "Restart" button that resets the game state and restarts the board.

      7. Automatically initializing the game board when the page loads.

   style.css:
   
      1. Designing the card flip animation using 3D transforms, including layering with .card-inner, .card-front, and .card-back, setting                 backface visibility, and adding perspective for smooth flipping.

      2. Learning how to use a Media query to make the the website usable on a phone.
