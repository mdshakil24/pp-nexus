
const Singlecommunity = ({ community }) => {
    const { image, progress, title, description, amountRaised, goalAmount, daysLeft, buttonText, link } = community;
    return (
        <div className="single-community-content">
            <div className="single-community-image">
                <img src={image} alt={`${title}-Image`} />
            </div>
            <div className="single-community-progress">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '64%' }} aria-valuenow="64" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <button className="progress-count">{progress}</button>
            </div>
            <div className="single-community-text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <div className="single-community-ammount-raised">
                <p>Amount raised: <span>{amountRaised}</span> <span className="goalA">/ {goalAmount}</span></p>
            </div>

            <div className="single-community-bottom-content">
                <p>{daysLeft} Days to go</p>
                <a href={link}>{buttonText}</a>
            </div>
        </div>
    );
};

export default Singlecommunity;