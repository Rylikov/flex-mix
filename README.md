Flex-Mix
========

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
](https://opensource.org/licenses/MIT)

- [Introduction](#introduction)
- [Installation](#installation)
 - [NPM](#npm)
- [Application structure](#application-structure)
- [Run](#run)
- [Gulp tasks](#gulp-tasks)
 - [update](#update)
 - [clean](#clean)
 - [clean-js](#clean-js)
 - [clean-css](#clean-css)
 - [concat-minify-js](#concat-minify-js)
 - [concat-minify-css](#concat-minify-css)
 - [concat-minify-html](#concat-minify-html)
 - [watch](#watch)
 - [default](#default)
- [License](#license)

## Introduction
#### Welcome to Flex-Mix. 
Flex-Mix is Front-end boilerplate based on Flex-Grid(http://flexboxgrid.com/) and SASS-structure boilerplate(https://github.com/HugoGiraudel/sass-boilerplate). 
This is my own solution for faster frontend development. I am trying to update my code as fast as front-end development growing.

## Installation
```
git clone https://github.com/DaniilSydorenko/flex-mix.git
```

### NPM

```
npm install --save-dev
```

## Application structure

```
flex-mix/                           =>      Base catalog              
    assets/                         =>      Libraries, custom scripts and styles, media
        img/                        =>      Images
        js/                         =>      Scripts
            main.js                 =>      Initial file for custom scripts    
        libs/                       =>      Scripts libraries
            jquery-2.2.3.js         =>      JQuery
            modernizr-custom.js     =>      Modernizr
    dist/                           =>      Production build
        css/                        =>      Concatenated and minified styles
        js/                         =>      Concatenated and minified scripts
        html/                       =>      Concatenated and minified HTML
    src/                            =>      Application files
        scss/                       =>      SASS structure
            abstracts/              =>      Reusable code(mixins, variables)
            base/                   =>      Based styles(typography, helper classes)
            components/             =>      Application view components(buttons, breadcrumbs, etc.) 
            layout/                 =>      Reusable part of view(header, footer)
            pages/                  =>      Pages style rules
            themes/                 =>      Themes style rules
            vendor/                 =>      Outer libs
            main.scss               =>      Main file include all sass files(by @import)
    .gitignore                      =>      Gitignore file
    bower.json                      =>      Manifest file for Bower
    CHANGELOG.md                    =>      Log of application versions changes
    gulpfile.js                     =>      Gulp file
    index.html                      =>      Index file
    LICENSE.md                      =>      MIT license
    package.json                    =>      Manifest file for NPM
    README.md                       =>      Readme file
```

## Run

```
After instalation, open index.html file.
```

## Gulp tasks

#### update
```
Looking for outdated packages
```

#### clean
```
Remove all files from dist folder before building
```

#### clean-js
```
Remove all .js files from dist folder before building
```

#### clean-css
```
Remove all .css files from dist folder before building
```

#### concat-minify-js
```
Concatenate and minify all .js files
```

#### concat-minify-css
```
Concatenate and minify all .css files
```

#### concat-minify-html
```
Concatenate and minify all .html files (for production only)
```

#### watch
```
Watching for changes and rebuilding scripts and styles
```

#### default
```
Default task. Clean dist folder, run build and watcher
```

License
-------

The MIT License (MIT)

Copyright (c) 2016 Daniil Sydorenko

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.