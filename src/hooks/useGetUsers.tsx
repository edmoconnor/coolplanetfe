// import logo from './logo.svg';
import '../App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
// import DataTable from 'react-data-table-component';

export function useGetUsers() {
  return (
    fetch('http://localhost:3000/users')
    .then(data => data.json())
  )
}

export function useGetUser(id) {
  return fetch('http://localhost:3000/users/' + id)
    .then(data => data.json())
}


 
