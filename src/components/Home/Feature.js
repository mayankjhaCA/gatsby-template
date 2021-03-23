import React from 'react';
import Header from '../Heading';
import FeatureSlider from './FeatureSlider';

const FeatureItem =()=>{
    return(
        <>
            <div className="container">
                <Header className="col-12 text-center" title="H1 Title"
                    description="“A bit of background on the products featured underneath - use <p> ”" />
            </div>
            <div className="container product_container">
                <div className="product_slider">
                    <FeatureSlider />
                </div>
            </div>
        </>
    )
}
export default FeatureItem;