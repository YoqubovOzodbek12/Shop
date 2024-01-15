import React from 'react'
import ShopCard from '../Product/ShopCard'
import Footer from '../../Layout/Footer/Footer'
import { BiAlignMiddle } from "react-icons/bi";
import { HiViewGrid } from "react-icons/hi";
import { MdOutlineViewDay } from "react-icons/md";
import FrameOne from '../../Img/frameimg/1.svg'
import FrameTwo from '../../Img/frameimg/2.svg'
import FrameTree from '../../Img/frameimg/3.svg'
import FrameFive from '../../Img/frameimg/4.svg'
import './Shop.css'

const Shop = () => {
    return (
        <div>
            <main>
                <section>
                    <div className='shop'>
                        <div className='container'>
                            <div className='shop-box'>
                                <h2 className='shop-title'>Shop</h2>
                                <div className='shop-inner'>
                                    <p className='shop-desc'>Home</p>
                                    <p className='shop-text'>Shop</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='filter'>
                        <div className='container'>
                            <div className='filter-inner'>
                                <div className='filter-left'>
                                    <div className='left-icon'>
                                        <BiAlignMiddle style={{ width: '25px', height: '25' }} />
                                        <p className='filter-text'>Filter</p>
                                        <HiViewGrid style={{ width: '25px', height: '25' }} />
                                        <MdOutlineViewDay style={{ width: '25px', height: '25', paddingLeft: '24px' }} />
                                    </div>
                                    <div className='filter-resilt'>
                                        <p className='filter-showing'>Showing 1–16 of 32 results</p>
                                    </div>
                                </div>

                                <div className='filter-rigth'>
                                    <div className='filter-show'>
                                        <p className='filter-show-text'>Show</p>
                                        <button className='filter-btn'>16</button>
                                    </div>
                                    <div className='filter-default'>
                                        <p className='filter-default-text'>Short by</p>
                                        <button className='filter-btnd'>Short by</button>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='container'>
                        <ShopCard />

                        <div className='next'>
                            <button className='next-btn next-active'>1</button>
                            <button className='next-btn'>2</button>
                            <button className='next-btn'>3</button>
                            <button className='next-btns'>Next</button>
                        </div>
                    </div>
                </section>

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

            </main>
            <div className='container'>
                <Footer />
            </div>
        </div>
    )
}

export default Shop