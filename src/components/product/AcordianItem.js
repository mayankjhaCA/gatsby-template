import React, { useRef, useState } from "react";
import "./accordian.css";
import Chevron from "./Chevron";

const AccordionItem=(props)=>{
    const [setActive,setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate,setRotateState] = useState("accordion__icon");

    const content = useRef(null);

    function toggleAccordion(){
        setActiveState(setActive === "" ? "active": "")
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        )
        setRotateState(
            setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
        )
    }


    return(
        <div className="accordion__section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordian__title">{props.title}</p>
                <Chevron className={`${setRotate}`} width={12} fill={"#888"} />
            </button>

            <div
                ref={content}
                style={{maxHeight:`${setHeight}`}}
                className="accordion__content">
                <div className="accordion__text"
                    dangerouslySetInnerHTML={{__html:props.content}} />
               
            </div>
        </div>
    )
}
export default AccordionItem;