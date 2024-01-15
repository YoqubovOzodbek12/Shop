import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer-inner">
                    <div className="footer-left">
                        <ul className="left-item">
                            <li className="left-list">
                                <h3 className="left-title">Funiro.</h3>
                                <p className="left-text">
                                    400 University Drive Suite 200 Coral Gables,
                                    FL 33134 USA
                                </p>
                            </li>
                            <li className="left-list">
                                <p className="left-link active">Links</p>
                                <p className="left-link">Home</p>
                                <p className="left-link">Shop</p>
                                <p className="left-link">About</p>
                                <p className="left-link">Contact</p>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-rigth">
                        <ul className="rigth-item">  
                            <li className="rigth-list">
                                <p className="rigth-text active">Help</p>
                                <p className="rigth-text">Payment Options</p>
                                <p className="rigth-text">Returns</p>
                                <p className="rigth-text">Privacy Policies</p>
                            </li>
                            <li className="rigth-list">
                                <h4 className="rigth-title">Newsletter</h4>
                                <div className="rigth-address">
                                    <input className="address-inp" type="text" placeholder="Enter Your Email Address"/>
                                    <button className="address-btn">SUBSCRIBE</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="footer-years">2023 furino. All rights reverved</p>
            </div>
        </div>
    )
}

export default Footer