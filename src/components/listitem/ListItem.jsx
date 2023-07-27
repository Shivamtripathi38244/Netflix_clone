import React, { useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import './listItem.scss'
function ListItem({ind}) {
  const [ishovered,setishovered]=useState(false);
  const trailer="https://media.istockphoto.com/id/1365682139/video/beagle-dog-kick-the-skateboard-and-rides-in-park-pet-dog-skateboarding-outdoor-slow-motion.mp4?s=mp4-640x640-is&k=20&c=eLhwXJvaHJv1GcfwkvRrT_UT3KgF7SK02ofiZgxL-to="
  return(
    <div className='listitem' onMouseEnter={()=>{setishovered(true)}} onMouseLeave={()=>{setishovered(false)}} 
    style={{left:ishovered && ind * 225 - 50 -ind*2.5 }}
    >
       <img src="https://cdn.pixabay.com/photo/2021/11/01/16/17/clay-6760967_960_720.jpg" alt="" />
       {ishovered && (
        <>
        <video src={trailer} autoPlay={true} loop></video>
        <div className="info">
        <div className="icons">
           <PlayArrowIcon className='icon'/>
           <AddCircleOutlineIcon className='icon'/>
           <ThumbUpIcon className='icon'/>
           <ThumbDownIcon className='icon'/>
        </div>
        <div className="iteminfotop">
          <span>1 Hour 30 Minutes</span>
          <span className='limit'>16+</span>
          <span>1999</span>
        </div>
        <div className="disc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore voluptatibuacilis nostrum quas saepe minima in aspernatur consectetur voluptas iste quibusdam!
        </div>
        <div className="genre">
          Action
        </div>
       </div>
       </>
        ) }
       
    </div>
  )
}

export default ListItem