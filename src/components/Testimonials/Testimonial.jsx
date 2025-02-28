

const Testimonial = ({testimonial}) => {
    const {name,rating,review,icon} = testimonial;
    return (
        <div className="single-testimonial-content">
            <img className="quote" src={icon} alt="Quote" />
            <h3>{name}</h3>
            <ul>
                <li><img src={rating} alt={`${rating}-icon`} /></li>
                <li><img src={rating} alt={`${rating}-icon`} /></li>
                <li><img src={rating} alt={`${rating}-icon`} /></li>
                <li><img src={rating} alt={`${rating}-icon`} /></li>
                <li><img src={rating} alt={`${rating}-icon`} /></li>
            </ul>
            <p>{review}</p>
        </div>
    );
};

export default Testimonial;