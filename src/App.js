import React from 'react';
import './App.css';
import { useState } from 'react';


function App() {
  const [enlist, setEnlist] = useState("");
  const [items, setItems] = useState([]);

  function saveInput(event) {
    const adding = event.target.value;
    setEnlist(adding);
  }

  function add() {
    setItems(prevItems => {
      return [enlist, ...prevItems];
    });
    setEnlist("");
  }

  function deleteItem(index) {
    setItems(prevItems => {
      return prevItems.filter((_, i) => i !== index);
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={saveInput}
          value={enlist}
        />
        <button onClick={add} className="toadd">
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <li key={index}>
              {todoItem}      .
              <button onClick={() => deleteItem(index)} className= "del">
                <span>x</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
