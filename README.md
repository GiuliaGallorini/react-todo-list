# React Todo List

This project has been created following this [video](https://www.youtube.com/watch?v=sBws8MSXN7A)
By Traversy Media, Brad Traversy, on January 2019 (before the definitive release of hooks).

## My notes

FRONT-END => BROWSER
React runs on the client side and this makes the interface more interactive, the page is not reloaded every time that something happen.
BACK-END => SERVER

React behaves like a framework, it is the V in MVC, it is your entire application view.
Angular is bigger, includes router, HTTP client, with React that is smaller you have to install these things separately.
React allows you to interact with the DOM and create UIs.

- React makes very easy to build intricate front-end projects.
- It is very organised and uses self-contained independent components that have their own state => more interactive UIs
- Since it uses a virtual DOM, it allows you to update only what is needed, ex. if you have a post with a form, it is only going to update that post component, in order to show that new post, rather than reload the whole page
- it uses JSX which allows you to use JS right in your HTML markup (at the beginning some developers did not like this because they were taught about separation of concerns)
- it makes easier to work in teams because it is organised and everyone can work on the same page but having assigned different components
- BEFORE you should know JavaScript fundamentals
- ES6: classes, deconstructuring, high order array
  => Udemy course: 21-hours JavaScript from the beginning that prepares you for frameworks

Components can have STATES which is just an object with values that determines how the component behaves and renders.
You can have events to dynamically update the state and it would automatically reflect or react in the user interface.
Sometimes you need application-level state, that’s data that you want to share between multiple components. For this you have state managers like Redux (third part systems) or context API.
=> Redux is a separate video

Get started: CREATE-REACT-APP

- a CLI tool for creating React applications, it creates like a boilerplate app that you can build from
- it uses Webpack, a module bundler, that you can use without the need to configurate them on your own
- it comes bundled with a dev server with hot reload (auto reload as you save)
- it comes with a build tool, you can simply run “npm run build” and your code will be compiled in a way that the browser can read it, you can actually deploy

Anatomy of a component:

- class-based components: have life cycles, hold states
- functional components: can hold states only if they use the react hooks
  => Hooks are a separate video
- Class Post extends React.Component => you have a class called Post, it is a Post component, it extends the component class in the React libary
- render () {} => the render method is the only required life cycle method, it take care of rendering the component on the page, it is going to return JSX, very very similar to HTML, we can have JavaScript expression embedded directly in the markup, it is very dynamic, you can also have events

Let’s go ahead and jump in! Create a Todo List

- the Todo Items are coming from the JSON placeholder which is a fake REST API that acts as a back-end server that feeds is data.
- the Todo Component wraps everything
- the Add Todo Component which is a form
- the Header
- the About Page, that is also a component
- no Bootstrap, to focus on styling within the React Components

On GitHub, facebook/create-react-app, see Readme and instructions.
In the instructions:

- NPM to install it globally in your system, and then you can use it.
- NPX it installs it locally, you can use create-react-app to generate an application, but is does not install it in your system.

PACKAGE.JSON
The file package.json has information about the app, the dependencies and the packages that you have installed. There are three main packages:

- React
- React DOM that loads the components in the browser (with React Native you can build web apps without Document Object Model)
- React Script: so the server is able to compile the app, run tests
  All the web pack stuff is done with create-react-app!
  Then different scripts: start, to start the dev server, build, to compile the code into something that the browser can read (before deploing "\$ npm run build"), test, eject, to customize your web pack.

PUBLIC > INDEX.HTML
It is a single page application framework, everything runs through this physical single page. There is an extremely important part
<div id="root"></div>
this is the output for all the main react components.
How the app component gets put here?

SRC > INDEX.JS
Where you import the main app component parent that wraps everithing > import App from './App';
The ReactDOM is rendering the app component into that element with the ID "root": ReactDOM.render(<App />, document.getElementById('root'));

Service Worker is for progressive web apps and offline content.

SRC > APP.JS
The app component that has being loaded is app.js, this is formatted like any other class-based component:
class App extends Component, from the library.
It renders/returns a JSX that looks like an HTML, basically an easier way to write JavaScript, to output it in the browser. Writing pure JS would be much more tiring! Inside JSX we can include JS variable using curly brackets.
=> in JSX you can not use class attribute, you have to use class name.
You can cancel everything inside the <div> "App".

STATE
Different Components can have their own state, but many times you need state that multiple components need to access, so they should be written in a place where they can feed down: in the main App Component state, within the class, after the first opened curly brackets, above the render.
The state is a JS object, "todos" is an array of objects: write an id, title, completed true/false (when you have a backend you work with an API and a unique ID for your resources).
To pass down the state todos as a props is just like an HTML attribute.

PROP
Prop types are a sort of validation for properties that a component should have, you can set the type and to be required or not.

STYLE
In JSX you can use inline style, the markup and styling is in the components, by using double curly brackets {{...}}

 <div style={{ backgroundColor: '#f4f4f4'}}></div>
or const itemStyle = {backgroundColor: '#f4f4f4'} and <div style={itemStyle}>

// NEW <React.Fragment />

REACT ROUTER
Before making HTTP requests with JSON placeholder, let's work with React Router. In the console:
\$ npm i react-router-dom
In App.js:
import { BrowserRouter as Router, Route } from "react-router-dom";
<Route exact path="/" render={props => ()} />
<Route path="/about" component={About} />
In Header.js:
import { Link } from 'react-router-dom';

<Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>

HTTP REQUESTS
Because often you work with a third part API or your own server (backend).
There is a fantastic service https://jsonplaceholder.typicode.com/, it allow you to have a backend to work with.
AXIOS (http library) \$ npm i axios
You are going to fetch the todos from the JSON placeholder API instead of having them hard-coded here. You keep the todos in the state but it is an empty array.
To make an initial request you use another lifecycle method (you only dealt with render so far), the componentDidMount.

DEPLOY
IF you do not have a backend server, if you are not using Express, you can deploy everywhere, even Github Pages. You can create a production build using \$ npm run build. It creates an extra folder called build that has all the static files (ex. index.html, js files). They look different but this is what is actually going to run in the browser: you dealt with files that have been loaded by the react front-end dev server, these are static assets you can just upload and they should work.
If you use a full-stack app like Express you would put these files in the public directory.
You can use React as a front-end (as a client) with anything: Express back-end, PHP, Python (Django)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
