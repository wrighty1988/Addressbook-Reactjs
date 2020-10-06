import React, { useState } from 'react';
import TodoItem from "./components/TodoItem";
import './App.css';

function App() {
    const [input,setInput] = React.useState({name:"",number:""});
    const [items, setItems] = useState([]);

    function addItem(event) {
        setItems(prevData => {
            return [...prevData, input];
        });
        
        setInput("");
        
    }

    function removeItem(id) {
        setItems(prevData => {
            return prevData.filter((item, index) => {
                return index !== id;
            })
        });
    }

    return (
      <div className="todolist">
          <div className="heading">
              <h1 className="title">Address-Book</h1>
              
          </div>
          Name:
              <input
                  type="text" 
                  value={input.name}
                  onChange={(event) => {setInput(event.target.value)}}
              />
              <br></br>
              <button onClick={addItem}>Add</button>
          Number:
              <input
                  type="text"
                  value={input.number}
                  onChange={(event) => {setInput(event.target.value)}}
              />
              <br></br>
              <button onClick={addItem}>Add</button>

          <div className="items">
            <ul>
                {items.map((item, index) => (
                    <TodoItem
                        key={index}
                        id={index}
                        item={item}
                        onCheck={removeItem}
                    />
                ))}
            </ul>
          </div>
      </div>
    );
}

export default App;