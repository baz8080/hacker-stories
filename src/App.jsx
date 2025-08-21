import './App.css'
import React, { useState } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('react');

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      {searchTerm && <p>Searching for <strong>{searchTerm}</strong></p>}
      <hr />
      <List stories={filteredStories} />
    </div>
  );
}

const Search = ({ search, onSearch }) => (
  <div>
    <label htmlFor="search">Search:</label>
    <input id="search" type="text" onChange={onSearch} value={search} />
  </div>
)

const List = ({ stories }) => (
  <ul>
    {stories.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
)

const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
)

export default App
