import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import './Bottombar.css'; // Du kannst eine separate CSS-Datei für die Styles erstellen

const Bottombar = () => {
  return (
    <div className="bottombar">
      <a href="#">
        <HomeRoundedIcon />
      </a>
      <a href="#">
        <SearchRoundedIcon />
      </a>
      <a href="#">
        <AddRoundedIcon />
      </a>
      <a href="#">
        <AccountCircleRoundedIcon />
      </a>
    </div>
  );
};

export default Bottombar;
