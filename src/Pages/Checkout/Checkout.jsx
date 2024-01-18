import React from 'react'
import FrameC from '../../Components/FrameC'
import Footer from '../../Layout/Footer/Footer'
import './Checkout.css'

import './Checkout.css'

const Checkout = () => {
    return (
        <div>
            <main>
                <section className='checkout'>
                    <div className='container'>
                        <div className='checkout-box'>
                            <h3 className='checkout-title'>Checkout</h3>
                            <div className='checkout-inner'>
                                <p className='checkout-text'>Home</p>
                                <p className='checkout-desc'>Checkout</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <div className='container'>
                        <div className='billing-box'>
                            <div className='billing-left'>
                                <h3 className='billing-title'>Billing details</h3>
                                <form className='billing-form' action="">

                                    <div className='form-box'>
                                        <label className='billing-text' htmlFor="">
                                            First Name <br />
                                            <input className='billing-inputone' type="text" />
                                        </label> <br />
                                        <label htmlFor="">
                                            First Name <br />
                                            <input className='billing-inputone billing-inprigth' type="text" />
                                        </label>
                                    </div>

                                    <label className='belling-text' htmlFor="">Company Name (Optional)</label> <br />
                                    <input className='belling-input' type="text" /> <br />

                                    <label className='belling-text' htmlFor="">Country / Region</label> <br />
                                    <select className='belling-select' id="cars" name="cars">
                                        <option className='belling-option belling-selectactive' value="volvo">Volvo</option>
                                        <option className='belling-option' value="saab">Saab</option>
                                        <option className='belling-option' value="fiat">Fiat</option>
                                        <option className='belling-option' value="audi">Audi</option>
                                    </select> <br />

                                    <label className='belling-text' htmlFor="">Street address</label> <br />
                                    <input className='belling-input' type="text" /> <br />


                                    <label className='belling-text' htmlFor="">Town / City</label> <br />
                                    <input className='belling-input' type="text" />  <br />

                                    <label className='belling-text' htmlFor="">Province</label> <br />
                                    <input className='belling-input' type="text" placeholder='Western Province' /> <br />

                                    <label className='belling-text' htmlFor="">ZIP code</label> <br />
                                    <input className='belling-input' type="text" /> <br />

                                    <label className='belling-text' htmlFor="">Phone</label> <br />
                                    <input className='belling-input' type="text" /> <br />

                                    <label htmlFor="">Email address</label> <br />
                                    <input className='belling-input' type="text" /> <br />

                                    <input className='belling-input' type="text" placeholder='Additional information' />

                                </form>
                            </div>

                            <div className='billing-rigth'>
                                <div className='billing-boxtwo'>

                                    <div className='billing-rigth-text'>
                                        <h3 className='billing-rigth-title'>Product</h3>
                                        <p className='billing-rigth-text'>Asgaard sofa <span>X  1</span></p>
                                        <p className='billing-rigth-text'>Subtotal</p>
                                        <p className='billing-rigth-text'>Total</p>
                                    </div>

                                    <div className='billing-rigth-number'>
                                        <h3 className='billing-rigth-titletwo'>Subtotal</h3>
                                        <p className='billing-rigth-price'>Rs. 250,000.00</p>
                                        <p className='billing-rigth-price'>Rs. 250,000.00</p>
                                        <p className='billing-rigth-all'>Rs. 250,000.00</p>
                                    </div>
                                </div>

                                {/* <hr /> */}

                                <h4 className='billing-direct'>Direct Bank Transfer</h4>

                                <p className='billing-des'>
                                    Make your payment directly into our bank account.
                                    Please use your Order ID as the payment reference.
                                    Your order will not be shipped until the funds have
                                    cleared in our account.
                                </p>

                                <p className='billing-one'>Direct Bank Transfer</p>
                                <p className='billing-two'>Cash On Delivery</p>

                                <p className='billing-policy'>
                                    Your personal data will be used to support your experience throughout this website,
                                    to manage access to your account, and for other purposes described in our <b>privacy policy.</b>
                                </p>

                                <div className='billing-btns'>
                                <button className='billing-btn'>Place order</button> 
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <div>
                        <FrameC/>
                    </div>
                </section>
            </main>

            <footer>
                <div className='container'>
                    <Footer/>
                </div>
            </footer>
        </div>
    )
}

export default Checkout