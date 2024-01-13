import React from 'react'
import Product from '../Product/Product'
import './Home.css'

import BrowseOne from '../../Img/browseimg/Mask Group.png'
import BrowseTwo from '../../Img/browseimg/Image-living room.png'
import BrowseTree from '../../Img/browseimg/Mask Group (1).png'


const Home = () => {
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
                                <li className='browse-item'>
                                    <img className='browse-img' src={BrowseOne} alt="" />
                                    <p className='browse-text'>
                                        Dining
                                    </p>
                                </li>
                                <li className='browse-item'>
                                    <img className='browse-img' src={BrowseTwo} alt="" />
                                    <p className='browse-text'>
                                        Dining
                                    </p>
                                </li>
                                <li className='browse-item'>
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
            </main>

        </div>
    )
}

export default Home