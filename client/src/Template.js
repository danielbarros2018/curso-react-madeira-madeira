import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Slider from "./Slider"

export default (props) => (
    <div>
        <Header/>
        <Slider/>
        {props.children}
        <Footer/>
    </div>
)