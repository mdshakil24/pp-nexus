import './Cars.css'
import Car from './Car';
import { FaAngleRight } from "react-icons/fa6";


const Cars = () => {

    const cars = [
        {
            "id": "car_001",
            "brand": "BMW",
            "model": "M3 Competition",
            "condition": "New",
            "engine": "3.0 Liters",
            "transmission": "Automatic",
            "fuel": "Petrol",
            "price": "£84,942",
            "image_url": "/assets/images/cars/bmw.png",
            "btn_text": "View Deal",
            "deal_link": "#"
        },
        {
            "id": "car_002",
            "brand": "Bentley",
            "model": "Continental",
            "condition": "Used",
            "year": "2015",
            "transmission": "Automatic",
            "fuel": "Petrol",
            "price": "£84,942",
            "image_url": "/assets/images/cars/bentley.png",
            "btn_text": "View Deal",
            "deal_link": "#"
        },
        {
            "id": "car_003",
            "brand": "Mini",
            "model": "3-Door Hatch Cooper S",
            "condition": "Used",
            "year": "2015",
            "mileage": "20,000 miles",
            "fuel": "Petrol",
            "price": "£84,942",
            "image_url": "/assets/images/cars/mini.png",
            "btn_text": "View Deal",
            "deal_link": "#"
        }
    ]





    return (
        <section className='pp-jobs-area'>
            <div className="container">
                <div className="pp-jobs-content">
                    <div className="pp-jobs-right-content">
                        {
                            cars.map(car => <Car key={car.id} car={car}></Car>)
                        }
                    </div>

                    <div className="pp-jobs-left-content pp-cars-right-content">
                        <div className="similar-heading">
                            <span><img src="/assets/images/icons/dot.png" alt="dot" />Cars</span>
                            <h2>Explore the best deals on Cars</h2>
                            <p>Discover your dream car from a diverse range of cars and find the best offer for you. </p>
                        </div>
                        <a className="similar-link" href='#'>Let’s Find It Now<span className="similar-link-icon"><FaAngleRight /></span> </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cars;