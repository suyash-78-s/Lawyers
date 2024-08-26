
import './FeaturesSection.css'; // Import the custom CSS
import image1 from '../assets/image/feature.jpg'; // Ensure the path to your image is correct

const FeaturesSection = () => {
    const features = [
        {
            number: '01',
            title: 'Best Law Practices',
            description: 'Ipsum duo tempor elitr rebum stet magna amet kasd. Ipsum magna ipsum ipsum stet ipsum'
        },
        {
            number: '02',
            title: 'Efficiency & Trust',
            description: 'Ipsum duo tempor elitr rebum stet magna amet kasd. Ipsum magna ipsum ipsum stet ipsum'
        },
        {
            number: '03',
            title: 'Results You Deserve',
            description: 'Ipsum duo tempor elitr rebum stet magna amet kasd. Ipsum magna ipsum ipsum stet ipsum'
        }
    ];

    return (
        <div className="container-fluid py-5 features-section">
            <div className="row">
                <div className="col-lg-6 position-relative">
                    <img src={image1} alt="Law" className="img-fluid rounded" />
                </div>
                <div className="col-lg-6 text-content">
                    <h6 className="text-uppercase">Our Features</h6>
                    <h1 className="mb-4">Why Choose Us</h1>
                    {features.map((feature, index) => (
                        <div key={index} className="feature-item mb-4 d-flex align-items-center">
                            <div className="feature-number bg-secondary text-white rounded-circle text-center me-3">
                                <h5 className="m-0">{feature.number}</h5>
                            </div>
                            <div>
                                <h5 className="mb-1">{feature.title}</h5>
                                <p className="m-0">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
