import './App.css';
import Input from './components/Input'
import Card from './components/Card'
import { useState } from 'react'
import { nanoid } from 'nanoid'

function App() {
  
  const [value, setValue] = useState()
  const [notes, setNotes] = useState([]);
  
  async function handleSubmit(evt) {
    evt.preventDefault();
    if (value) {
      const body = {
        id: nanoid(),
        content: value.trim(),
      }
      fetch('http://localhost:7070/notes', {
        method: 'POST',
        body: JSON.stringify(body)
      });

      fetch('http://localhost:7070/notes')
        .then(response => response.json())
        .then((list) => {
          setNotes(list);
        });
    }
  }

  function handleChange(evt) {
    setValue(evt.target.value.trim());
  }

  async function handleRemove(evt) {
    const id = evt.target.closest('.card').id;
    const response = await fetch('http://localhost:7070/notes/' + id, {
      method: 'DELETE'
    });
    if (response.ok) {
      await fetch('http://localhost:7070/notes')
        .then(response => response.json())
        .then((list) => {
          setNotes(list);
        });
    }
  }
    async function handleRefresh() {
      await fetch('http://localhost:7070/notes')
        .then(response => response.json())
        .then((list) => {
          setNotes(list);
        });
    }
  
    return (
      <div className="App">
        <h1> Notes </h1>
        <div className='refresh' onClick={handleRefresh}></div>
        <div className='container'>
          {notes.map((el) => <Card id={el.id} body={el.content} key={el.id} handleRemove={handleRemove} />)}
        </div>
        <Input handleSubmit={handleSubmit} handleChange={handleChange} />
      </div>
    );
  
}

export default App;
