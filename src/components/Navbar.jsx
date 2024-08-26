const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-white navbar-light p-0">
        <a href="index.html" className="navbar-brand d-block d-lg-none text-black">
          <h1 className="m-0 display-4 text-uppercase font-weight-bold">Justice</h1>
        </a>
  
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div className="navbar-nav mr-auto py-0">
            <a href="index.html" className="nav-item nav-link active">Home</a>
            <a href="about.jsx" className="nav-item nav-link">About</a>
            <a href="service.html" className="nav-item nav-link">Practice</a>
            <a href="team.html" className="nav-item nav-link">Attorneys</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Dropdown</a>
              <div className="dropdown-menu rounded-0 m-0">
                <a href="#" className="dropdown-item">Menu Item 1</a>
                <a href="#" className="dropdown-item">Menu Item 2</a>
                <a href="#" className="dropdown-item">Menu Item 3</a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">Contact</a>
          </div>
          <a href="" className="btn btn-secondary mr-3 d-none d-lg-block">Get A Quote</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  