# React

## Contents

- [React](#react)
  - [Contents](#contents)
  - [Overview](#overview)
  - [Single File React HTML Pages](#single-file-react-html-pages)
  - [Standalone Projects](#standalone-projects)
  - [Resources](#resources)
  - [Introduction](#introduction)
  - [Component (think of as a class)](#component-think-of-as-a-class)
    - [CreateElement From Component (think of instantiating a class)](#createelement-from-component-think-of-instantiating-a-class)
    - [Render Method](#render-method)
    - [Rendering An Element In Raw HTML](#rendering-an-element-in-raw-html)
  - [React Component Class](#react-component-class)
  - [createElement](#createelement)
  - [Render Method](#render-method-1)
  - [React Clock](#react-clock)

## Overview

This is a teaching repository for React created by Facebook.

The repo is sorted into [single file react projects](SingleHtmlFiles) which can be run as standalone files ie they have React imported as a CDN into a single HTML file.  

This repository is a combination of my own learning, also learning React from Udemy's web developer course of 2018, and also from Egghead which has a course on React.

Also I have a much more complex set of standalone projects built with the `create-react-app` [here](StandaloneProjects).

## Single File React HTML Pages

[Single File React HTML Pages](SingleHtmlFiles/README.md)

## Standalone Projects

[React Projects Built With `create-react-app`](StandaloneProjects/README.md)

## Resources

[reactforbeginners.com](https://reactforbeginners.com/)

[React Learning Path](https://medium.com/free-code-camp/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6)

[Build This Game On React Docs Tutorial](https://reactjs.org/tutorial/tutorial.html)

[FreeCodeCamp React Tutorial](https://www.freecodecamp.org/news/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2/)

[Live Play Around With React And Learn Basics - All In Browser](https://jscomplete.com/playground)

Examples - https://www.jqwidgets.com

[Facebook React Tutorial] https://facebook.github.io/react/tutorial/tutorial.html


## Introduction

Statement by creators of React at Facebook 

*React is, in our opinion, the premier way to build big, fast Web apps with JavaScript. It has scaled very well for us at Facebook and Instagram.*

React updates the view (render) when underlying data changes

A view exists for every 'state' of the app

'Declarative' views

'Encapsulated components' which manage their own state

Render using

	Javascript

	JSX which uses XML to store data

React Setup

https://reactjs.org/tutorial/tutorial.html

```js
choco install yarn
yarn global add create-react-app

// or
npm install -g create-react-app
create-react-app my-app
cd my-app
npm start
```


## Component (think of as a class)

Component
Input
Props
Output
Returns a HIERARCHY OF VIEWS to display via RENDER method

```js
// Sample Component code
class ShoppingList extends React.Component {
  render() {
    return (
      Shopping List for {this.props.name}
    );
  }
}
```

### CreateElement From Component (think of instantiating a class)

```js
return React.createElement('div', 
	{className: 'shopping-list'},
  	React.createElement('h1', ...),
  	React.createElement('ul', ...)
);
```

### Render Method

Returns a description of what you want to render
Returns a REACT ELEMENT which is a lightweight description of what to render
Create REACT ELEMENT using JSX language
Any Javascript expression can go inside the JSX expression
Every REACT ELEMENT is a REAL JAVASCRIPT OBJECT
React uses these instructions to render the screen





### Rendering An Element In Raw HTML

Before we talk about React let's talk about how raw HTML renders an element which goes something like this

```js
<div id="root"></div>
<script type="text/javascript">
  const rootElement = document.getElementById('root')
  const element = document.createElement('div')
  element.textContent='Hello World'
  element.className='container'
  rootElement.appendChild(element)
</script>
```




## React Component Class

Component
	Input
		Props 
	Output
		Returns a HIERARCHY OF VIEWS to display via RENDER method
	

## createElement

```js
return React.createElement('div', 
	{className: 'shopping-list'},
  	React.createElement('h1', ...),
  	React.createElement('ul', ...)
);
```

## Render Method

Returns a description of what you want to render

Returns a REACT ELEMENT which is a lightweight description of what to render

Create REACT ELEMENT using JSX language

```js
return React.createElement('div', 
  {className: 'shopping-list'},
  React.createElement('h1', ...),
  React.createElement('ul', ...)
);
```

Any Javascript expression can go inside the JSX expression

Every REACT ELEMENT is a REAL JAVASCRIPT OBJECT

React uses these instructions to render the screen





## React Clock

Here is a basic clock

```js
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

The setInterval function calls function tick() every second.

This function tick() calls ReactDOM.render() so this gets called every second.

It renders the chosen element, in this case `hello world` plus a time string, to the screen at the position of the `div` element with id `root`.

React will compare the previous and current rendition of the screens in the virtual DOMs which it creates. It will then only render the changes, making for a more efficient screen re-render.

We can see this visually by `inspecting` the clock with Chrome Dev Tools and expanding to see the relevant HTML element. We can see the rest of the DOM is static but this little bit updates on every clock tick.