import React from "react"
import "../main.css"

const SecondSection = () => {
    return (
        <div className="second__sec" >
            <div>
                <img src={require("../img/1.png")} alt=""/>
                <p>Hand made by local bakaries</p>
            </div>
            <div>
                <img src={require("../img/2.png")} alt=""/>
                <p>Same price as from bakaries - but simple</p>
            </div>
            <div>
                <img src={require("../img/3.png")} alt=""/>
                <p>Send cakes anywhere</p>
            </div>
        </div>
    )
}

export default SecondSection