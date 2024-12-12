// import React from 'react';
import '../App.css';


export function getUsers() {
  return fetch('http://localhost:3000/users')
    .then(data => data.json())
}

export function getUser(id) {
  return fetch('http://localhost:3000/users/' + id)
    .then(data => data.json())
}


 
