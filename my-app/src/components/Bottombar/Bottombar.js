import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import './Bottombar.css'; // Du kannst eine separate CSS-Datei für die Styles erstellen

const Bottombar = () => {
  return (
    <div className="bottombar">
      <div>
        <HomeRoundedIcon />
      </div>
      <div>
        <SearchRoundedIcon />
      </div>
      <div>
        <AddRoundedIcon />
      </div>
      <div>
        <AccountCircleRoundedIcon />
      </div>
    </div>
  );
};

export default Bottombar;
