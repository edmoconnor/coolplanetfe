import '../App.css';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useGetUser, useGetUsers } from '../hooks/useGetUsers.tsx';
import { Link, useParams } from 'react-router-dom';
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ScaleLoader from "react-spinners/ScaleLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export function GetUsers() {
    // const [spinner, setSpinner] = useState(false);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#eeeeee");
    
    console.log('hnbjhbughvgyvg')
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
      .then(data => {
        setUsers(data)
        setLoading(!loading)
      })
    
  // )
    }, []);

  return (
    <div className="App">

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
        // if(!response.ok) throw new Error(response.status);
        // else 
        return response.json();
      })
      .then(data => {
        console.log('data' + data['company'].name + data.dob)
        const result = new Array();
        result.push(data)
        setUser(result[0])
        setLoading(!loading)
      })
      .catch((error) => {
        console.log(error);
        const result = new Array();
        result.push('User not found')
        console.log('result ' + result[0]);
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
      <div>
        <img src={userProfile['avatar']} />
        <p>{userProfile['id']}  </p>
        <p>{userProfile['first_name']} {userProfile['last_name']}</p>
        <p></p>
        <p>{userProfile['email']}</p>
        <p>{userProfile['dob']}</p>
        <p>{userProfile['company'].name} {userProfile['company'].department}</p>
        <div>
          {userProfile['skills'].map((data, i) => {
            <div key={i}>
              <p>{JSON.stringify(data)}</p>
            </div>
          })}
        </div>
      </div>
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




