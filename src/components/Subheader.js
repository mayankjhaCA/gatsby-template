import React from "react"
import "./subheader.css"

const SubHeader = (props) => {
  const {subtitle,description} = props
  return(
    <>
      <div class="row">
        <div class="col-12 sub_continer">
            <h2 class="title2">{subtitle}</h2>
            <p class="sub_title">{description}</p>
        </div>
    </div>
    </>
  )
}

export default SubHeader;
