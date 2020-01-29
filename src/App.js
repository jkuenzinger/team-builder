import React, { useState } from 'react';
import logo from './logo.svg';
import MemberCard from './components/Card';
import Form from './components/Form';
import './App.css';

function App() {
   const [members, setMembers] = useState([])
      
   const addNewMember = e => {
      const newMember = {
        id: Date.now(),
        name: e.name,
        email: e.email,
        role: e.role
      };
      setMember([...members, newMember]); 
   };
   
 return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>
            <Form addNewMember={addNewMember} />
            <MemberCard member={member} />
            </code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
