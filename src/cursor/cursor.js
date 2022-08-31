
import './cursor.css';
import React, { useEffect, useState } from "react";

  
const Cursor=()=>
{
    const [position, setPosition] = useState({x: 0, y: 0});
    
       useEffect(() => {
           addEventListeners();
           return () => removeEventListeners();
       }, []);
    
       const addEventListeners = () => {
           document.addEventListener("mousemove", onMouseMove);
       };
    
       const removeEventListeners = () => {
           document.removeEventListener("mousemove", onMouseMove);
       };
    
       const onMouseMove = (e) => {
           setPosition({x: e.clientX, y: e.clientY});
       };                                   
  return(
    <div className="cursor">
       {/* <div style={{ left: `${position.x}px`,     top: `${position.y}px`}}  className="cursor1">
       
       </div>
       <div style={{ left: `${position.x}px`,     top: `${position.y}px`}}  className="cursor2 Hover">

        </div> */}
    </div>
)
}
  
export default Cursor;
