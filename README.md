![Example of horde gameplay](https://vivianeasley.github.io/horde/images/game-demo.jpg)

# Horde: A cooperative or solo way to play magic with your cards

## [DEMO](https://vivianeasley.github.io/horde/)

This is a way to play Magic the Gathering solo or cooperatively with your friends! The game is partly managed by the computer but mostly managed by the players. Built over about a week it only contains two decks currently but if there is interest I will continue to fix bugs and add decks to it. Decks to add: Elementals, Beasts, Rogues, and Spirits.

## Built using:
- lighterHTML
- Immer and simple code for immutable state management

## Built on:
- 11ty to generate static files
- esbuild to compile JS/TS, and minify
- light-server to run dev server
- SCSS rarely ever used outside of imports
- PostCSS css post processing
-- CSSnano minification
-- Autoprefixer prefixer

## To Run
- npm install
- npm run dev
- navigate to localhost:8000
