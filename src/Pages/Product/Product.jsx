import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Product.css'

const Product = () => {

    useEffect(() => {
        Aos.init()
    },[])

    return (
        <div>
            <div className='product'>
                <h3 className='product-title'>Our Products</h3>
                <ul className='product-list'>
                    <li data-aos="flip-right" className='product-item'>
                        <img className='product-img' src={require('../../Img/cartimg/1.png')} alt="" />
                        <div className='card'>
                            <button className='card-btn'>Add top card</button>
                            <div className='card-box'>
                                <p className='card-text'>Share</p>
                                <p className='card-text'>Share</p>
                                <p className='card-text'>Share</p>
                            </div>
                        </div>
                        <h4 className='product-item-title'>Syltherine</h4>
                        <p className='product-desc'>
                            Luxury big sofa
                        </p>
                        <div className='product-innen active'>
                            <p className='product-price'>Rp 2.500.000</p>
                            <p className='product-skidka'><del>Pr 3.500.000</del></p>
                        </div>
                    </li>


                    <li data-aos="flip-right" className='product-item'>
                        <img className='product-img' src={require('../../Img/cartimg/2.png')} alt="" />
                        <div className='card'>
                            <button className='card-btn'>Add top card</button>
                            <div className='card-box'>
                                <p className='card-text'>Share</p>
                                <p className='card-text'>Share</p>
                                <p className='card-text'>Share</p>
                            </div>
                        </div>
                        <h4 className='product-item-title'>Syltherine</h4>
                        <p className='product-desc'>
                            Luxury big sofa
                        </p>
                        <div className='product-innen'>
                            <p className='product-price'>Rp 2.500.000</p>
                        </div>
                    </li>

                    <li data-aos="flip-right" className='product-item'>
                        <img className='product-img' src={require('../../Img/cartimg/3.png')} alt="" />
                        <div className='card'>
                            <button className='card-btn'>Add top card</button>
                            <div className='card-box'>
                                <p className='card-text'>Share</p>
                                <p className='card-text'>Share</p>
                                <p className='card-text'>Share</p>
                            </div>
                        </div>
                        <h4 className='product-item-title'>Syltherine</h4>
                        <p className='product-desc'>
                            Luxury big sofa
                        </p>
                        <div className='product-innen'>
                            <p className='product-price'>Rp 2.500.000</p>
                        </div>
                    </li>

                    <li data-aos="flip-right" className='product-item'>
                        <img className='product-img' src={require('../../Img/cartimg/4.png')} alt="" />
                        <div className='card'>
                            <button className='card-btn'>Add top card</button>
                            <div className='card-box'>
                                <p className='card-text'>Share</p>
                                <p className='card-text'>Share</p>
                                <p className='card-text'>Share</p>
                            </div>
                        </div>
                        <h4 className='product-item-title'>Syltherine</h4>
                        <p className='product-desc'>
                            Luxury big sofa
                        </p>
                        <div className='product-innen'>
                            <p className='product-price'>Rp 2.500.000</p>
                        </div>
                    </li>

                    <li data-aos="flip-right" className='product-item'>
                        <img className='product-img' src={require('../../Img/cartimg/5.png')} alt="" />
                        <div className='card'>
                            <button className='card-btn'>Add top card</button>
                            <div className='card-box'>
                                <p className='card-text'>Share</p>
                                <p className='card-text'>Share</p>
                                <p className='card-text'>Share</p>
                            </div>
                        </div>
                        <h4 className='product-item-title'>Syltherine</h4>
                        <p className='product-desc'>
                            Luxury big sofa
                        </p>
                        <div className='product-innen'>
                            <p className='product-price'>Rp 2.500.000</p>
                        </div>
                    </li>

                    <li data-aos="flip-right" className='product-item'>
                        <img className='product-img' src={require('../../Img/cartimg/5.png')} alt="" />
                        <div className='card'>
                            <button className='card-btn'>Add top card</button>
                            <div className='card-box'>
                                <p className='card-text'>Share</p>
                                <p className='card-text'>Share</p>
                                <p className='card-text'>Share</p>
                            </div>
                        </div>
                        <h4 className='product-item-title'>Syltherine</h4>
                        <p className='product-desc'>
                            Luxury big sofa
                        </p>
                        <div className='product-innen'>
                            <p className='product-price'>Rp 2.500.000</p>
                        </div>
                    </li>

                    <li data-aos="flip-right" className='product-item'>
                        <img className='product-img' src={require('../../Img/cartimg/5.png')} alt="" />
                        <div className='card'>
                            <button className='card-btn'>Add top card</button>
                            <div className='card-box'>
                                <p className='card-text'>Share</p>
                                <p className='card-text'>Share</p>
                                <p className='card-text'>Share</p>
                            </div>
                        </div>
                        <h4 className='product-item-title'>Syltherine</h4>
                        <p className='product-desc'>
                            Luxury big sofa
                        </p>
                        <div className='product-innen'>
                            <p className='product-price'>Rp 2.500.000</p>
                        </div>
                    </li>
                    <li data-aos="flip-right" className='product-item'>
                        <img className='product-img' src={require('../../Img/cartimg/5.png')} alt="" />
                        <div className='card'>
                            <button className='card-btn'>Add top card</button>
                            <div className='card-box'>
                                <p className='card-text'>Share</p>
                                <p className='card-text'>Share</p>
                                <p className='card-text'>Share</p>
                            </div>
                        </div>
                        <h4 className='product-item-title'>Syltherine</h4>
                        <p className='product-desc'>
                            Luxury big sofa
                        </p>
                        <div className='product-innen'>
                            <p className='product-price'>Rp 2.500.000</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Product