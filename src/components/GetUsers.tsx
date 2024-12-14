import '../App.css';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useGetUser, useGetUsers } from '../hooks/useGetUsers.tsx';
import { Link, useParams } from 'react-router-dom';
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ScaleLoader from "react-spinners/ScaleLoader";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
  marginTop: "150px",
};

export function GetUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("");
    
    console.log('GetUsers')
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

    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setLoading(!loading)
      })
    }, []);

  return (
    <div className="App">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            
            <TableRow
              key={row['name']}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <Link to={`/users/${row['id']}`}>
                <TableCell component="th" scope="row">
                  {row['first_name']}
                </TableCell>
                <TableCell align="left">{row['last_name']}</TableCell>
              </Link>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      <ScaleLoader
        color={color}
        loading={loading}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <div>
        <h2>users</h2>
        {
          users.map((data, i) => {
            return(
              <ul key={i}>
                <Link to={`/users/${data['id']}`}>
                  <li key={data['id']}> {data['first_name'] } {data['last_name']}</li>                 
                </Link>
              </ul>
            )
          })
        }    
      </div>
    </div> 
  );
}

export function GetUser() {
  const [userProfile, setUser] = useState<any[]>([]);
  const [userError, setUserError] = useState([]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#eeeeee");
  const {id} = useParams();
  console.log('GetUser ' + id)

  useEffect(() => {
    // useGetUser(id)
    //   .then(items => {
    //     const array = [];
        
    //     // setUser(items)
    //     console.log(items)
    // })

    fetch('http://localhost:3000/users/' + id)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        const result = new Array();
        result.push(data)
        setUser(result[0])
        setLoading(!loading)
      })
      .catch((error) => {
        console.log(error);
        const result = new Array();
        result.push('User not found')
        setUserError(result[0])
        setLoading(!loading)
      });
  }, [id]);
  
  return (
    <div className="App">
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <div>
        <h2>user profile</h2>
        {userProfile['first_name'] &&
          <>
            <div className='avatar'><img src={userProfile['avatar']} /></div>
            <h1>Name: {userProfile['first_name']} {userProfile['last_name']}</h1>
            <div className='details'>
              <p>ID: {userProfile['id']}  </p>
              <p>Email: {userProfile['email']} Verified: {userProfile['emailVerified'].toString()}</p>
              <p>DOB: {userProfile['dob']}</p>
              <p>Company: {userProfile['company'].name} </p>
              <p>Department: {userProfile['company'].department}</p>
              <p>Skills: {userProfile['skills']}</p>
            </div>
          </>
        }

        {userError &&
          <p>
            {userError} 
          </p>
        }
      </div>
    </div>
  );
}




