import React from 'react';

const Singlechoose = ({chooseItem}) => {

    const {title,description,icon} = chooseItem;

    return (
        <div className="single-choose-content">
            <div className="choolse-icon">
                <img src={icon} alt={`${title}-icon`} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>

    );
};

export default Singlechoose;