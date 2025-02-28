import './Testimonials.css'
import Testimonial from './Testimonial';

const Testimonials = () => {

    const testimonials = [
        {
            "id": 201,
            "name": "John Doe",
            "rating": "/assets/images/icons/testimonials/ph_star-fill.png",
            "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            "icon": "/assets/images/icons/testimonials/bi_quote.png"
        },
        {
            "id": 202,
            "name": "Jane Smith",
            "rating": '/assets/images/icons/testimonials/ph_star-fill.png',
            "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
             "icon": "/assets/images/icons/testimonials/bi_quote.png"
        },
        {
            "id": 203,
            "name": "Michael Johnson",
           "rating": '/assets/images/icons/testimonials/ph_star-fill.png',
            "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
             "icon": "/assets/images/icons/testimonials/bi_quote.png"
        }
    ]

    return (
        <div className='pp-testimonials-area'>
            <div className="container">
                <div className="pp-testimonials-heading">
                    <div className="similar-heading text-center">
                        <span><img src="/assets/images/icons/dot.png" alt="dot" />Testimonials</span>
                        <h2>What Our Customers Says</h2>
                    </div>
                </div>
                <div className="pp-testimonials-content">
                    {
                        testimonials.map(testimonial => <Testimonial key={testimonial.id} testimonial={testimonial}></Testimonial>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonials;