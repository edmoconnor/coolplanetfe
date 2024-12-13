// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { GetUser, GetUsers } from './components/GetUsers.tsx';
import Home from './components/Home.tsx';
// import UsersList from './components/GetUsers.tsx';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';


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
    // getUsers()
    //   .then(items => {
    //     // if(mounted) {
    //       setUsers(items)
    //     // }
    //   })
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        Coolplanet
      </header>
      <>
          {/* <GetUsers /> */}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<GetUsers />} />
            <Route path="/users/:id" element={<GetUser />} />
            {/* <Route path="*" element={<NoMatch />} /> */}
         </Routes>
      </>
      <div>
      </div>
    </div>
  );
}

// function handleSaveClick() {
//   console.log('✅ Progress saved');
// }

export default App;
