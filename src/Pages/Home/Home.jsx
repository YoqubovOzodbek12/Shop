import React, { useEffect, useState } from 'react'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import Aos from 'aos'
import 'aos/dist/aos.css'
import Product from '../Product/Product'
import Footer from '../../Layout/Footer/Footer';
import './Home.css'

import BrowseOne from '../../Img/browseimg/Mask Group.png'
import BrowseTwo from '../../Img/browseimg/Image-living room.png'
import BrowseTree from '../../Img/browseimg/Mask Group (1).png'


const Home = () => {
    const [transform, setTransform] = useState(0)

    const nextSlide = () => {
        setTransform(transform - 900)
    }
    const prevSlide = () => {
        setTransform(transform + 900)
    }

    useEffect(() => {
        Aos.init()
    },[])

    return (
        <div>
            <div className='hero'>
                <div className='container'>
                    <div className='hero-inner'>
                        <div className='hero-rigth'>
                            <p className='hero-text'>New Arrival</p>
                            <h2 className='hero-title'>Discover Our ?New Collection</h2>
                            <p className='hero-desc'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                luctus nec ullamcorper mattis.
                            </p>
                            <div className='hero-btns'>
                                <button className='hero-btn' type='button'>BUY Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main>
                <section>
                    <div className='container'>
                        <div className='browse'>
                            <h3 className='browse-title'>Browse The Range</h3>
                            <p className='browse-desc'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                            <ul className='browse-list'>
                                <li data-aos="flip-up" className='browse-item'>
                                    <img className='browse-img' src={BrowseOne} alt="" />
                                    <p className='browse-text'>
                                        Dining
                                    </p>
                                </li>
                                <li data-aos="flip-up" className='browse-item'>
                                    <img className='browse-img' src={BrowseTwo} alt="" />
                                    <p className='browse-text'>
                                        Dining
                                    </p>
                                </li>
                                <li data-aos="flip-up" className='browse-item'>
                                    <img className='browse-img' src={BrowseTree} alt="" />
                                    <p className='browse-text'>
                                        Dining
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='container'>
                        <Product />
                        <div className='more-btn'>
                            <button className='more-btns'>Show More</button>
                        </div>
                    </div>
                </section>

                <section className='rooms'>
                    <div className='container'>
                        <div className='rooms-inner'>
                            <div className='rooms-left'>
                                <h3 className='rooms-title'>50+ Beautiful rooms inspiration</h3>
                                <p className='rooms-desc'>
                                    Our designer already made a lot of beautiful prototipe of rooms that inspire you
                                </p>
                                <div className='rooms-btns'>
                                    <button className='rooms-btn'>Explore More</button>
                                </div>
                                <div className='rooms-lr'>
                                    <button className='rooms-lbtn' onClick={nextSlide}><GoArrowLeft /></button>
                                    <button className='rooms-rbtn' onClick={prevSlide}><GoArrowRight /></button>
                                    <hr />
                                </div>
                            </div>

                            <div className='rooms-rigth'>
                                <div className='rooms-gallery' style={{ transform: `translater(${transform}px)` }}>
                                    <div className='gallery-inner'>
                                        <span className='gallery-span'>
                                            <img className='gallery-img' src={require('../../Img/cartimg/6.png')} alt="" />
                                            <div className='gallery-box'>

                                                <div className='box-left'>
                                                    <p className='box-text'>01 --- Bed Room</p>
                                                    <h4 className='box-title'>Inner Peace</h4>
                                                </div>
                                                <div className='box-rigth'>
                                                    <button className='box-btn'><GoArrowRight /></button>
                                                </div>

                                            </div>
                                        </span>
                                    </div>
                                    <div className='gallery-inner'>
                                        <span className='gallery-span'>
                                            <img className='gallery-img' src={require('../../Img/cartimg/6.png')} alt="" />
                                            <div className='gallery-box'>

                                                <div className='box-left'>
                                                    <p className='box-text'>01 --- Bed Room</p>
                                                    <h4 className='box-title'>Inner Peace</h4>
                                                </div>
                                                <div className='box-rigth'>
                                                    <button className='box-btn'><GoArrowRight /></button>
                                                </div>

                                            </div>
                                        </span>
                                    </div>
                                    <div className='gallery-inner'>
                                        <span className='gallery-span'>
                                            <img className='gallery-img' src={require('../../Img/cartimg/6.png')} alt="" />
                                            <div className='gallery-box'>

                                                <div className='box-left'>
                                                    <p className='box-text'>01 --- Bed Room</p>
                                                    <h4 className='box-title'>Inner Peace</h4>
                                                </div>
                                                <div className='box-rigth'>
                                                    <button className='box-btn'><GoArrowRight /></button>
                                                </div>

                                            </div>
                                        </span>
                                    </div>
                                    <div className='gallery-inner'>
                                        <span className='gallery-span'>
                                            <img className='gallery-img' src={require('../../Img/cartimg/6.png')} alt="" />
                                            <div className='gallery-box'>

                                                <div className='box-left'>
                                                    <p className='box-text'>01 --- Bed Room</p>
                                                    <h4 className='box-title'>Inner Peace</h4>
                                                </div>
                                                <div className='box-rigth'>
                                                    <button className='box-btn'><GoArrowRight /></button>
                                                </div>

                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='container'>
                        <div className='funiro'>
                            <p className='funiro-desc'>Share your setup with</p>
                            <h3 className='funiro-text'>#FuniroFurniture</h3>
                            <div className='funiro-inner'>
                                <div className='funiro-left'>
                                    <div className='funiro-top'>
                                        <img className='funiro-img-one' src={require('../../Img/funiroimg/1.png')} alt="" />
                                        <img className='funiro-img-two' src={require('../../Img/funiroimg/2.png')} alt="" />
                                    </div>
                                    <div className='funiro-botton'>
                                        <img className='funiro-img-tree' src={require('../../Img/funiroimg/3.png')} alt="" />
                                        <img className='funiro-img-four' src={require('../../Img/funiroimg/4.png')} alt="" />
                                    </div>
                                </div>
                                <div className='funiro-middle'>
                                    <img className='furino-img-five' src={require('../../Img/funiroimg/5.png')} alt="" />
                                </div>
                                <div className='funiro-rigth'>
                                    <div className='funiro-toptwo'>
                                        <img className='funiro-six' src={require('../../Img/funiroimg/6.png')} alt="" />
                                        <img className='funiro-seven' src={require('../../Img/funiroimg/7.png')} alt="" />
                                    </div>
                                    <div className='funiro-bottontwo'>
                                        <img className='funiro-eight' src={require('../../Img/funiroimg/8.png')} alt="" />
                                        <img className='funiro-ten' src={require('../../Img/funiroimg/9.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </section>

                <section>
                    <div className='container'>
                        <Footer />
                    </div>
                </section>
            </main>

        </div>
    )
}


export default Home



