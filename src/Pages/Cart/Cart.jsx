import React from 'react'
import { MdDelete } from "react-icons/md";
import './Cart.css'


const Cart = () => {
    return (
        <div>
            <main>
                <section className='cart'>
                    <div className='container'>
                        <div className='cart-inner'>
                            <h2 className='cart-title'>Shop</h2>
                            <div className='cart-box'>
                                <p className='cart-desc'>Home</p>
                                <p className='cart-text'>Checkout</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='container'>
                        <div className='korzinka-inner'>
                            <div className='korzinka-box'>
                                <div className='korzinka-header'>
                                    
                                        <p className='korzinka-text'>Product</p>
                                        <p className='korzinka-text'>Price</p>
                                    
            
                                        <p className='korzinka-text'>Quantity</p>
                                        <p className='korzinka-text'>Subtotal</p>
                                   
                                </div>

                                <div className='korzinka-botton'>
                                    <ul className='korzinka-list'>
                                        <li className='korzinka-item'>
                                            <img className='korzinka-img' src={require('../../Img/cartimgtwo/Asgaard sofa 5.png')} alt="" />
                                            <p className='korzinka-name'>Asgaard sofa</p>
                                            <p className='korzinka-desc'>Rs. 250,000.00</p>
                                            <button className='korzinka-count'>1</button>
                                            <p className='korzinka-price'>Rs. 250,000.00</p>
                                            <MdDelete className='korzinka-icon'/>
                                        </li>

                                        <li className='korzinka-item'>
                                            <img className='korzinka-img' src={require('../../Img/cartimgtwo/Asgaard sofa 5.png')} alt="" />
                                            <p className='korzinka-name'>Asgaard sofa</p>
                                            <p className='korzinka-desc'>Rs. 250,000.00</p>
                                            <button className='korzinka-count'>1</button>
                                            <p className='korzinka-price'>Rs. 250,000.00</p>
                                            <MdDelete className='korzinka-icon'/>
                                        </li>

                                        <li className='korzinka-item'>
                                            <img className='korzinka-img' src={require('../../Img/cartimgtwo/Asgaard sofa 5.png')} alt="" />
                                            <p className='korzinka-name'>Asgaard sofa</p>
                                            <p className='korzinka-desc'>Rs. 250,000.00</p>
                                            <button className='korzinka-count'>1</button>
                                            <p className='korzinka-price'>Rs. 250,000.00</p>
                                            <MdDelete className='korzinka-icon'/>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='korzinka-totals'>
                                <h3 className='totals-title'>Cart Totals</h3>
                                <div className='totals-subtotal'>
                                    <p className='totals-text'>Subtotal</p>
                                    <p className='totals-price'>Rs. 250,000.00</p>
                                </div>

                                <div className='totals-total'>
                                    <p className='totals-text'>Total</p>
                                    <p className='totals-ptice-golt'>Rs. 250,000.00</p>
                                </div>
                                <div className='totals-btns'>
                                    <button className='totals-btn'>Check Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Cart