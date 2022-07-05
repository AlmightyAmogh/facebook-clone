import React from 'react'
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <SidebarRow title="Pages" src="https://www.anime-internet.com/content/images/size/w2000/2021/11/Itachi-Uchiha.jpg"/>
        <SidebarRow title= "Friends" Icon={PeopleIcon}/>
        <SidebarRow title = "Messenger" Icon={MessageIcon}/>
        <SidebarRow title="Videos" Icon={VideoLibraryIcon}/>
    </div>
  )
}

export default Sidebar