import React from 'react';
import Header from '../Heading';
import CategoryArea from './CategoryArea';
// all images imported her

import image1 from "../../assets/img/img1.jpg";
import image4 from "../../assets/img/img4.jpg";
import image5 from "../../assets/img/img5.jpg";
import ProductLarge from './ProductLarge';
import HorizontalProduct from './Horizontal';
import "./category.css";
import SubHeader from '../Subheader';

const CategoryPage=()=>{
    return(
        <>
        {/* category area */}
            <div className="category_area overflow-hidden">
                <div className="container">
                    <Header colClass="col-12" title="H1 Title" description="“A bit of background on the products featured underneath - use ”" />
                    <div className="row">
                        <CategoryArea imgUrl={image1} name="Sed ut perspiciatis" sellPrice="$25.99" accPrice="$45.99" />
                        <CategoryArea imgUrl={image1} name="Sed ut perspiciatis" sellPrice="$25.99" accPrice="$45.99" />
                        <CategoryArea imgUrl={image1} name="Sed ut perspiciatis" sellPrice="$25.99" accPrice="$45.99" />
                        <CategoryArea imgUrl={image1} name="Sed ut perspiciatis" sellPrice="$25.99" accPrice="$45.99" />
                    </div>
                </div>
            </div>

        {/* product large */}
        <div className="product_lg">
            <div className="container">
                <div className="row">
                    <ProductLarge imgUrl={image4} name="Sed ut perspiciatis" sellPrice="$25.99" accPrice="$45.99" />
                    <ProductLarge imgUrl={image4} name="Sed ut perspiciatis" sellPrice="$25.99" />
                </div>
            </div>
        </div>

        {/* horizontal product*/}
        <div className="horizontal_product">
            <div className="container">
                <div className="row">
                    <HorizontalProduct imgUrl={image5} name="Sed ut perspiciatis" sellPrice="$25.99" accPrice="$45.99" />
                    <HorizontalProduct imgUrl={image5} name="Sed ut perspiciatis" sellPrice="$25.99" />
                </div>
            </div>
        </div>

        {/* subheading */}
        <div className="container">
            <SubHeader subtitle="Subheading (H2)" description="Text box here for additional category content"/>
        </div>
    </>
    )
}

export default CategoryPage;