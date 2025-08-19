
## Getting started
- npm create vite@latest hacker-stories-2 -- --template react
- cd hacker-stories-2
- npm install
- npm run dev

## Single root element

This seems to be done when there isn't a single root element to return.

```js
return (
    <>
    </>
)
```

## HTML atributes

htmlFor, not for. for will still be passed through and work in react 16+ but seems to be a discouraged pattern. Since JSX is close to JS, camelCase is used.




## Different function syntax

```js
// function declaration
function App() { ... }
// arrow function expression
const App = () => { ... }
```

If an arrow function’s only purpose is to return a value, you can remove the block body (curly braces) of the function. In a concise body, an implicit return statement is attached, so you can remove the return statement. 

```js
// with block body
const addOne = (count) => {
    // perform any task in between
    return count + 1;
};
// with concise body as multi line
const addOne = (count) =>
    count + 1;

// with concise body as one line
const addOne = (count) => count + 1;
```

Need to wrap return elements

```js
return (
    <div>
        <label htmlFor="search">Search:</label>
        <input id="search" type="text" onChange={handleChange}/>
    </div>
)
```