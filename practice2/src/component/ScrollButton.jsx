import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
// import { Button } from './Styles';
import "./ScrollButton.css"
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 150){
      setVisible(true)
    } 
    else if (scrolled <= 150){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <div className="top-btn">
    
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    
     </div>
  );
}
  
export default ScrollButton;
