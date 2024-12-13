import '../App.css';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useGetUser, useGetUsers } from '../hooks/useGetUsers.tsx';
import { Link, useParams } from 'react-router-dom';


export function GetUsers() {
    // const [spinner, setSpinner] = useState(false);
    const [users, setUsers] = useState([]);

    useGetUsers()
      .then(items => {
        setUsers(items)
        console.log(items)
    })

  return (
    <div className="App">
    <div>
      <h2>users</h2>
      {
        users.map((data) => {
          return(
            <ul>
              <Button onClick={() => {
                  console.log([data['id']])
                  
                }}>
                <Link to={`/users/${data['id']}`}>
                    <li key={data['id']}> {data['first_name'] } {data['last_name']}</li>                 
                </Link>
              </Button>

            </ul>
          )
        })
      }    
    </div>
  </div>
  
);
}


export function GetUser() {
  // const [spinner, setSpinner] = useState(false);
  const [user, setUser] = useState([]);
  const {id} = useParams();
  console.log('wucvwjcd' + id)
  
  useGetUser(id)
    .then(items => {
      const array = [];
      
      setUser(array)
      console.log(array[0])
  })

return (
  <div className="App">
  <div>
    <h2>users</h2>
    <> {user}  </> 
  </div>
</div>
);
}



