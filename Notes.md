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


# TODO once app is built

1. web hosting
    - simple hosting service, pick something that is not too expensive
    - possible hoster is bluehost
2. Domain name
    - choose a website identifier
    - once you have a server and domain name, you connect the two together

