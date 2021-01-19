## :rocket: Getting started

This application was set using [React.js](https://reactjs.org/)
Before starting, install [Node.js](https://nodejs.org/).

Next navigate to the project directory and simply run:

```bash
npm install
```

This will install all dependencies defined in package.json and place them in the `node_modules` folder.

### Development

```bash
npm run dev
```

Open <http://localhost:3000> to view it in the browser.

### Production

```bash
npm run build
```

## :pen: Technologies

- React.JS
- TypeScript 
- Styled components
- Jest

## :atom: Atomic Design

[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) provides a clear methodology for crafting design systems. Clients and team members are able to better appreciate the concept of design systems by actually seeing the steps laid out in front of them.

The <a name="app_tree_view">Application Tree View</a> section shows the split structure based on Atomic Design:

    .
    ├── ...
    ├── components
        ├── atoms
        ├── molecules
        ├── organisms
        ├── templates



#### Atoms

Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.

#### Molecules

Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound.

#### Organisms

Molecules give us some building blocks to work with, and we can now combine them together to form organisms. Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface.


## :test_tube: My approach

My goal was to complete the task using as few libraries as possible. I used the webpack to configure the basic level. If I had more time, I would add alias configuration and better import of svg as components, not images.

To make the project supported by all browsers, I used corejs.

With the idea that it will be further developed, I used TypeScript which will make the project easy to refactor. Without a doubt, the use of TS eliminates a whole range of random bugs resulting from uncertainty about data types. Thanks to this, I could focus on important things, such as the complexity of the business logic of the application, and not get distracted by accidentally making mistakes that can be avoided by using appropriately strict typing.
Integration with the IDE is an additional help.

I would like avoid using such a large library as React-Redux, so instead I used the useReducer form React. Thanks of that, the most important elements of the application is in the reducer, which is easier to unit tests, and I've made them. 
Our Articles component is an independent entity, so it is easy to reuse that component or even migrate it to another project.

For testing, I used the latest Jest library.

And the styles were processed in hot styled components technology. If I had more time, I would definitely spend it on styling the application better.



# Schibsted frontend task app

This is a very basic npm project with default webpack setup.

You should use this project as a base for your solution.
Feel free to modify/extend this with whatever you need.

In case you need some assistance take a look at official webpack docs:
 - [Guides](https://webpack.js.org/guides/) 
 - [Concepts](https://webpack.js.org/concepts/)

Eventually this application will request live data from a real API.

You can find the full description of your assignment in [ASSIGNMENT.md](ASSIGNMENT.md)

## API Documentation
Api server can be found in `server.js` file. You should not modify this file, only use it.

To run the server do:
> `$ node server.js`

Server will start listening on port `6010`.

The server has 2 endpoints:

`/articles/sports` - returns a list of articles from `sport` category

`/articles/fashion` - returns a list of articles from `fashion` category

Be aware of backend errors!

