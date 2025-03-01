
const Singleproperty = ({ property }) => {
    const { type, price, address, agent, bedrooms, bathrooms, size, marketed_by, image_url, btn_text, visit_link } = property;
    return (

        <div className="pp-single-car single-property-content">
            <div className="pp-car-image">
                <img src={image_url} alt="Property" />
            </div>
            <div className="pp-car-details-content">
                <div className="pp-property-details">
                    <span>{type}</span>
                    <h3>{price}</h3>
                    <p>{address}</p>
                </div>

                <div className="pp-property-inside">
                    <div className="single-pp-property-inside">
                        <img src="assets/images/icons/property/bed.png" alt="Icon" />
                        <p>{bedrooms}</p>
                    </div>
                    <div className="single-pp-property-inside">
                        <img src="assets/images/icons/property/cart.png" alt="Icon" />
                        <p>{bathrooms}</p>
                    </div>
                    <p className="size">{size} <span>ft<sup>2</sup></span></p>
                </div>

                <div className="pp-company-agent">
                    <p>Marked by <span>{marketed_by}</span></p>
                    <img src={agent} alt="Agent" />
                </div>

               
                <div className="pp-single-car-btn">
                    <a className="similar-btn" href={visit_link}>{btn_text}</a>
                </div>
            </div>
        </div>

    );
};

export default Singleproperty;