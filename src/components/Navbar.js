import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import { Avatar,IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ForumIcon from '@mui/icons-material/Forum';
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='header'>
        <div className="header__left">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png" alt="profile-pic" />
            <div className="header__input">
                <SearchIcon/>
                <input type="text" />
            </div>

        </div>
        <div className="header__middle">
            <div className="header__option">
                <HomeIcon fontSize = "large"/>
            </div>
            <div className="header__option">
                <FlagIcon fontSize = "large"/>
            </div>
            <div className="header__option">
                <SubscriptionsOutlinedIcon fontSize = "large"/>
            </div>
            <div className="header__option">
                <StorefrontOutlinedIcon fontSize = "large"/>
            </div>
            <div className="header__option">
                <SupervisedUserCircleIcon fontSize = "large"/>
            </div>
        </div>
        <div className="header_right"></div>
            <div className="header__info">
                <Avatar/>
                <h4>Amogh S.</h4>
            </div>
            <IconButton>
                <AddIcon/>
            </IconButton>
            <IconButton>
                <ForumIcon/>
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon/>
            </IconButton>
            <IconButton>
                <ExpandMoreIcon/>
            </IconButton>

    </div>
  )
}

export default Navbar