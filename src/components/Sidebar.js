import React from 'react'
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMore';
const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <SidebarRow title="Amogh S." src="https://www.anime-internet.com/content/images/size/w2000/2021/11/Itachi-Uchiha.jpg"/>
        <SidebarRow title="Pages" Icon={AutoStoriesIcon} />
        <SidebarRow title= "Friends" Icon={PeopleIcon}/>
        <SidebarRow title = "Messenger" Icon={MessageIcon}/>
        <SidebarRow title="Videos" Icon={VideoLibraryIcon}/>
        <SidebarRow title="Marketplace" Icon={ExpandMoreOutlinedIcon}/>
    </div>
  )
}

export default Sidebar