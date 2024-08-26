const SocialLinks = () => {
    return (
      <div className="col-lg-5 d-flex justify-content-end align-items-center">
        <div className="d-inline-flex p-2">
          <a className="btn btn-sm btn-outline-secondary btn-sm-square mr-2" href="">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-sm btn-outline-secondary btn-sm-square mr-2" href="">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn btn-sm btn-outline-secondary btn-sm-square mr-2" href="">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="btn btn-sm btn-outline-secondary btn-sm-square mr-2" href="">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="btn btn-sm btn-outline-secondary btn-sm-square" href="">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    );
  };
  
  export default SocialLinks;
  