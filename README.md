# NBA-Memory-Game
This is a 4x4 NBA-themed memory matching game where players flip over cards to find matching pairs of NBA player images. The goal is to match all the pairs as quickly as possible while tracking your best time. It’s a fun and interactive way to test your memory skills and compete against your own high score.

Screenshot of Game: <img width="1470" alt="NBA-Memory-Game" src="https://github.com/user-attachments/assets/7afe1730-0592-48ac-bfcd-7851428dad03" />

Hyperlink to video explanation: [![Watch the demo](https://www.dropbox.com/scl/fi/92l6w4sl90rp646y03u9h/Screenshot-2025-06-07-at-8.53.26-PM.png?rlkey=6gupkop56y8rfj1px9kyg45i1&dl=0)](https://www.youtube.com/watch?v=-c9_ylH6Pi4&t=6s)

index.html: This is the main page of the website where the memory game is played. It contains the game layout, including the card grid, timer, restart button, and links to other pages.

style.css: This file styles the entire website. It handles the appearance of the cards, the flip animations, the layout of the grid, buttons, and text styling to make the game visually appealing.

images folder: This folder stores all the NBA player images used on the cards in the memory game.

about.html: This page provides information about the game, such as how to play, the goal of the game, and maybe some background about the NBA theme.

AI Use:

index.html:
1. Structuring the game timer, handling localStorage for best times, and implementing the logic for flipping and matching cards.

2. Learning how to randomly shuffle an array for card placement.

3. Setting up the timer to update every 0.1 seconds using setInterval and formatting the display.

4. Understanding how to stop the timer using clearInterval.

5. Starting the timer only after the first card is clicked, and ensuring it doesn’t restart on subsequent clicks.

6. Creating a "Restart" button that resets the game state and restarts the board.

7. Automatically initializing the game board when the page loads.

style.css:
1. Designing the card flip animation using 3D transforms, including layering with .card-inner, .card-front, and .card-back, setting backface visibility, and adding perspective for smooth flipping.
