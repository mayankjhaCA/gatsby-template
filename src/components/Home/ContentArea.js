import React from 'react';
import ReactPlayer from 'react-player';

import image3 from "../../assets/img/img3.jpg"


const ContentArea=()=>{
    
    return(
        <div className="content_area overflow-hidden">
            <div className="row no-gutters align-items-center">
                <div className="col-6">
                    <img src={image3} className="w-100" alt="" />
                </div>
                <div className="col-6">
                    <p>psum Lorem ipsempsum Lorem ipsempsum Lorem ipsem</p>
                </div>
            </div>
            <div className="row no-gutters align-items-center">
                <div className="col-6 order-2 position-relative video">
                    {/* background image */}
                    <img src={image3} className="w-100" alt="" />
                    {/* video link provide */}             
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=UalTfOIDQ7M"
                        width="100%"
                        height="100%"
                        playing={true}
                        muted={true}
                        className="play_video" 
                        controls={true} 
                    />
                
                </div>
                <div className="col-6 order-1">
                    <p>psum Lorem ipsempsum Lorem ipsempsum Lorem ipsem</p>
                </div>
            </div>
        </div>
    )
}
export default ContentArea;