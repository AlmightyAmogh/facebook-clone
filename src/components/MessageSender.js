import React, { useState } from 'react'
import "./MessageSender.css"
import { Avatar,IconButton } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';

function MessageSender() {
    const [input, setInput] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        //db
        setInput("");
        setImgUrl("");
    }
  return (
    <div className='messageSender'>
        <div className="messageSender__top">
            <Avatar className='messageSender__avatar'/>
            <form >
                <input  className='messageSender__input' type="text" placeholder='Whats on your mind?' value={input}
                onChange={(e)=>setInput(e.target.value)}/>
                <input type="text" placeholder='Image url (optional)' value={imgUrl} onChange={(e)=>setImgUrl(e.target.value)} />
                <button onClick={handleSubmit} type = "submit">Hidden Submit</button>
            </form>
        </div>
        <div className="messageSender__bottom">
            <div className="messageSender__option">
                <VideocamIcon style={{color : "red"}}/>
                <h3>Live Video</h3>
            </div>
            <div className="messageSender__option">
                <PhotoLibraryIcon style={{color : "green"}}/>
                <h3>Photo/Video</h3>
            </div>
            <div className="messageSender__option">
                <AddReactionOutlinedIcon style={{color : "orange"}}/>
                <h3>Feeling</h3>
            </div>
        </div>

    </div>
  )
}

export default MessageSender