import { Link } from "gatsby";
import React from "react";

const MainHeader=()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Gatsby</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to="/" class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/category" class="nav-link">Category</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/product" class="nav-link">Product</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/contact" class="nav-link">Contact</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/blog" class="nav-link">Blog</Link>
                    </li>
                    </ul>
                </nav>
    )
}
export default MainHeader;