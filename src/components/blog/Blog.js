import React from "react";
import Header from "../Heading";
import blogImg from "../../assets/img/blog.jpg";
import "./blog.css"

const BlogPage=()=>{
    return(
        <div class="blog_wraper overflow-hidden">
            <div class="container">
                <Header
                    title="H1 Title"
                    description="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud" />

            </div>
            <div class="container p_sm_0">
                <div class="row no-gutters">
                    <div class="col-12">
                        <div class="img_box">
                            {/* blog image add */}
                            <img class="w-100" src={blogImg} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <p class="sub_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>    
        </div>
    )
}
export default BlogPage;