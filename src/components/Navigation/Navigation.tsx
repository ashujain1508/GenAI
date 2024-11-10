import React from 'react';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import './Navigation.css';
import barclaysLogo from '../../assets/Barclays-logo.svg';
import eagleLogo from '../../assets/Eagle_RGB_Cyan_Large.svg';
const Navigation = () => {
  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
  };

  return (
    <header className="header">
      <div className="header__left">
        <img src={eagleLogo} alt="Logo" className="header__logo" />
        <img src={barclaysLogo} alt="Logo" className="header__logo" />
      </div>
      <div className="header__right">
        <div className="header__item">
          <CircleNotificationsRoundedIcon className="header__icon" />
          <span>Notification</span>
        </div>
        <div className="header__item">
          <Person2RoundedIcon className="header__icon" />
          <span>Profile</span>
        </div>
        <div className="header__item">
          <SearchRoundedIcon className="header__icon" />
          <span>Search</span>
        </div>
        <div className="header__item" onClick={handleLogout}>
          <LogoutRoundedIcon className="header__icon" />
          <span>Logout</span>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
