import './Properties.css'
import Singleproperty from './Singleproperty';
import { FaAngleRight } from "react-icons/fa6";

const Properties = () => {

    const properties = [
        {
            "id": "house_001",
            "type": "4 bed detached house for sale",
            "price": "£1,084,942",
            "address": "Hill View, Sandhills, Oxford OX3",
            "agent": "/assets/images/icons/property/agent-logo.png",
            "bedrooms": 4,
            "bathrooms": 2,
            "size": "5,000",
            "marketed_by": "John D Wood & Co",
            "image_url": "/assets/images/property/property.png",
            "btn_text": "Visit Now",
            "visit_link": "#"
        },
        {
            "id": "house_002",
            "type": "4 bed detached house for sale",
            "price": "£1,084,942",
            "address": "Hill View, Sandhills, Oxford OX3",
            "agent": "/assets/images/icons/property/agent-logo.png",
            "bedrooms": 4,
            "bathrooms": 2,
            "size": "5,000",
            "marketed_by": "John D Wood & Co",
            "image_url": "/assets/images/property/property.png",
            "btn_text": "Visit Now",
            "visit_link": "#"
        },
        {
            "id": "house_003",
            "type": "4 bed detached house for sale",
            "price": "£1,084,942",
            "address": "Hill View, Sandhills, Oxford OX3",
            "agent": "/assets/images/icons/property/agent-logo.png",
            "bedrooms": 4,
            "bathrooms": 2,
            "size": "5,000",
            "marketed_by": "John D Wood & Co",
            "image_url": "/assets/images/property/property.png",
            "btn_text": "Visit Now",
            "visit_link": "#"
        }
    ]



    return (
        <section className='pp-properties-area'>
            <div className="container">
                <div className="pp-jobs-content">
                    <div className="pp-jobs-left-content">
                        <div className="similar-heading">
                            <span><img src="/assets/images/icons/dot.png" alt="dot" />Property</span>
                            <h2>Find the best your dream property</h2>
                            <p>We help you get a better future with property that suits your interests and needs.</p>
                        </div>
                        <a className="similar-link" href='#'>Let’s Find It Now<span className="similar-link-icon"><FaAngleRight /></span> </a>
                    </div>

                    <div className="pp-jobs-right-content">
                        {
                            properties.map(property => <Singleproperty key={property.id} property={property}></Singleproperty>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Properties;