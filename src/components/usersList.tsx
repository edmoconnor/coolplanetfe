import React, { useState, useEffect } from 'react';
import { getUsers } from '../hooks/GetUsers.tsx';
import Button from '@mui/material/Button';

function UsersList() {
const [users, setUsers] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // setSpinner(true);
    let mounted = true;
    getUsers()
      .then(items => {
        if(mounted) {
          setUsers(items)
        }
      })

    // return () => mounted = false;
  }, []);

  return (
    <div>
    <h2>users</h2>
    <ul>
    </ul>
    {users.map((data) => {
      return(
        <ul>
          <Button onClick={() => {
            console.log(data['id'])
          }}
            > 
            <li key={data['id']}> {data['first_name'] } {data['last_name']}</li>
          </Button>
        </ul>
      )
    })
    }    
  </div>
  );
}

export default UsersList