
import { Carousel } from 'react-bootstrap';
import image1 from '../assets/image/carousel-1.jpg';
import image2 from '../assets/image/carousel-2.jpg';
import './CarouselComponent.css';  // Import custom CSS

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 blur-image"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption className="centered-caption">
          <h3>Results You Deserve</h3>
          <p>We Prepared To Oppose For You</p>
          <button className="btn btn-secondary">Call Us Now</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 blur-image"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption className="centered-caption">
          <h3>Best Law Agency</h3>
          <p>Our Fighting Is For Your Justice</p>
          <button className="btn btn-secondary">Get An Appointment</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
