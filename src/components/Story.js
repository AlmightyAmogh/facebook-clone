import React from 'react'
import "./Story.css"
import { Avatar,IconButton } from '@mui/material';
const Story = ({image,profileSrc,title}) => {
  return (
    <div className='Story' style={{backgroundImage : `url(${image})`}}>
        <Avatar sx={{ width: 30, height: 30 }} className='story__avatar' src={profileSrc}/>
        <h4>{title}</h4>

    </div>
  )
}

export default Story