-#Flickr Photo Search Application

This application takes a user input and searches Flickr for related images. CLicking on an image will enlarge it and clicking again will take you back to the results page

open index.html to access application

-#To Set up dev enviornment and upadate app-----

1. Install node.js and dependencies.

node.js comes with a package manager called npm.

to update enviornment with dependencies run 

$ npm install 

this application makes use of webpack static asset packager
webpack can be installed through npm:

$ npm install webpack -g
webpack is now installed globally and the webpack command is available.



2. Webpack Build -- 
inside the root directory run the following command in the terminal when changes are made to the source files
$ webpack src/main.js build/bundle.js --module-bind 'js=babel-loader'

once the build is done, open index.html to access application

