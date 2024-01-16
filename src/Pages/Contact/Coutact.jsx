import React from 'react'
import FrameC from '../../Components/FrameC'
import Footer from '../../Layout/Footer/Footer'
import './Coutact.css'

const Coutact = () => {
    return (
        <div>
            <main>
                <section className='contact'>
                    <div className='container'>
                        <div className='contack-box'>
                            <h2 className='contack-title'>Contack</h2>
                            <div className='contack-inner'>
                                <p className='contack-desc'>Home</p>
                                <p className='contack-text'>Shop</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='container'>
                        <h2 className='get-title'>Get In Touch With Us</h2>
                        <p className='get-text'>
                            For More Information About Our Product & Services.
                            Please Feel Free To Drop Us An Email. Our Staff Always
                            Be There To Help You Out. Do Not Hesitate!
                        </p>
                    </div>
                </section>

                <section>
                    <div className='container'>
                        <div className='about-inner'>
                            <div className='about-locatsiya'>
                                <h3 className='about-title'>Address</h3>
                                <p className='about-desc'>
                                    236 5th SE Avenue, New York NY10000, United States
                                </p>

                                <h3 className='about-title'>Phone</h3>
                                <div className='about-tels'>
                                <p className='about-tel'>Mobile: +(84) 546-6789</p>
                                <p className='about-tel'>Hotline: +(84) 456-6789</p>
                                </div>

                                <h3 className='about-title'>Working Time</h3>
                                <p className='about-desc'>
                                    Monday-Friday: 9:00 - 22:00
                                    Saturday-Sunday: 9:00 - 21:00
                                </p>
                            </div>
                            <form className='form' action="">
                                <label className='form-title' htmlFor="">
                                    Your name <br />
                                    <input className='form-input' type="text" placeholder='Abc' />
                                </label>

                                <label className='form-title' htmlFor="">
                                    Email address <br />
                                    <input className='form-input' type="email" placeholder='Abc@def.com' />
                                </label>

                                <label className='form-title' htmlFor="">
                                    Subject <br />
                                    <input className='form-input' type="text" placeholder='This is an optional' />
                                </label>

                                <label className='form-title' htmlFor="">
                                    Message <br />
                                    <textarea className='form-area' name=""></textarea>
                                </label>

                                <button className='form-submit' type='submit'>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                <section>
                    <div>
                        <FrameC/>
                    </div>
                </section>

                <hr />
            </main>

                <footer>
                    <div className='container'>
                        <Footer/>
                    </div>
                </footer>
            </div>
    )
}

export default Coutact