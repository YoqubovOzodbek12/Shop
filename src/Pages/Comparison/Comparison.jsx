import React from 'react'
import './Comparison.css'

import FrameC from '../../Components/FrameC'
import Footer from '../../Layout/Footer/Footer'
const Comparison = () => {
    return (
        <div>
            <main>
                <section className='comparison'>
                    <div className='container'>
                        <div className='comparison-box'>
                            <h2 className='comparison-title'>Product Comparison</h2>
                            <div className='comparison-inner'>
                                <p className='comparison-desc'>Home</p>
                                <p className='comparison-text'>Comparison</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <div className='container'>
                        <div className='comparison-boxs'>

                            <div className='comparison-left'>

                                <div className='comparison-product'>
                                    <h3 className='comparison-product-title'>Go to Product page for more Products</h3>
                                    <p className='comparison-product-text'>
                                        View More
                                    </p>
                                </div>

                                <div className='comparison-about'>

                                    <img className='comparison-about-img' src={require('../../Img/comparisonimg/Group 157.png')} alt="" />
                                    <h4 className='comparison-about-title'>Asgaard Sofa</h4>
                                    <p className='comparison-about-price'>
                                        Rs. 224,000.00
                                    </p>

                                    <div className='comparison-about-inner'>
                                        <p className='comparison-about-number'>4.7</p>
                                        <img className='comparison-about-icon' src={require('../../Img/comparisonimg/Vector.png')} alt="" />
                                        <img className='comparison-about-icon' src={require('../../Img/comparisonimg/Vector.png')} alt="" />
                                        <img className='comparison-about-icon' src={require('../../Img/comparisonimg/Vector.png')} alt="" />
                                        <img className='comparison-about-icon' src={require('../../Img/comparisonimg/Vector.png')} alt="" />
                                        <img className='comparison-about-icon' src={require('../../Img/comparisonimg/carbon_star-half.png')} alt="" />
                                        <p className='comparison-about-desc'>204 Review</p>
                                    </div>

                                </div>

                            </div>

                            <div className='comparison-rigth'>
                                <div className='comparison-about'>

                                    <img className='comparison-about-img' src={require('../../Img/comparisonimg/Group 157.png')} alt="" />
                                    <h4 className='comparison-about-title'>Asgaard Sofa</h4>
                                    <p className='comparison-about-price'>
                                        Rs. 224,000.00
                                    </p>

                                    <div className='comparison-about-inner'>
                                        <p className='comparison-about-number'>4.7</p>
                                        <img className='comparison-about-icon' src={require('../../Img/comparisonimg/Vector.png')} alt="" />
                                        <img className='comparison-about-icon' src={require('../../Img/comparisonimg/Vector.png')} alt="" />
                                        <img className='comparison-about-icon' src={require('../../Img/comparisonimg/Vector.png')} alt="" />
                                        <img className='comparison-about-icon' src={require('../../Img/comparisonimg/Vector.png')} alt="" />
                                        <img className='comparison-about-icon' src={require('../../Img/comparisonimg/carbon_star-half.png')} alt="" />
                                        <p className='comparison-about-desc'>204 Review</p>
                                    </div>

                                </div>

                                <div>
                                    <h3 className='comparison-rigth-title'>Add A Product</h3>
                                    <div>
                                        <select className='comparison-rigth-select' name="pets" id="pet-select">
                                            <option value="">Choose a Product</option>
                                            <option value="dog">Dog</option>
                                            <option value="cat">Cat</option>
                                            <option value="hamster">Hamster</option>
                                            <option value="parrot">Parrot</option>
                                            <option value="spider">Spider</option>
                                            <option value="goldfish">Goldfish</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className='general'>
                    <div className='container'>
                        <hr />
                        <h2 className='general-title'>General</h2>
                        <ul className='general-one'>
                            <li className='general-list'>
                                <p className='general-text'>Sales Package</p>
                                <p className='general-text'>Model Number</p>
                                <p className='general-text'>Secondary Material</p>
                                <p className='general-text'>Configuration</p>
                                <p className='general-text'>Upholstery Material</p>
                                <p className='general-text'>Upholstery Color</p>
                            </li>
                            <li className='general-list'>
                                <p className='general-text'>1 sectional sofa</p>
                                <p className='general-text'>TFCBLIGRBL6SRHS</p>
                                <p className='general-text'>Solid Wood</p>
                                <p className='general-text'>L-shaped</p>
                                <p className='general-text'>Fabric + Cotton</p>
                                <p className='general-text'>Bright Grey & Lion</p>
                            </li>
                            <li className='general-list'>
                                <p className='general-text'>1 Three Seater, 2 Single Seater</p>
                                <p className='general-text'>DTUBLIGRBL568</p>
                                <p className='general-text'>Solid Wood</p>
                                <p className='general-text'>L-shaped</p>
                                <p className='general-text'>Fabric + Cotton</p>
                                <p className='general-text'>Bright Grey & Lion</p>
                            </li>
                        </ul>


                        <h2 className='general-title'>Product</h2>
                        <ul className='general-one'>
                            <li className='general-list'>
                                <p className='general-text'>Filling Material</p>
                                <p className='general-text'>Finish Type</p>
                                <p className='general-text'>Adjustable Headrest</p>
                                <p className='general-text'>Maximum Load Capacity</p>
                                <p className='general-text'>Origin of Manufacture</p>
                            </li>
                            <li className='general-list'>
                                <p className='general-text'>Foam</p>
                                <p className='general-text'>Bright Grey & Lion</p>
                                <p className='general-text'>No</p>
                                <p className='general-text'>280 KG</p>
                                <p className='general-text'>India</p>
                            </li>
                            <li className='general-list'>
                                <p className='general-text'>Matte</p>
                                <p className='general-text'>Bright Grey & Lion</p>
                                <p className='general-text'>yes</p>
                                <p className='general-text'>300 KG</p>
                                <p className='general-text'>India</p>
                            </li>
                        </ul>

                        <h2 className='general-title'>Dimensions</h2>
                        <ul className='general-one'>
                            <li className='general-list'>
                                <p className='general-text'>Width</p>
                                <p className='general-text'>Height</p>
                                <p className='general-text'>Depth</p>
                                <p className='general-text'>Weight</p>
                                <p className='general-text'>Seat Height</p>
                                <p className='general-text'>Leg Height</p>
                            </li>
                            <li className='general-list'>
                                <p className='general-text'>265.32 cm</p>
                                <p className='general-text'>76 cm</p>
                                <p className='general-text'>167.76 cm</p>
                                <p className='general-text'>45 KG</p>
                                <p className='general-text'>41.52 cm</p>
                                <p className='general-text'>5.46 cm</p>
                            </li>
                            <li className='general-list'>
                                <p className='general-text'>265.32 cm</p>
                                <p className='general-text'>76 cm</p>
                                <p className='general-text'>167.76 cm</p>
                                <p className='general-text'>65 KG</p>
                                <p className='general-text'>41.52 cm</p>
                                <p className='general-text'>5.46 cm</p>
                            </li>
                        </ul>


                        <h2 className='general-title'>Warranty</h2>
                        <ul className='general-one general-ones'>
                            <li className='general-list'>
                                <p className='general-text general-tetwo'>Warranty Summary</p>
                                <p className='general-text general-tetwo'>Warranty Service Type</p>
                                <p className='general-text general-tetwo'>Covered in Warranty</p>
                                <p className='general-text general-tetwo'>Not Covered in Warranty</p>
                                <p className='general-text general-tetwo'>Domestic Warranty</p>
                            </li>
                            <li className='general-list'>
                                <p className='general-text'>1 Year Manufacturing Warranty</p>
                                <p className='general-text'>For Warranty Claims or Any Product Related Issues Please Email at operati ons@trevifur.com</p>
                                <p className='general-text'>Warranty Against Manufacturing Defect</p>
                                <p className='general-text'>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p>
                                <p className='general-text'>1 Year</p>
                                <button className='general-btn-one'>Add To Cart</button>
                            </li>
                            <li className='general-list'>
                                <p className='general-text'>1.2 Year Manufacturing Warranty</p>
                                <p className='general-text'>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</p>
                                <p className='general-text'>Warranty of the product is limited to manufacturing defects only.</p>
                                <p className='general-text'>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p>
                                <p className='general-text general-text-months'>3 Months</p>
                                <button className='general-btn-two'>Add To Cart</button>
                            </li>
                        </ul>

                    </div>
                </section>


                <section>
                    <div>
                        <FrameC />
                    </div>
                </section>
            </main>


            <footer>
                <div className='container'>
                    <Footer />
                </div>
            </footer>
        </div>
    )
}

export default Comparison