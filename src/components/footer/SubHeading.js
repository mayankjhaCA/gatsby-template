import React from 'react';

const Subheading=(props)=>{
    const {subheading,sublink1,sublink2,sublink3,sublink4}=props;
    return(
        <>
            <h4>{subheading}</h4>
            <ul>
                <li><a href="!#">{sublink1}</a></li>
                <li><a href="!#">{sublink2}</a></li>
                <li><a href="!#">{sublink3}</a></li>
                <li><a href="!#">{sublink4}</a></li>
            </ul>
        </>
    )
}

export default Subheading;