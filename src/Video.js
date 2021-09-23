import React, { useRef, useState } from 'react'
import './Video.css'
import Videofooter from './Videofooter'
import VideoSidebar from './VideoSidebar'

function Video({props,url,channel,description,song,likes,messages,shares}) {
    const [playing, setPlaying] = useState(true)
    const videoRef = useRef(null)

    const onVideoPress = ()=>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false)
        }
        else{
            videoRef.current.play();
            setPlaying(true)
        }
    }


    return (
        <div className="video" >
            <video 
                // controls 
                className="video__player"
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src={url}
      ></video>
            
            

            <Videofooter  
                channel={channel}
                description={description}
                song={song}/>

            <VideoSidebar
                likes={likes}
                messages={messages}
                shares={shares}/>
        </div>
    )
}

export default Video
