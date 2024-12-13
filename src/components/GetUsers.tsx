import '../App.css';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useGetUser, useGetUsers } from '../hooks/useGetUsers.tsx';
import { Link, useParams } from 'react-router-dom';


export function GetUsers() {
    // const [spinner, setSpinner] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
    //   let mounted = true;
    //     useGetUsers()
    //       .then(items => {
    //         if(mounted) {
    //           setUsers(items)
    //           console.log(items)
    //         }
    //     })
    //     return () => mounted = false;
    //   console.log('gvhg')
  // return (
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => {setUsers(data)})
    
  // )
    }, []);

  return (
    <div className="App">
    <div>
      <h2>users</h2>
      {
        users.map((data) => {
          return(
            <ul>
              {/* <Button onClick={() => {
                  console.log([data['id']])
                  
                }}> */}
                <Link to={`/users/${data['id']}`}>
                    <li key={data['id']}> {data['first_name'] } {data['last_name']}</li>                 
                </Link>
              {/* </Button> */}

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
  const [userProfile, setUser] = useState([]);
  const {id} = useParams();
  console.log('wucvwjcd' + id)
  useEffect(() => {
    // useGetUser(id)
    //   .then(items => {
    //     const array = [];
        
    //     // setUser(items)
    //     console.log(items)
    // })

    fetch('http://localhost:3000/users/' + id)
      .then(response => response.json())
      .then(data => {
        setUser(data)
      })
      // .catch(
      //   console.log('uvwchvj')
      // )
  
  }, [id]);

return (
  <div className="App">
  <div>
    <h2>user profile</h2>
    <> 
      <p>{userProfile['id']}  </p>
      <p>{userProfile['first_name']}</p>
      <p>{userProfile['last_name']}</p>
      <p>{userProfile['email']}</p>
      <p>{userProfile['dob']}</p>
      <img src={userProfile['avatar']} />
    </> 
  </div>
</div>
);
}



