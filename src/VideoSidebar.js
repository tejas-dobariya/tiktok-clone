import React,{useState} from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

function VideoSidebar({likes,shares,messages}) {
    const [liked, setLiked] = useState(false)

    return (
        <div className="VideoSidebar">
            <div className="VideoSidebar__button">
                {liked?
                <FavoriteIcon
                onClick={e =>setLiked(false)}
                />:
                <FavoriteBorderIcon
                onClick={e =>setLiked(true)}
                />
                }
                <p>{liked? likes + 1 : likes}</p>
            </div>

            <div className="VideoSidebar__button">
                <ChatBubbleOutlineIcon/>
                <p>{shares}</p>
            </div>

            <div className="VideoSidebar__button">
                <ShareIcon/>
                <p>{messages}</p>
            </div>

        </div>
    )
}

export default VideoSidebar
