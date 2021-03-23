import React from "react"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />
      <div>
        {children}
        <Footer />
      </div>
    </>
  )
}
export default Layout
