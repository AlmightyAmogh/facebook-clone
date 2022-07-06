import React from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'


const Feed = () => {
  return (
    <div className='Feed'>
        <StoryReel/>
        <MessageSender />



    </div>
  )
}

export default Feed