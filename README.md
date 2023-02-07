# Model-View-Controller (MVC)

This is a full-stack application utilizes Model-View Controller (MVC) programming to allow a user to publish articles, blog posts, and my thoughts and opinions.


## Features

- Allow a user to post, edit, comment, and delete content on a CMS-style blog site.
- Allow a user to sign in with a username and password.
- Allow a user to sign-up with a username and password.
- Allow a user to view timestamps on a blog post.

## Technology and Methodology

The application utilizes the model-view-controller (MVC) software architecture. It presents a user interface that sends request and solicits responses from a backend MySQL database through javascript based api controllers. 

## Usage

The user can log into a CMS-style blog to perform the following actions:

- Sign-up with a new username.
- Sign-in with an existing username.
- Navigate to the home page, dashboard, and the option to log out.
- Edit an existing blog post.
- Post a new blog post.
- Delete an existing blog post.
- Comment an existing blog post.
    
## Installation

Install package.json dependencies.
- Run "npm i"

Connect connection.js script to your local SQL database editor.
- Modify database password line in .env file with that of your local SQL database editor.

Create database tables:

- Run schema.sql in your local SQL database editor.

- Seed SQL database editor
    - Run "node run seed"

Execute the program:
- Run "npm start"

## Application Demo Snippet
![techblogger](https://user-images.githubusercontent.com/114820394/217341196-d69826b5-3760-4e40-bbab-03df8163dcfc.gif)





## 🔗 Deployed Site Link
[![Click for Website](https://img.shields.io/badge/website-Click-yellow)](https://techblogger.herokuapp.com/)

## Tech Stack


- JavaScript
- TailwindCSS
- JQuery
- MySQL
- Node.js 
    - NPM (Express)
    - NPM (DotEnv)
    - NPM (Sequelize)
    - NPM (handlebars)
    - NPM (connect-session-sequelize)
    - NPM (mysql2)
    - NPM (bcrypt)
- ES6+ Syntax


**Server:** Visual Studio Code


## Authors

- [@liquidmonks](https://www.github.com/liquidmonks)


![Logo](https://i.imgur.com/MrXyBQy.png)


## License

[MIT](https://choosealicense.com/licenses/mit/)

