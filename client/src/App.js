import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact List Full Stack Application</h1>
        <div>
          <Link to="/allcontacts"><button>All contact</button></Link>
          <Link to="/newcontact"><button>Add New Contact</button></Link>
        </div>

      </header>
    </div>
  );
}

export default App;
