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
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from "react-router-dom";

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
    let navigate = useNavigate();

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

    useEffect(() => {
      fetch('http://localhost:8000/users')
        .then(response => response.json())
        .then(data => {
          setUsers(data)
          setLoading(!loading)
        })
    }, []);

  return (
    <div className="App">
      <h2>Users List</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell style={{width:"90%"}}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row, i) => (
              <TableRow
                component={Link} to={`/users/${row['id']}/`}
                // onClick={() => { navigate(`/users/${row['id']}`); }}
                key={i}
              >
                <TableCell component="th" scope="row">
                  {row['first_name']} {row['last_name']}
                </TableCell>
                <TableCell></TableCell>
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
    </div> 
  );
}

export function GetUser() {
  const [userProfile, setUser] = useState([]);
  const [userError, setUserError] = useState([]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");
  const {id} = useParams();

  // useGetUser(id)
  //   .then(items => {
  //     const array = [];
      
  //     // setUser(items)
  //     console.log(items)
  // })

  useEffect(() => {
    fetch('http://localhost:8000/users/' + id)
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
        <h2>User Details</h2>
        {userProfile['id'] &&
          <>
            <div className='avatar'><img src={userProfile['avatar']} alt=" "/></div>
            <h1>{userProfile['first_name']} {userProfile['last_name']}</h1>
            <div>
              <div className='details'>
                <p>ID: {userProfile['id']}  </p>
                <p>Email: {userProfile['email']} Verified: 
                  {userProfile['emailVerified'].toString() === 'true' ? 
                    <CheckIcon className='check'/> : 
                    <ClearIcon className='clear'/>
                  }
                </p>
                <p>DOB: {userProfile['dob']}</p>
                <p>Company: {userProfile['company'].name} </p>
                <p>Department: {userProfile['company'].department}</p>
                <p>Skills: {userProfile['skills'].map((skills, i) => <li key={i}>{skills}</li>)}</p>
              </div>
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




