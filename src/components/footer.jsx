import React from "react"
import "../main.css"

const Footer = () => {

    return (
        <div className="footer" >
            <div className="footer__section__ico">
                <div className="social__net">
                    <a href="">
                        <img src={require("../icons/instagram.png")}/>
                    </a>
                    <a href="">
                        <img src={require("../icons/facebook.png")}/>   
                    </a>
                </div>
                <p>Countries</p>
                <div className="countries">
                    <a href="">
                        <img src={require("../icons/Norway-icon.png")}/>
                    </a>
                    <a href="">
                        <img src={require("../icons/Sweden-icon.png")}/>   
                    </a>
                </div>
                <p>Language</p>
                <div className="languages">
                    <a href="">NO</a>
                    <div>|</div>
                    <a href="">EN</a>
                </div>
            </div>
            <div className="footer__section">
                <p>Custom service</p>
                <a href="">FAQ</a>
                <a href="">Terms of use</a>
                <a href="">Privacy policy</a>
                <a href="">Contact us</a>
            </div>
            <div className="footer__section">
                <p>Information</p>
                <a href="">How is work</a>
                <a href="">Sbout Cake is easy</a>
                <a href="">For companies</a>
                <a href="">Send cakesto multiple locations</a>
                <a href="">Cake calendar</a>
            </div>
            <div className="footer__section">
                <p>Inspiration</p>
                <a href="">Birthday cake</a>
                <a href="">Cake with image or logo</a>
                <a href="">Confirmation cake</a>
                <a href="">Baptism cake</a>
                <a href="">Glutenfree cake</a>
            </div>
        </div>
    )

}

export default Footer