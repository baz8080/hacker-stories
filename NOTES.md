
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
