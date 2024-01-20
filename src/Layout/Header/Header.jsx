import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Img/logo/Frame 168.svg'
import ContackIcon from '../../Img/headerIcon/mdi_account-alert-outline.svg'
import KorzinkaIcon from '../../Img/headerIcon/ant-design_shopping-cart-outlined.svg'
import SearchIcon from '../../Img/headerIcon/akar-icons_search.svg'
import LikeIcon from '../../Img/headerIcon/akar-icons_heart.svg'

import './Header.css'

const Header = () => {

    const [isOpen, setOpen] = useState(false)
    const [isOp, setOp] = useState(false)

    return (
        <div className='container'>
            <div className='header' >
                <img className='header-logo' src={Logo} alt="site logo" />
                <ul className={`header-list ${isOpen ? "header-list-active" : ""}`}>
                    <li className='header-item'>
                        <Link className='header-link' to='home'>Home</Link>
                    </li>
                    <li className='header-item'>
                        <Link className='header-link' to='shop'>Shop</Link>
                    </li>
                    <li className='header-item'>
                        <Link className='header-link' to='about'>About</Link>
                    </li>
                    <li className='header-item'>
                        <Link className='header-link' to='contack'>Contact</Link>
                    </li>
                </ul>
                <div className='header-icon'>
                    <Link to='/blog'><button className='icon-btn'><img src={ContackIcon} alt="" /></button></Link>
                    <button className='icon-btn'><img src={SearchIcon} alt="" /></button>
                    <button className='icon-btn'><img src={LikeIcon} alt="" /></button>
                    <button className='icon-btn' onClick={() => setOp(!isOp)} ><img src={KorzinkaIcon} alt="" /></button>
                </div>

                <button className='icon-btnn' onClick={() => setOp(!isOp)}><img src={KorzinkaIcon} alt="" /></button>
                <div className='header-burger' onClick={() => setOpen(!isOpen)}>
                    <span className='burger-line'></span>
                    <span className='burger-line'></span>
                    <span className='burger-line'></span>
                </div>

                <div className={`shopping ${isOp ? "shopping-active" : ""}`}>
                    <h3 className='shopping-title'>Shopping Cart</h3>
                    <hr />
                    <ul className='shopping-item'>
                        <li className='shopping-list'>
                            <img className='shopping-img' src={require('../../Img/shopping/Group 146.png')} alt="" />
                            <div className='shopping-box'>
                                <p className='shopping-desc'>Asgaard sofa</p>
                                <div className='shopping-inner'>
                                    <p className='shopping-count'>1  X</p>
                                    <p className='shopping-price'>Rs. 250,000.00</p>
                                </div>
                            </div>
                            <button className='shopping-btn'>X</button>
                        </li>

                        <li className='shopping-list'>
                            <img className='shopping-img' src={require('../../Img/shopping/Group 146.png')} alt="" />
                            <div className='shopping-box'>
                                <p className='shopping-desc'>Asgaard sofa</p>
                                <div className='shopping-inner'>
                                    <p className='shopping-count'>1  X</p>
                                    <p className='shopping-price'>Rs. 250,000.00</p>
                                </div>
                            </div>
                            <button className='shopping-btn'>X</button>
                        </li>
                    </ul>
                    <div className='shopping-all'>
                        <p className='shopping-subtotal'>Subtotal</p>
                        <p className='shopping-all-price'>Rs. 520,000.00</p>
                    </div>
                    <hr />
                    <div className='shopping-btns'>
                        <button className='shopping-cart'>Cart</button>
                        <button className='shopping-checkout'>Checkout</button>
                        <button className='shopping-comparison'>Comparison</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header