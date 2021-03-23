import React from 'react';
import Header from '../Heading';
import StarTwo from '../star/star2';
import SubHeader from '../Subheader';
import SimilarProduct from './SimilarProduct';
import image1 from "../../assets/img/img1.jpg";
import image5 from "../../assets/img/img5.jpg";
import ProductSlider from './ProductSlider';
import AccordianItem from './AcordianItem';

const ProductPage=()=>{
    return(
        <>
            {/* contant */}
            <div className="product_wraper">
                <div className="container">
                    <div className="row top_product">
                        <div className="product_slider col-md-6">
                            <ProductSlider />
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="product_info">
                                <Header 
                                    className="col-12"
                                    title="H1 Title which is the product name"/>
                                <div className="d-flex review">
                                    <StarTwo />
                                    <span className="product_review mx-3">4.5 (5000 Review)</span>
                                </div>
                                <div className="costomize">
                                    <form action="#">
                                        <div class="row form-row">
                                            <div class="col-3">
                                                <select className="nice-select list">
                                                    <option className="option">Qty:1</option>
                                                    <option className="option">1</option>
                                                    <option className="option">2</option>
                                                    <option className="option">3</option>
                                                    <option className="option">4</option>
                                                </select>
                                            </div>
                                            <div class="col-9">
                                                <button type="submit" href="#">Add to Cart</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="row">
                                        <div class="col-12">
                                            <p class="sub_title padd_rb">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* select option 
            <div class="container costomize">
                <form action="#">
                    <div class="row form-row">
                        <div class="col-3">
                            <select className="nice-select list">
                                <option className="option">Qty:1</option>
                                <option className="option">1</option>
                                <option className="option">2</option>
                                <option className="option">3</option>
                                <option className="option">4</option>
                            </select>
                        </div>
                        <div class="col-9">
                            <button type="submit" href="#">Add to Cart</button>
                        </div>
                    </div>
                </form>
                <div class="row">
                    <div class="col-12">
                        <p class="sub_title padd_rb">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>*/}

        {/* product image */}
        <div class="produt_img2">
            <div class="container p_sm_0">
                <img src={image5} alt="" />
            </div>
            <div class="container mt-4">
                <SubHeader 
                    subtitle="Subheading (H2)"
                    description="Text box here for additional category content"/>
            </div>
        </div>

        {/* accordian item */}
        <div className="container">
            <AccordianItem 
                title="Accordion Open"
                content="Texxt, lorem ipsum, lorem lorem ipsum"/>
            <AccordianItem 
                title="Accordion Open"
                content="Texxt, lorem ipsum, lorem lorem ipsum"/>
            <AccordianItem 
                title="Accordion Open"
                content="Texxt, lorem ipsum, lorem lorem ipsum"/>
        </div>

        {/* category area */}
        <div class="category_area overflow-hidden">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <p class="sim_title">Similar Products</p>
                    </div>
                    <SimilarProduct 
                        name="Sed ut perspiciatis"
                        sellprice="$25.99"
                        accprice="$45.99"
                        productImg={image1}/>
                    <SimilarProduct 
                        name="Sed ut perspiciatis"
                        sellprice="$25.99"
                        accprice="$45.99"
                        productImg={image1}/>
                </div>
            </div>
        </div>
    </>
    )
}

export default ProductPage;