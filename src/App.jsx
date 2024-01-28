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
                NAVIGATION BAR
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
          <div className={"mainText"}>
            <mainText>
              Hello, this is our project please click savings tracker in the top right!
            </mainText>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
