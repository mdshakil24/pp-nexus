

const Car = ({ car }) => {

    const { brand, model, condition, engine, transmission, fuel, image_url, btn_text, deal_link } = car;


    return (
        <div className="pp-single-car">
            <div className="pp-car-image">
                <img src={image_url} alt={`${model}-car`} />
            </div>
            <div className="pp-car-details-content">
                <div className="car-brand-model">
                    <h4>{brand}</h4>
                    <h3>{model}</h3>
                </div>

                <div className="car-details d-flex align-items-center">
                    <span>{condition}</span>
                    <ul className="d-flex align-items-center">
                        {engine ? <li>engine</li> : ''}
                        {transmission ? <li>transmission</li> : ''}
                        {fuel ? <li>fuel</li> : ''}
                    </ul>
                </div>

                <div className="car-price">
                    <h3>£84,942</h3>
                </div>

                <div className="pp-single-car-btn">
                    <a className="similar-btn" href={deal_link}>{btn_text}</a>
                </div>
            </div>

        </div>
    );
};

export default Car;