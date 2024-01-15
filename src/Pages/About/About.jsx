import React from 'react'

import ShopCardFour from '../Product/ShopCardFour'
import Footer from '../../Layout/Footer/Footer'
import { FaFacebook } from "react-icons/fa";
import Start from '../../Img/aboutimg/3.svg'


import './About.css'

const About = () => {
    return (
        <div>
            <main>
                <section className='asgaard'>
                    <div className='container'>
                        <div className='asgaard-inner'>
                            <p className='asgaard-home'>Home</p>
                            <p className='asgaard-shop'>Shop</p>
                            <span className='asgaard-line'></span>
                            <p className='asgaard-title'>Asgaard sofa</p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='container'>
                        <div className='sofa'>
                            <div className='sofa-left'>
                                <div className='sofa-imgs dis-blok'>
                                    <img className='sofa-img' src={require('../../Img/aboutimg/1.png')} alt="" />
                                    <img className='sofa-img' src={require('../../Img/aboutimg/1.png')} alt="" />
                                    <img className='sofa-img' src={require('../../Img/aboutimg/1.png')} alt="" />
                                    <img className='sofa-img' src={require('../../Img/aboutimg/1.png')} alt="" />
                                </div>

                                <div className='sofa-big'>
                                    <img className='sofa-big-img' src={require('../../Img/aboutimg/2.png')} alt="" />
                                </div>

                                <div className='sofa-imgs dis-none'>
                                    <img className='sofa-img' src={require('../../Img/aboutimg/1.png')} alt="" />
                                    <img className='sofa-img' src={require('../../Img/aboutimg/1.png')} alt="" />
                                    <img className='sofa-img' src={require('../../Img/aboutimg/1.png')} alt="" />
                                    <img className='sofa-img' src={require('../../Img/aboutimg/1.png')} alt="" />
                                </div>

                            </div>

                            <div className='sofa-rigth'>
                                <h3 className='sofa-title'>Asgaard sofa</h3>
                                <p className='sofa-text'>
                                    Rs. 250,000.00
                                </p>
                                <dir className='sofa-inner'>
                                    <div className='sofa-stars'>
                                        <img className='sofa-star' src={Start} alt="" />
                                        <img className='sofa-star' src={Start} alt="" />
                                        <img className='sofa-star' src={Start} alt="" />
                                        <img className='sofa-star' src={Start} alt="" />
                                        <img className='sofa-star' src={Start} alt="" />
                                    </div>
                                    <div>
                                        <p className='sofa-customer'>5 Customer Review</p>
                                    </div>
                                </dir>
                                <p className='sofa-desc'>
                                    Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted
                                    hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                                </p>
                                <p className='sofa-size'>Size</p>
                                <button className='sofa-btn sofa-btn-active'>L</button>
                                <button className='sofa-btn'>XL</button>
                                <button className='sofa-btn'>XS</button>

                                <p className='sofa-colors'>Color</p>
                                <button className='sofa-color'>1</button>
                                <button className='sofa-color'>2</button>
                                <button className='sofa-color'>3</button>

                                <div className='sofa-btns'>
                                    <button className='sofa-count'> 1</button>
                                    <button className='sofa-add'>Add To Cart</button>
                                    <button className='sofa-compare'>+ Compare</button>
                                </div>

                                <hr />

                                <div className='sofa-box'>

                                    <div className='networks-left'>
                                        <p className='networks-text'>SKU</p>
                                        <p className='networks-text'>Category</p>
                                        <p className='networks-text'>Tags</p>
                                        <p className='networks-text'>Share</p>
                                    </div>

                                    <div className='networks-rigth'>
                                        <p className='networks-desc'>SS001</p>
                                        <p className='networks-desc'>Sofas</p>
                                        <p className='networks-desc'>Sofa, Chair, Home, Shop</p>
                                        <FaFacebook />
                                        <FaFacebook className='networks-facebook' />
                                        <FaFacebook />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </section>

                <section>
                    <div className='container'>
                        <div className='information'>
                            <p className='information-title'>Description</p>
                            <p className='information-text'>Additional Information</p>
                            <p className='information-text-two'>Reviews [5]</p>
                        </div>

                        <p className='information-desc'>
                            Embodying the raw, wayward spirit of rock ‘n’ roll,
                            the Kilburn portable active stereo speaker takes the unmistakable look and sound
                            of Marshall, unplugs the chords, and takes the show on the road.
                        </p>

                        <p className='information-desc'>
                            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage
                            styled engineering. Setting the bar as one of the loudest speakers in its class,
                            the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a
                            clear midrange and extended highs for a sound that is both articulate and pronounced. The
                            analogue knobs allow you to fine tune the controls to your
                            personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                        </p>

                        <div className='information-imgs'>
                            <img className='information-img' src={require('../../Img/aboutimg/5.png')} alt="" />
                            <img className='information-img' src={require('../../Img/aboutimg/7.png')} alt="" />
                        </div>
                    </div>
                    <hr />

                    <h3 className='information-products'>Related Products</h3>

                    <ShopCardFour />
                    <div className='container'>
                        <div className='information-btns'>
                            <button className='information-btn'>Show More</button>
                        </div>
                    </div>
                </section>
                <hr />
            </main>


            <footer>
                <div className='container'>
                    <Footer />
                </div>
            </footer>
        </div>
    )
}

export default About