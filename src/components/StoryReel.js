import React from 'react'
import Story from './Story'
import "./StoryReel.css"
const StoryReel = () => {
  return (
    <div className='StoryReel'>
        <Story image='https://i.pinimg.com/originals/89/e3/f4/89e3f48f85a29fc958ee70a3f9f943ad.jpg' profileSrc="https://qph.fs.quoracdn.net/main-qimg-8d32a33a298a62cac96aef0806c78b89-lq.jpg" title="Itachi"/>
        <Story image='https://wallpaperaccess.com/full/1394366.png' profileSrc="https://static.wikia.nocookie.net/villains/images/9/98/Bc88eb63c79079ef1d9728a49698f09c.png/revision/latest?cb=20180802044052" title="Lelouch"/>
        <Story image='https://fictionhorizon.com/wp-content/uploads/2022/01/eren-yeager-1024x512.jpg' profileSrc="https://static.wikia.nocookie.net/villains/images/4/4c/Eren_meets_Yeagerists.png/revision/latest?cb=20210302172340" title="Eren"/>
        <Story image='https://i.pinimg.com/originals/89/e3/f4/89e3f48f85a29fc958ee70a3f9f943ad.jpg' profileSrc="https://static.wikia.nocookie.net/villains/images/9/98/Bc88eb63c79079ef1d9728a49698f09c.png/revision/latest?cb=20180802044052" title="MixedBag"/>

    </div>
  )
}

export default StoryReel