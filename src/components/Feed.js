import React from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'


const Feed = () => {
  return (
    <div className='Feed'>
        <StoryReel/>
        <MessageSender />
        <Post profilePic='https://www.anime-internet.com/content/images/size/w2000/2021/11/Itachi-Uchiha.jpg' image="https://i.pinimg.com/originals/89/e3/f4/89e3f48f85a29fc958ee70a3f9f943ad.jpg" message="Pain is temporary" timestamp={Date.now} username = "Amogh S."/>
        
        <Post profilePic='https://www.anime-internet.com/content/images/size/w2000/2021/11/Itachi-Uchiha.jpg'  message="Pain is temporary" timestamp={Date.now} username = "Amogh S."/>
        
        <Post profilePic='https://www.anime-internet.com/content/images/size/w2000/2021/11/Itachi-Uchiha.jpg'  message="Pain is temporary" timestamp={Date.now} username = "Amogh S."/>
        


    </div>
  )
}

export default Feed