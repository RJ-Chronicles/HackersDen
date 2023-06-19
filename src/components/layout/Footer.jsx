import React from 'react';
import '../bootstrap.min.css';
import '../bunny.css';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-area">
    <div className="footer section_padding">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-xl-2 col-md-4 col-sm-6 single-footer-widget">
                    <a href="#" className="footer_logo"> <img src="./img/logo.png" alt="#"/> </a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                    <div className="social_logo">
                        <a href="#"><i className="ti-facebook"></i></a>
                        <a href="#"> <i className="ti-twitter"></i> </a>
                        <a href="#"><i className="ti-instagram"></i></a>
                        <a href="#"><i className="ti-skype"></i></a>
                    </div>
                </div>
                <div className="col-xl-2 col-sm-6 col-md-4 single-footer-widget">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Department</a></li>
                        <li><a href="#"> Online payment</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Department</a></li>
                    </ul>
                </div>
                <div className="col-xl-2 col-sm-6 col-md-4 single-footer-widget">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="#">In the community</a></li>
                        <li><a href="#">IU health foundation</a></li>
                        <li><a href="#">Family support </a></li>
                        <li><a href="#">Business solution</a></li>
                        <li><a href="#">Community clinic</a></li>
                    </ul>
                </div>
                <div className="col-xl-2 col-sm-6 col-md-6 single-footer-widget">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">Lights were season</a></li>
                        <li><a href="#"> Their is let wherein</a></li>
                        <li><a href="#">which given over</a></li>
                        <li><a href="#">Without given She</a></li>
                        <li><a href="#">Isn two signs think</a></li>
                    </ul>
                </div>
                <div className="col-xl-3 col-sm-6 col-md-6 single-footer-widget">
                    <h4>Newsletter</h4>
                    <p>Seed good winged wherein which night multiply
                        midst does not fruitful</p>
                    <div className="form-wrap" id="mc_embed_signup">
                        <form target="_blank"
                            method="get" className="form-inline">
                            <input className="form-control" name="EMAIL" placeholder="Your Email Address"
                                onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address '"
                                required="" type="email"/>
                            <button className="click-btn btn btn-default text-uppercase"> <i className="ti-angle-right"></i>
                            </button>
                            <div >
                                <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value=""
                                    type="text"/>
                            </div>

                            <div className="info"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="copyright_part">
        <div className="container">
            <div className="row align-items-center">
                <p className="footer-text m-0 col-lg-8 col-md-12">
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>

</p>
                <div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
                    <a href="#"><i className="ti-facebook"></i></a>
                    <a href="#"> <i className="ti-twitter"></i> </a>
                    <a href="#"><i className="ti-instagram"></i></a>
                    <a href="#"><i className="ti-skype"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer