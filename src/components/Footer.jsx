
import './Footer.css'; // Optional: For custom styles

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-5 pb-4">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">
                            JUSTICE
                        </h5>
                        <p>
                            Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elit sed kasd et.
                        </p>
                        <div className="col-lg-5 d-flex justify-content-center align-items-center mx-auto mt-3 ">
                                <div className="d-inline-flex p-2 m-2">
                                <a className="btn btn-sm btn-outline-secondary btn-sm-square mr-2 px-2" href="">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="btn btn-sm btn-outline-secondary btn-sm-square mr-2 px-2" href="">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="btn btn-sm btn-outline-secondary btn-sm-square mr-2 px-2" href="">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a className="btn btn-sm btn-outline-secondary btn-sm-square mr-2 px-2" href="">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a className="btn btn-sm btn-outline-secondary btn-sm-square mr-2 px-2" href="">
                                    <i className="fab fa-youtube"></i>
                                </a>
                                </div>
                            </div>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">
                            Popular Links
                        </h5>
                        <p><a href="#" className="text-light" style={{ textDecoration: 'none' }}>Home</a></p>
                        <p><a href="#" className="text-light" style={{ textDecoration: 'none' }}>About</a></p>
                        <p><a href="#" className="text-light" style={{ textDecoration: 'none' }}>Services</a></p>
                        <p><a href="#" className="text-light" style={{ textDecoration: 'none' }}>Attorney</a></p>
                        <p><a href="#" className="text-light" style={{ textDecoration: 'none' }}>Contact</a></p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">
                            Quick Links
                        </h5>
                        <p><a href="#" className="text-light" style={{ textDecoration: 'none' }}>FAQs</a></p>
                        <p><a href="#" className="text-light" style={{ textDecoration: 'none' }}>Help</a></p>
                        <p><a href="#" className="text-light" style={{ textDecoration: 'none' }}>Terms</a></p>
                        <p><a href="#" className="text-light" style={{ textDecoration: 'none' }}>Privacy</a></p>
                        <p><a href="#" className="text-light" style={{ textDecoration: 'none' }}>Site Map</a></p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">Newsletter</h5>
                        <p>
                            Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum.
                        </p>
                        <form>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Your Email" />
                                <div className="input-group-append">
                                    <button className="btn btn-warning">Sign Up</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row align-items-center mt-4">
                    <div className="col-md-8 col-lg-8">
                        <p className="text-light">
                            &copy; Your Site Name. All Rights Reserved.
                        </p>
                    </div>

         
                </div>
            </div>
        </footer>
    );
};

export default Footer;
