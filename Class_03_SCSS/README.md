# CSS Preprocessors

## Block Element Modifier methodology

The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS. Developed by the team at Yandex, its goal is to help developers better understand the relationship between the HTML and CSS in a given project.

## SCSS & LESS

A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax. There are many CSS preprocessors to choose from, however most CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector, inheritance selector, and so on. These features make the CSS structure more readable and easier to maintain.

## Setup SCSS locally
1. Open terminal in the project directory
2. node -v
   if there is result, all good, if not, install nodejs
3. npm init
4. npm install node-sass --save-dev
5. add to package.json -> "scripts" > "compile:scss": "node-sass scss/style.scss css/style.css -w"
6. npm run compile:scss

## Start the project localy
1. Clone the repo
2. Open terminal in the project directory
3. rum "npm install" in the terminal
4. run "npm run compile:scss" in the terminal

## Extra links:
- https://en.bem.info/methodology/
- https://sass-lang.com/
- http://lesscss.org/
