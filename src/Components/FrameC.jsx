import React from "react";

import FrameOne from '../Img/frameimg/1.svg'
import FrameTwo from '../Img/frameimg/2.svg'
import FrameTree from '../Img/frameimg/3.svg'
import FrameFive from '../Img/frameimg/4.svg'

const FrameC = () => {
    return (
        <div>
             <section className='frame'>
                    <div className='container'>
                        <div className='frame-inner'>
                            
                            <div className='frame-high'>
                                <img src={FrameOne} alt="" />
                                <div className='frame-high-inner'>
                                    <h3 className='frame-title'>High Quality</h3>
                                    <p className='frame-text'>crafted from top materials</p>
                                </div>
                            </div>

                            <div className='frame-warranty'>
                            <img src={FrameTwo} alt="" />
                                <div className='frame-high-inner'>
                                    <h3 className='frame-title'>Warranty Protection</h3>
                                    <p className='frame-text'>Over 2 years</p>
                                </div>
                            </div>

                            <div className='frame-free'>
                            <img src={FrameTree} alt="" />
                                <div className='frame-high-inner'>
                                    <h3 className='frame-title'>Free Shipping</h3>
                                    <p className='frame-text'>Order over 150 $</p>
                                </div>
                            </div>

                            <div className='frame-support'>
                            <img src={FrameFive} alt="" />
                                <div className='frame-high-inner'>
                                    <h3 className='frame-title'>24 / 7 Support</h3>
                                    <p className='frame-text'>Dedicated support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default FrameC