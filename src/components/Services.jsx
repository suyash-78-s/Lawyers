
import './Services.css'; // Assuming you have some CSS for styling

const Services = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-4">
                        <h6 className="text-uppercase">Our Practice</h6>
                        <h1 className="mb-4">Our Practice Areas</h1>
                        <p>Invidunt lorem justo clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum</p>
                        <button className="btn btn-outline-secondary mt-2">More Services</button>
                    </div>
                    <div className="col-lg-8 pt-5 pt-lg-0">
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <div className="icon-box bg-secondary text-primary mb-4 rounded-circle">
                                    <i className="fa fa-2x fa-hand-holding-usd"></i>
                                </div>
                                <h5 className="mb-3">Business Law</h5>
                                <p>Takim stet justo elitr sea eirmod vero ipsum. Sed stet clita sit duo dolor stet at at. Tempor dolor sit ipsum</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="icon-box bg-secondary text-primary mb-4 rounded-circle">
                                    <i className="fa fa-2x fa-gavel"></i>
                                </div>
                                <h5 className="mb-3">Criminal Law</h5>
                                <p>Takim stet justo elitr sea eirmod vero ipsum. Sed stet clita sit duo dolor stet at at. Tempor dolor sit ipsum</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="icon-box bg-secondary text-primary mb-4 rounded-circle">
                                    <i className="fa fa-2x fa-landmark"></i>
                                </div>
                                <h5 className="mb-3">Civil Law</h5>
                                <p>Takim stet justo elitr sea eirmod vero ipsum. Sed stet clita sit duo dolor stet at at. Tempor dolor sit ipsum</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
