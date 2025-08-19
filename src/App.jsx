import './App.css'
import React, { useState } from 'react';

const Search = () => {
  
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  console.log('search rendered');

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange}/>
      <p>Searching for <strong>{searchTerm}</strong></p>
    </div>
  )
}

const List = (props) =>  {

  console.log('list rendered');

  return (
    <ul>
      {props.stories.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
}

const Item = (props) => {

console.log('item rendered');

  return (
    <li>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li> 
  )
}

const App = () => {

  const stories = [
    {
      title: 'React',
      url: 'https://react.dev/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  console.log('app rendered');

  return (
    <div>
        <h1>My Hacker Stories</h1>
        <Search />
        <hr />
        <List stories={stories} />    
    </div>
  );
}

export default App
