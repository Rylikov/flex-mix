"use strict";

var argv = require('yargs').argv;

module.exports = {
    get env() {
        return (argv.production) ? 'production' : 'development';
    },
    dirs:       {
        build: '.dist',
        js:    'dist/js',
        css:   'dist/css',
        html:  'dist/html',
        img:   'dist/img'
    },
    files:      {
        js:   'dist/js/*.js',
        css:  'dist/css/*.css',
        html: 'dist/html/*.html'
    },
    components: {
        sass: 'src/scss/main.scss',
        js:   'assets/js/*.js',
        html: '*.html',
        img:  'assets/img/*'
    },
    vendors:    {
        js:  [
            "assets/libs/jquery-2.2.3.js",
            "assets/libs/modernizr-custom.js",
            "assets/js/main.js"
        ],
        css: [
            "node_modules/flexboxgrid/dist/flexboxgrid.css"
        ]
    }
};
