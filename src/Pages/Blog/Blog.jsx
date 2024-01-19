import React from "react"
import { LuSearch } from "react-icons/lu";
import Nextbtn from "../../Components/Nextbtn";
import FrameC from '../../Components/FrameC'
import Footer from '../../Layout/Footer/Footer'
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <main>
                <section className="blog">
                    <div className="container">
                        <div className="blog-box">
                            <h2 className="blog-title">Blog</h2>
                            <div className="blog-inner">
                                <p className="blog-text">Home</p>
                                <p className="blog-desc">Blog</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="categoriya-inner">

                            <div className="categoriya-left">
                                <img className="categoriya-img" src={require('../../Img/blogimg/1.png')} alt="" />
                                <div className="categoriya-left-inner">
                                    <svg className="categoriy-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M9.99977 9.25C7.72977 9.25 7.26977 5.81 7.26977 5.81C6.99977 4.02 7.81977 2 9.96977 2C12.1298 2 12.9498 4.02 12.6798 5.81C12.6798 5.81 12.2698 9.25 9.99977 9.25ZM9.99977 11.82L12.7198 10C15.1098 10 17.2398 12.33 17.2398 14.53V17.02C17.2398 17.02 13.5898 18.15 9.99977 18.15C6.34977 18.15 2.75977 17.02 2.75977 17.02V14.53C2.75977 12.28 4.69977 10.05 7.22977 10.05L9.99977 11.82Z" fill="#9F9F9F" />
                                    </svg>
                                    <p className="categoriy-text">Salom</p>

                                    <svg className="categoriy-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M1.6665 15.8333C1.6665 17.25 2.74984 18.3333 4.1665 18.3333H15.8332C17.2498 18.3333 18.3332 17.25 18.3332 15.8333V9.16663H1.6665V15.8333ZM15.8332 3.33329H14.1665V2.49996C14.1665 1.99996 13.8332 1.66663 13.3332 1.66663C12.8332 1.66663 12.4998 1.99996 12.4998 2.49996V3.33329H7.49984V2.49996C7.49984 1.99996 7.1665 1.66663 6.6665 1.66663C6.1665 1.66663 5.83317 1.99996 5.83317 2.49996V3.33329H4.1665C2.74984 3.33329 1.6665 4.41663 1.6665 5.83329V7.49996H18.3332V5.83329C18.3332 4.41663 17.2498 3.33329 15.8332 3.33329Z" fill="#9F9F9F" />
                                    </svg>
                                    <p className="categoriy-text">14 Oct 2022</p>

                                    <svg className="categoriy-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12.8971 21.968C12.3671 21.97 11.8571 21.758 11.4831 21.382L3.64613 13.547C3.4418 13.3434 3.28412 13.0978 3.18398 12.8272C3.08384 12.5567 3.04363 12.2676 3.06613 11.98L3.56613 5.41401C3.60067 4.93599 3.80665 4.48652 4.14619 4.14827C4.48573 3.81002 4.93598 3.60574 5.41413 3.57301L11.9801 3.07301C12.0321 3.06201 12.0831 3.06201 12.1351 3.06201C12.6651 3.06201 13.1721 3.27201 13.5451 3.64801L21.3831 11.482C21.5689 11.6677 21.7163 11.8883 21.8169 12.131C21.9174 12.3737 21.9692 12.6338 21.9692 12.8965C21.9692 13.1592 21.9174 13.4194 21.8169 13.6621C21.7163 13.9048 21.5689 14.1253 21.3831 14.311L14.3111 21.382C14.1259 21.5683 13.9055 21.716 13.6628 21.8166C13.4201 21.9172 13.1599 21.9687 12.8971 21.968ZM8.65413 6.65401C8.32524 6.65411 8.00145 6.73531 7.71143 6.89042C7.42142 7.04554 7.17413 7.26978 6.99148 7.54329C6.80883 7.8168 6.69644 8.13113 6.66428 8.45845C6.63212 8.78576 6.68118 9.11595 6.80711 9.41978C6.93304 9.72361 7.13195 9.99169 7.38623 10.2003C7.6405 10.4089 7.9423 10.5516 8.26488 10.6157C8.58747 10.6798 8.92088 10.6633 9.23559 10.5678C9.5503 10.4723 9.8366 10.3006 10.0691 10.068L10.0761 10.062L10.0831 10.055L10.0751 10.062C10.3531 9.78158 10.5419 9.42513 10.6176 9.03759C10.6933 8.65006 10.6527 8.24877 10.5007 7.88432C10.3487 7.51986 10.0923 7.20855 9.76367 6.98961C9.43506 6.77066 9.04899 6.65389 8.65413 6.65401Z" fill="#9F9F9F" />
                                    </svg>
                                    <p className="categoriy-text">Wood</p>
                                </div>

                                <h3 className="categoriy-design">Going all-in with millennial design</h3>

                                <p className="categoriy-texts">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
                                    aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
                                    Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit
                                    ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                                </p>

                                <p className="categoriy-more">Read more</p>

                                <img className="categoriya-img" src={require('../../Img/blogimg/1.png')} alt="" />
                                <div className="categoriya-left-inner">
                                    <svg className="categoriy-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M9.99977 9.25C7.72977 9.25 7.26977 5.81 7.26977 5.81C6.99977 4.02 7.81977 2 9.96977 2C12.1298 2 12.9498 4.02 12.6798 5.81C12.6798 5.81 12.2698 9.25 9.99977 9.25ZM9.99977 11.82L12.7198 10C15.1098 10 17.2398 12.33 17.2398 14.53V17.02C17.2398 17.02 13.5898 18.15 9.99977 18.15C6.34977 18.15 2.75977 17.02 2.75977 17.02V14.53C2.75977 12.28 4.69977 10.05 7.22977 10.05L9.99977 11.82Z" fill="#9F9F9F" />
                                    </svg>
                                    <p className="categoriy-text">Salom</p>

                                    <svg className="categoriy-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M1.6665 15.8333C1.6665 17.25 2.74984 18.3333 4.1665 18.3333H15.8332C17.2498 18.3333 18.3332 17.25 18.3332 15.8333V9.16663H1.6665V15.8333ZM15.8332 3.33329H14.1665V2.49996C14.1665 1.99996 13.8332 1.66663 13.3332 1.66663C12.8332 1.66663 12.4998 1.99996 12.4998 2.49996V3.33329H7.49984V2.49996C7.49984 1.99996 7.1665 1.66663 6.6665 1.66663C6.1665 1.66663 5.83317 1.99996 5.83317 2.49996V3.33329H4.1665C2.74984 3.33329 1.6665 4.41663 1.6665 5.83329V7.49996H18.3332V5.83329C18.3332 4.41663 17.2498 3.33329 15.8332 3.33329Z" fill="#9F9F9F" />
                                    </svg>
                                    <p className="categoriy-text">14 Oct 2022</p>

                                    <svg className="categoriy-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12.8971 21.968C12.3671 21.97 11.8571 21.758 11.4831 21.382L3.64613 13.547C3.4418 13.3434 3.28412 13.0978 3.18398 12.8272C3.08384 12.5567 3.04363 12.2676 3.06613 11.98L3.56613 5.41401C3.60067 4.93599 3.80665 4.48652 4.14619 4.14827C4.48573 3.81002 4.93598 3.60574 5.41413 3.57301L11.9801 3.07301C12.0321 3.06201 12.0831 3.06201 12.1351 3.06201C12.6651 3.06201 13.1721 3.27201 13.5451 3.64801L21.3831 11.482C21.5689 11.6677 21.7163 11.8883 21.8169 12.131C21.9174 12.3737 21.9692 12.6338 21.9692 12.8965C21.9692 13.1592 21.9174 13.4194 21.8169 13.6621C21.7163 13.9048 21.5689 14.1253 21.3831 14.311L14.3111 21.382C14.1259 21.5683 13.9055 21.716 13.6628 21.8166C13.4201 21.9172 13.1599 21.9687 12.8971 21.968ZM8.65413 6.65401C8.32524 6.65411 8.00145 6.73531 7.71143 6.89042C7.42142 7.04554 7.17413 7.26978 6.99148 7.54329C6.80883 7.8168 6.69644 8.13113 6.66428 8.45845C6.63212 8.78576 6.68118 9.11595 6.80711 9.41978C6.93304 9.72361 7.13195 9.99169 7.38623 10.2003C7.6405 10.4089 7.9423 10.5516 8.26488 10.6157C8.58747 10.6798 8.92088 10.6633 9.23559 10.5678C9.5503 10.4723 9.8366 10.3006 10.0691 10.068L10.0761 10.062L10.0831 10.055L10.0751 10.062C10.3531 9.78158 10.5419 9.42513 10.6176 9.03759C10.6933 8.65006 10.6527 8.24877 10.5007 7.88432C10.3487 7.51986 10.0923 7.20855 9.76367 6.98961C9.43506 6.77066 9.04899 6.65389 8.65413 6.65401Z" fill="#9F9F9F" />
                                    </svg>
                                    <p className="categoriy-text">Wood</p>
                                </div>

                                <h3 className="categoriy-design">Going all-in with millennial design</h3>

                                <p className="categoriy-texts">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
                                    aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
                                    Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit
                                    ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                                </p>

                                <p className="categoriy-more">Read more</p>



                                <img className="categoriya-img" src={require('../../Img/blogimg/1.png')} alt="" />
                                <div className="categoriya-left-inner">
                                    <svg className="categoriy-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M9.99977 9.25C7.72977 9.25 7.26977 5.81 7.26977 5.81C6.99977 4.02 7.81977 2 9.96977 2C12.1298 2 12.9498 4.02 12.6798 5.81C12.6798 5.81 12.2698 9.25 9.99977 9.25ZM9.99977 11.82L12.7198 10C15.1098 10 17.2398 12.33 17.2398 14.53V17.02C17.2398 17.02 13.5898 18.15 9.99977 18.15C6.34977 18.15 2.75977 17.02 2.75977 17.02V14.53C2.75977 12.28 4.69977 10.05 7.22977 10.05L9.99977 11.82Z" fill="#9F9F9F" />
                                    </svg>
                                    <p className="categoriy-text">Salom</p>

                                    <svg className="categoriy-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M1.6665 15.8333C1.6665 17.25 2.74984 18.3333 4.1665 18.3333H15.8332C17.2498 18.3333 18.3332 17.25 18.3332 15.8333V9.16663H1.6665V15.8333ZM15.8332 3.33329H14.1665V2.49996C14.1665 1.99996 13.8332 1.66663 13.3332 1.66663C12.8332 1.66663 12.4998 1.99996 12.4998 2.49996V3.33329H7.49984V2.49996C7.49984 1.99996 7.1665 1.66663 6.6665 1.66663C6.1665 1.66663 5.83317 1.99996 5.83317 2.49996V3.33329H4.1665C2.74984 3.33329 1.6665 4.41663 1.6665 5.83329V7.49996H18.3332V5.83329C18.3332 4.41663 17.2498 3.33329 15.8332 3.33329Z" fill="#9F9F9F" />
                                    </svg>
                                    <p className="categoriy-text">14 Oct 2022</p>

                                    <svg className="categoriy-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12.8971 21.968C12.3671 21.97 11.8571 21.758 11.4831 21.382L3.64613 13.547C3.4418 13.3434 3.28412 13.0978 3.18398 12.8272C3.08384 12.5567 3.04363 12.2676 3.06613 11.98L3.56613 5.41401C3.60067 4.93599 3.80665 4.48652 4.14619 4.14827C4.48573 3.81002 4.93598 3.60574 5.41413 3.57301L11.9801 3.07301C12.0321 3.06201 12.0831 3.06201 12.1351 3.06201C12.6651 3.06201 13.1721 3.27201 13.5451 3.64801L21.3831 11.482C21.5689 11.6677 21.7163 11.8883 21.8169 12.131C21.9174 12.3737 21.9692 12.6338 21.9692 12.8965C21.9692 13.1592 21.9174 13.4194 21.8169 13.6621C21.7163 13.9048 21.5689 14.1253 21.3831 14.311L14.3111 21.382C14.1259 21.5683 13.9055 21.716 13.6628 21.8166C13.4201 21.9172 13.1599 21.9687 12.8971 21.968ZM8.65413 6.65401C8.32524 6.65411 8.00145 6.73531 7.71143 6.89042C7.42142 7.04554 7.17413 7.26978 6.99148 7.54329C6.80883 7.8168 6.69644 8.13113 6.66428 8.45845C6.63212 8.78576 6.68118 9.11595 6.80711 9.41978C6.93304 9.72361 7.13195 9.99169 7.38623 10.2003C7.6405 10.4089 7.9423 10.5516 8.26488 10.6157C8.58747 10.6798 8.92088 10.6633 9.23559 10.5678C9.5503 10.4723 9.8366 10.3006 10.0691 10.068L10.0761 10.062L10.0831 10.055L10.0751 10.062C10.3531 9.78158 10.5419 9.42513 10.6176 9.03759C10.6933 8.65006 10.6527 8.24877 10.5007 7.88432C10.3487 7.51986 10.0923 7.20855 9.76367 6.98961C9.43506 6.77066 9.04899 6.65389 8.65413 6.65401Z" fill="#9F9F9F" />
                                    </svg>
                                    <p className="categoriy-text">Wood</p>
                                </div>

                                <h3 className="categoriy-design">Going all-in with millennial design</h3>

                                <p className="categoriy-texts">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
                                    aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
                                    Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit
                                    ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                                </p>

                                <p className="categoriy-more">Read more</p>

                            </div>

                            <div className="categoriya-rigth">
                                <div className="categoriya-inp-box">
                                    <input className="categoriya-inp" type="text" />
                                    <LuSearch className="categoriya-inp-icon" />
                                </div>
                                <h3 className="categoriya-catitle">Categories</h3>
                                <ul className="categoriya-item">
                                    <li className="categoriya-list">
                                        <p className="categoriya-list-text">Crafts</p>
                                        <p className="categoriya-list-text">2</p>
                                    </li>
                                    <li className="categoriya-list">
                                        <p className="categoriya-list-text">Crafts</p>
                                        <p className="categoriya-list-text">2</p>
                                    </li>

                                    <li className="categoriya-list">
                                        <p className="categoriya-list-text">Crafts</p>
                                        <p className="categoriya-list-text">2</p>
                                    </li>

                                    <li className="categoriya-list">
                                        <p className="categoriya-list-text">Crafts</p>
                                        <p className="categoriya-list-text">2</p>
                                    </li>

                                    <li className="categoriya-list">
                                        <p className="categoriya-list-text">Crafts</p>
                                        <p className="categoriya-list-text">2</p>
                                    </li>
                                </ul>

                                <h4 className="categoriya-post">Recent Posts</h4>

                                <ul className="post-item">
                                    <li className="post-list">
                                        <img className="post-img" src={require('../../Img/blogimg/4.png')} alt="" />
                                        <div className="post-box">
                                            <p className="post-desc">Going all-in with millennial design</p>
                                            <p className="post-text">03 Aug 2022</p>
                                        </div>
                                    </li>

                                    <li className="post-list">
                                        <img className="post-img" src={require('../../Img/blogimg/4.png')} alt="" />
                                        <div className="post-box">
                                            <p className="post-desc">Going all-in with millennial design</p>
                                            <p className="post-text">03 Aug 2022</p>
                                        </div>
                                    </li>

                                    <li className="post-list">
                                        <img className="post-img" src={require('../../Img/blogimg/4.png')} alt="" />
                                        <div className="post-box">
                                            <p className="post-desc">Going all-in with millennial design</p>
                                            <p className="post-text">03 Aug 2022</p>
                                        </div>
                                    </li>

                                    <li className="post-list">
                                        <img className="post-img" src={require('../../Img/blogimg/4.png')} alt="" />
                                        <div className="post-box">
                                            <p className="post-desc">Going all-in with millennial design</p>
                                            <p className="post-text">03 Aug 2022</p>
                                        </div>
                                    </li>

                                    <li className="post-list">
                                        <img className="post-img" src={require('../../Img/blogimg/4.png')} alt="" />
                                        <div className="post-box">
                                            <p className="post-desc">Going all-in with millennial design</p>
                                            <p className="post-text">03 Aug 2022</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div>
                        <Nextbtn />
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
                <div className="container">
                    <Footer/>
                </div>
            </footer>
        </div>
    )
}

export default Blog