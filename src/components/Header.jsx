
import Navbar from './Navbar';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div 
            className="col-lg-3 d-none d-lg-block font-weight-bold" 
            style={{ backgroundColor: 'black' }}>
            <a 
                href="index.html" 
                className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center font-weight-bold">
                <h1 
                className="m-0 display-4 text-uppercase" 
                style={{ color: 'white', fontWeight: 'bold'}}>
                Justice
                </h1>
            </a>
        </div>

        <div className="col-lg-9">
          <div className="row bg-white border-bottom d-none d-lg-flex">
            <ContactInfo />
            <SocialLinks />
          </div>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
