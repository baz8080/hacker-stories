import './App.css'

function getTitle(title) {
  return title || 'Default Title';
}

function App() {

  return (
    <div>
      <h1>Welcome to {getTitle('Hacker Stories')}</h1>

      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  )
}

export default App
