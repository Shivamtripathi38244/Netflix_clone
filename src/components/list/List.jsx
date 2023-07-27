import './list.scss'
import React, { useRef, useState } from 'react'
import ListItem from '../listitem/ListItem';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function List() {
  const listref=useRef();
  const [slidenumber,setslidenumber]=useState(0);
  const [ismoved,setismoved]=useState(false);


  const handleclick = (direction) => {
    setismoved(true);
    let distance=listref.current.getBoundingClientRect().x-50;
      if(direction==="left"&&slidenumber>0){
        setslidenumber(slidenumber-1);
           listref.current.style.transform = `translateX(${280+distance}px)`;  
      }
      if(direction==="right"&&slidenumber<5){
        setslidenumber(slidenumber+1)
        listref.current.style.transform = `translateX(${-190+distance}px)`;
   }
  }

  return (
    <div className='list'>
 <span className='listTitle'> Continue to watch </span>
 <div className="wrapper">
<ArrowBackIosIcon className='sliderarrow left'   onClick={() => handleclick("left")}   style={{ display: !ismoved && "none" }}/>
<div className="container " ref={listref}>
  <ListItem ind={0}/>
  <ListItem ind={1}/>
  <ListItem ind={2}/>
  <ListItem ind={3}/>
  <ListItem ind={4}/>
  <ListItem ind={5}/>
  <ListItem ind={6}/>
  <ListItem ind={7}/>
  <ListItem ind={8}/>
  <ListItem ind={9}/>
  <ListItem ind={10}/>
  <ListItem ind={11}/>
</div>
<ArrowForwardIosIcon className='sliderarrow right'   onClick={() => handleclick("right")}/>

 </div>
    </div>
  )
}

export default List