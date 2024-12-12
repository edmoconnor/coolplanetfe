// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { getUser, getUsers } from './hooks/GetUsers.tsx';
// import UsersList from './components/usersList.tsx';
import { Link } from 'react-router-dom';


import Button from '@mui/material/Button';
// import DataTable from 'react-data-table-component';


function App() {
  // const [spinner, setSpinner] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  // const [list, setList] = useState([]);
  
  useEffect(() => {
    // setSpinner(true);
    // let mounted = true;
    getUsers()
      .then(items => {
        // if(mounted) {
          setUsers(items)
        // }
      })
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        Coolplanet
      </header>

      <div>
        <h2>users</h2>
        {
          users.map((data) => {
            return(
              <ul>
                <Link to={'./users/' + data['id']}>
                  <Button onClick={() => {
                    getUser(data['id'])
                      .then(items => {
                      // if(mounted) {
                        setUser(data)
                        console.log(data)
                      // }
                    })
                    console.log([data['id']])
                  }}
                > 
                
                <li key={data['id']}> {data['first_name'] } {data['last_name']}</li>
                  </Button>
                </Link>
                  <>
                    {/* {usersList} */}
                    {/* <p>{data['first_name']}</p>
                    <p>{data.last_name}</p>
                    <p>{data.email}</p>
                    <p>{data['company'].name}</p>
                    <p>{data.company.name}</p> 
                    <p>{data.dob}</p>
                    <img src={data.avatar} alt=""/>  */}
                  </>
              </ul>
            )
          })
        }    
      </div>
    </div>
  );
}

// function handleSaveClick() {
//   console.log('✅ Progress saved');
// }

export default App;
