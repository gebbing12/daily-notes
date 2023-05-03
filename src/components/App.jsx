import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import ToDoList from "./ToDoList";

function App() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function delectItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div id="notelist">
          <CreateArea onAdd={addNote} />
          {notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            );
          })}
        </div>

        <div id="todolist">
          <div className="heading">
            <h1>To-Do List</h1>
          </div>
          <div className="todoform">
            <input onChange={handleChange} type="text" value={inputText} />
            <button onClick={addItem}>
              <span>Add</span>
            </button>
          </div>
          <div>
            <ul>
              {items.map((todoItem, index) => (
                <ToDoList
                  key={index}
                  id={index}
                  text={todoItem}
                  onChecked={delectItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
