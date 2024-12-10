import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users", {

    })
    .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">

      
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

      </header>
      <div>
        <h2>users</h2>
        {user.map((data) => {
          return(
            <li key={data.id}> {data.first_name} {data.last_name}</li>
          )
        })
        }
              
      </div>
    </div>
  );
}

export default App;
