import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Img/logo/Frame 168.svg'
import ContackIcon from '../../Img/headerIcon/mdi_account-alert-outline.svg'
import KorzinkaIcon from '../../Img/headerIcon/ant-design_shopping-cart-outlined.svg'
import SearchIcon from '../../Img/headerIcon/akar-icons_search.svg'
import LikeIcon from '../../Img/headerIcon/akar-icons_heart.svg'

import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <div className='header'>
                <img className='header-logo' src={Logo} alt="site logo" />
                <ul className='header-list'>
                    <li className='header-item'>
                        <Link className='header-link' to='home'>Home</Link>
                    </li>
                    <li className='header-item'>
                        <Link className='header-link' to='about'>About</Link>
                    </li>
                    <li className='header-item'>
                        <Link className='header-link' to='contack'>Contack</Link>
                    </li>
                    <li className='header-item'>
                        <Link className='header-link' to='shop'>Shop</Link>
                    </li>
                </ul>
                <div className='header-icon'>
                    <button className='icon-btn'><img src={ContackIcon} alt="" /></button>
                    <button className='icon-btn'><img src={SearchIcon} alt="" /></button>
                    <button className='icon-btn'><img src={LikeIcon} alt="" /></button>
                    <button className='icon-btn'><img src={KorzinkaIcon} alt="" /></button>
                </div>
                <div className='header-burger'>
                    <span className='burger-line'></span>
                    <span className='burger-line'></span>
                    <span className='burger-line'></span>
                </div>
            </div>
        </div>
    )
}

export default Header