// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

import './App.css'
import {
  BrowserRouter, Routes, Route, Link
} from "react-router-dom"
import SavingsTracker from "./SavingsTracker.jsx";

export default function App() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <>
      <BrowserRouter>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography color='inherit' as={Link} to="/" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                GoalsTracker
              </Typography>
              <Stack direction='row' spacing={2}>
                <Button as={Link} to="/SavingsTracker" color='inherit'>Savings Tracker</Button>
              </Stack>
            </Toolbar>
          </AppBar>
          <div>
            <Routes>
              <Route path="/SavingsTracker" element={<SavingsTracker/>}/>
            </Routes>
          </div>
          <div className={"textBox"}>
            <h1>Welcome to GoalsTracker!</h1>
            <p>
              This is our React-based web app where you can add your financial goals to track, 
              where you can include a goal amount, current amount saved, URL to buy, and a product description. 
              In our current example, you will see the user currently has multiple goals set up to purchase desktop components.
            </p>
            <div classname="textBox">
              <h3>About us:</h3>
              <p>
                We are a hacking group of two, where this is both our first hackathon. Although not the most sophisticated project, we both learned much about web dev,
                javascript, and version control through this project. This was a very cool opportunity, so thank you to TamuHack!
              </p>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
