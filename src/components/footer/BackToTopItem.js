import React, { useEffect, useState } from "react";
import {useWindowScroll} from "react-use";
import "./backtotop.css";

const BackToTopItem=()=>{
  const {y:pageYOffset} = useWindowScroll();
  const [visible,setVisible] = useState(false);

  useEffect(()=>{
    if(pageYOffset >400){
      setVisible(true);
    }else{
      setVisible(false)
    }
  },[pageYOffset]);

  const scrollTop =()=> window.scrollTo({top:0,behavior:"smooth"})

  if(!visible){
    return false;
  }
    return(
        <div className="scroll-to-top cursor-pointer float-right" onClick={scrollTop}>
           <i className="icon fas fa-chevron-up"></i>
        </div>
    )
}
export default BackToTopItem;