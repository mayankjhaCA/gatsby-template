import React from "react"
import "./heading.css"

const Header = (props) => {
  const {title,description,colClass} = props
  return(
    <>
      <div className="row">
        <div className={colClass}>
          <div className="title_box">
            <h1 className="title">{title}</h1>
            <p className="sub_title">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;
