import './Whychoose.css';
import Singlechoose from './Singlechoose';

const Whychoose = () => {

    const chooseItems = [
        {
            "id": 101,
            "title": "Comprehensive Service",
            "description": "Our platform ensures you have easy access to a wide array of options, making your experience efficient and ensuring you find everything you need conveniently.",
            "icon": "/assets/images/icons/why-choose/puzzle.png"
        },
        {
            "id": 102,
            "title": "Trusted Partners",
            "description": "We collaborate with trusted partners in each category to provide you with quality and reliable services.",
            "icon": "/assets/images/icons/why-choose/trust.png"
        },
        {
            "id": 103,
            "title": "Secure Transactions",
            "description": "We prioritize your transaction security with advanced encryption, protecting against unauthorized access and fraud. We consistently update our security for a worry-free experience.",
            "icon": "/assets/images/icons/why-choose/secure.png"
        },
        {
            "id": 104,
            "title": "24/7 Customer Support",
            "description": "Our dedicated support team is available 24/7 to assist you with any inquiries, ensuring a seamless experience.",
            "icon": "/assets/images/icons/why-choose/plugin.png"
        },
        {
            "id": 105,
            "title": "Fast & Reliable",
            "description": "We provide fast and reliable services to meet your needs efficiently and effectively.",
            "icon": "/assets/images/icons/why-choose/people.png"
        },
        {
            "id": 104,
            "title": "24/7 Customer Support",
            "description": "Our dedicated support team is available 24/7 to assist you with any inquiries, ensuring a seamless experience.",
            "icon": "/assets/images/icons/why-choose/carbon_idea.png"
        }
    ]


    return (
        <div className='why-choose-area'>
            <div className="container">
                <div className="why-choose-heading">
                    <div className="similar-heading">
                        <span><img src="/assets/images/icons/dot.png" alt="dot" /> Why Choose Us</span>
                        <h2>Discover why PP+ Nexus is the ultimate hub for your needs.</h2>
                    </div>
                </div>
                <div className="why-choose-content">
                    {
                        chooseItems.map(chooseItem => <Singlechoose key={chooseItem.id} chooseItem={chooseItem}></Singlechoose>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Whychoose;