# RVENTURE
________________________________________
| build    | status  |
|----------|---------|
| frontend |   [![Netlify Status](https://api.netlify.com/api/v1/badges/bd488fb9-adc8-47a8-be7f-4f6d9b76e638/deploy-status)](https://app.netlify.com/sites/rvadventures/deploys) |
| backend | [![Heroku App Status](http://heroku-shields.herokuapp.com/rventure)](https://rventure.herokuapp.com/api) |
| analysis| scores|
| test coverage   |   [![Test Coverage](https://api.codeclimate.com/v1/badges/5a502ca580cc32e02669/test_coverage)](https://codeclimate.com/github/jtwray/rvAirbnb-frontend/test_coverage) |
| maintainability| [![Maintainability](https://api.codeclimate.com/v1/badges/5a502ca580cc32e02669/maintainability)](https://codeclimate.com/github/jtwray/rvAirbnb-frontend/maintainability)|
|The deployed backend| [API](https://rvadventures.herokuapp.com)|
 |The deployed frontend| [W.I.P](https://rvadventures.netlify.app/).|
 
 
 ![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v17.0.1-blue.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

  ______________________________
  
## Project Overview

5th wheel Airbnb is a company that connects land owners and 5th wheel / RV owners. 
RV parks are often cramped and in many areas are booked months in advance. 📅 
🏕 Collectively, landowners hold vast swaths of unused land that could be earning them revenue. 
By using 5th wheel Airbnb, 
  - 💑  RV owners get access to use these previously unknown/unavailable sites, 🏞🚌
  - 💰 and Landowners get to cash-in on otherwise dormant or underutilized land/>
  

__________________________________


## Key Features
rVenture a mobile app for end users, and Two Dashboard views accessible by authenticated and authorized users. 
#### The Landowner Dashboard 
 - allows control and birds eye view of all incoming patrons, venues, status of the venue
 

 - a place to upsell your Venue with images, user stories, amenities, availability calendar, public contact details
 - a discrete private communication api without giving out your personal cell still communicate in real time through the app with clients
 - access to incoming HR applications for new reservations
#### The RVowner Dashboard
 - features a queue of incoming patrons
 - your current and next assignment details viewable

 
_______________________________________

## Tech Stack
React | Redux | ReactRouter V4 | Netlify | Formik | Yup | Axios | JWT | Material UI | Styled-Componenets
### Front end built using:

#### 1️⃣ [Reactjs](https://reactjs.org/) ![React](https://img.shields.io/badge/react-v16.13.1-blue.svg)

-    Declarative --Declarative views make your code more predictable and easier to debug.
-    Component-Based --Build encapsulated components that manage their own state, then compose them to make complex UIs.
-    Learn Once, Write Anywhere --You can develop new features in React without rewriting existing code

#### 2️⃣ [Redux](https://redux.js.org/) ![Redux](https://img.shields.io/badge/redux-v4.0.5-blueviolet.svg)
 
-   Single immutable state tree
-   Ease of Testing
-   Global Store of App State

#### Front end deployed to `Netlify`

#### [Back end](https://github.com/BWPT-KidsFly/Backend) built using:

#### 1️⃣ [Node Express](https://expressjs.com/) ![Express](https://img.shields.io/badge/express-v4.17.1-lightgrey.svg)

-    Great performance! Node was designed to optimize throughput and scalability in web applications and is a good solution for many common web-development problems (e.g. real-time web applications).
-    Code is written in "plain old JavaScript", which means that less time is spent dealing with "context shift" between languages when you're writing both client-side and server-side code.
-    The node package manager (NPM) provides access to hundreds of thousands of reusable packages. It also has best-in-class dependency resolution and can also be used to automate most of the build toolchain.

#### 2️⃣ [PostgreSQL](https://www.postgresql.org/) ![PostgreSQL](https://img.shields.io/badge/pg-v8.2.1-blue.svg)

-    Implements the SQL standard very well.
-    Completely open source.
-    It supports lots of advanced data types, such as (multi-dimensional) arrays, user-defined types, etc.
_____________________________
## Testing

### 1️⃣ [Jest](https://jestjs.io/) ![Jest](https://img.shields.io/badge/jest-v4.2.4-red.svg)
-   Jest is a JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!
_____________________________

## APIs
##### the HERE and UnSplash api both require environment variables to be created in the .env file of this project

- there are some links here to get you started
  -  youll need to register an account on each site and jump a couple hoops to get each key
- put the key in the .env and your golden
- make sure the variables match whats expected in this projects endpoint calls

### 1️⃣ HERE api distance or directions to anthing nearby based on geolocation
 - https://developer.here.com/sign-up?create=Freemium-Basic&keepState=true&step=account

 - the HERE api is provides nearby amenitites relative to the users current geolocation
 - it can also provide routing, driving or walking directions, airport or train schedules
 - whole lot of power here. go crazy build something special 

### 2️⃣ UNSPLASH API - High Quality Free images serachable by key word / collection / user / random 

-To access the Unsplash API, first join UnSplash with a regular account
  -[create Unsplash account](https://unsplash.com/oauth/applications)
- register your normal account as a dev account to gain access to the api
  - [developer account](https://unsplash.com/documentation#creating-a-developer-account)
  - Once your account has been registered for the API, go to your apps.
  - Click “New Application”, and fill in the required details. to request an api key for a specific application

- Initially, your application will be in demo mode 
  - and will be rate-limited to 50 requests per hour. 
  - This is perfect for demo apps, trying out the API, and for educational purposes.

```
REACT_APP_API_KEY_= your-randomized-api-key-from-unsplash-goes-here-noquotes
``` 

## 3️⃣ BOM Browser Object Model & geolocation api 
  This api integrates with the skyscanner-flight-search allowing the user to find and store their home airport by latitude and longitude coordinates available through the current browser session on the user's device. 

______________________________

## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables; 
Either in their local path
- on the path of the container
- image spun up
- accessible through a custom 3rd party server
- or in a .env file at the root of the project

The .env file could contain the following ( no spaces | no <>'s | no "quotes" ):
- REACT_APP_UNSPLASH_API_:<your registered access token with the UnSplash Platform>
- REACT_APP_HERE_API_:<your registered access key with HERE platform>

_______________________________


## Installation Instructions

* Clone this repo
* run `yarn install` to install all required dependencies
* run `yarn start` to start the local server


### Other Scripts

* start - ***"react-scripts start",*** starts the production server after a build is created
* build - ***"react-scripts build",*** creates a build of the application
* test - ***"react-scripts test",*** runs tests in **tests** directory
* eject - ***"react-scripts eject",*** copy the configuration files and dependencies into the project so you have full control over them
* coverage - ***"CI=true yarn test --coverage --watchAll=false || true"*** refers to how much of your app code is covered by unit tests

________________________________________

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

### Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/BWPT-KidsFly/Frontend/blob/master/README.md) for details on the backend of our project.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).




