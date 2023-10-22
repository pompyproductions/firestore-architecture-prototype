# webpack-firebase-template
 
A simple starting point for Firebase web projects.


## Setup

- Step 1: Create a new repository using this template and run `npm install`.  
- Step 2: Get your Firebase credentials and paste them into `src/index.js`.  

That's it! Now you can build away.


## Resize module

While I wanted to keep this as barebones as possible, I find myself unable to live without the few lines of code you can find in `src/modules/resize.js`. The only thing it does is report the height of the page every time there's a change in size. The height is stored in a css variable called `--doc-height` and can be used to circumvent the annoying "100vh" issue (I used it in `src/sass/layout/_root.scss`).


## Sass architecture

Sass is another must, so to keep things simple I only populated the `src/sass/globals` folder with a few helpful lines of code:

- a light CSS reset,
- a color palette and a font declaration for you to substitute,
- a `@disable-selection` mixin to remove annoying highlights where you don't want them,
- some screen-width breakpoints and a `@break-at(width)` mixin to help with responsive layout (works well with mobile-first approach).