import React from "react"
import {render} from "react-dom"
import SimpleSlider from "./components/slider"
import SecondSection from "./components/second"
import Cities from "./components/cities"
import Footer from "./components/footer"

const App = () => {
    

    return (
        <div style={{}}>
            <SimpleSlider />
            <SecondSection />
            <Cities />
            <Footer />
        </div>
    )

}


render (<App/>, document.getElementById("root"))