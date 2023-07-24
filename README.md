# The Bad Bank

![screenshot](/screenshot.png)

## Overview

Bad Bank Project is a unsecure banking application that simulates a create account function, a login, deposit, withdraw and an all data summary page. The project was created using standalone Single Page React Routing as well as styling with Bootstrap.

This is a simple React app that presents the user with an ATM-like interface, with options to deposit or withdraw money, as well as display the current account balance. The goals of this exercise include:

1. Implement user-friendly UI and React components
2. Manage state of various UI elements
3. Validate form content in conjunction with state of other components


## Features & Improvements

The exercise included the following details, which are implemented in the app:

- Adding validation so users can’t withdraw more money than the account balance
- Modifying the user interface to require users to select deposit or withdraw before an input field is visible

I styled the app using basic CSS in order to give it a cleaner interface.

I attempted to implement dropdown menus and buttons using Bootstrap, but was unsuccessful at the time of submission. I plan to go back and complete the UI improvements.

## How to Run

[**Click this link**](https://ahmadk-bankingapp.s3.amazonaws.com/index.html#/) to view the app live on Amazon S3.

### Installing

* Clone this repo

* Use "npm install" to load a simple HTTP Server for the project
```
npm install
```

* Use "npm start" command in the project folder to start the React App development environment
```
npm start
```

* Navigate your Browser to...
```
localhost:3000
```
## Technologies Used

- React, Javascript, CSS, HTML
- Bootstrap 

## Create React App

I converted this exercise to a React app by using `create-react-app`. Information can be found here: [**Create React App**](https://reactjs.org/docs/create-a-new-react-app.html).

You can learn more in the **Create React App documentation** [here](https://facebook.github.io/create-react-app/docs/getting-started) or [here](https://github.com/facebook/create-react-app).

### Available Scripts

<details>
<summary>In the project directory, you can run:</summary>

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

</details>

## License

[MIT License](LICENSE)
