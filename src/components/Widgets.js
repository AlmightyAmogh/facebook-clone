import React from 'react'
import "./Widgets.css"
const Widgets = () => {
  return (
    <div className='widgets'>
        <iframe  src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen width="320" height="240" style={{border : "none",overflow:"hidden"}}></iframe>
    </div>
  )
}

export default Widgets