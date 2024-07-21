import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import './Bottombar.css';

const Bottombar = () => {
  return (
    <div className="bottombar">
      <div>
        <HomeRoundedIcon className="icon"/>
      </div>
      <div>
        <SearchRoundedIcon className="icon"/>
      </div>
      <div>
        <AddRoundedIcon className="icon"/>
      </div>
      <div>
        <AccountCircleRoundedIcon className="icon"/>
      </div>
    </div>
  );
};

export default Bottombar;
