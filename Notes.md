# Setting up  

    follow the javascript course setup for this

    we will follow the webpack and babel guide for this

    webpack is an asset bundler

    babel

## steps:

        npm init

        npm install webpack --save-dev

        npm install --save-dev @babel/core @babel/preset-env babel-loader npm install --save core-js@3 regenerator-runtime

        create the entry in webpack.config.js
             entry: ['./src/js/index.js']

        create the entry to .babelrc to this
            {
                "presets": [
                    ["@babel/env", {
                        "useBuiltIns": "usage",
                        "corejs": "3",
                        "targets": {
                            "browsers": [
                                "last 5 versions",
                                "ie >= 8"
                            ]
                        }
                    }]
                ]
            }
        
        Install the webpack cli

        npm install webpack-dev-server --save-dev
        install webpack developement server, allow us to see changes to our code whenever we change a file

        configure package.json scripts and add dev, start and build

        npm run start 



# Building the HTML and CSS

Learning bootstrap. then build on top of it. Bootstrap very useful for getting grids

# Learning more about the tarot arcana
- from tarot.com 
- from https://askastrology.com/wp-content/uploads/2019/01/tarot-ebook.pdf 
- We have learnt a bit from both. Enough to give summary of the meaning but not enough to give an in depth reading of a person. That requires experience.

# Time to start the Javascript part



## Model-View-Controller

1. Model
    - the brain of the app
    - responsible for getting memory and manipulating data
    - it can also interact with the database

2. View
    - Handles the actual view of the application
    - renders the view
    - interacts with the html and css of the app

3. Controller
    - controller takes  in the user input
    - This could be in the form of user input or click
    - the controller also acts like a middleman between the model and the view.


## Bugs

## Possible improvements
1. increasing the number of shuffle
2. create more accurate description
3. more on what tarot means 
4. More info on the different type of reading
5. getting the user to voice out his life question or concern

    

# TODO once app is built

1. web hosting
    - simple hosting service, pick something that is not too expensive
    - possible hoster is bluehost
2. Domain name
    - choose a website identifier
    - once you have a server and domain name, you connect the two together

