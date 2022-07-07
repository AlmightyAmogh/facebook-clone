import React from 'react'
import "./Post.css";
import { Avatar,IconButton } from '@mui/material';
const Post = ({profilePic,image,username,timestamp,message}) => {
  return (
    <div className='post'>
        <div className="post__top">
        <Avatar  src={profilePic}className='post__avatar'/>
        <div className="post__topInfo">
            <h3>{username}</h3>
            <p>TimeStamp : {timestamp}</p>
        </div>
        </div>
        <div className="post__bottom">
            <p>{message}</p>
        </div>
        <div className="post__image">
            <img src={image} alt="Post " />
        </div>

    </div>
  )
}

export default Post