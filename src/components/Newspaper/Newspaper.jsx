import './Newspaper.css'
import { FaAngleRight } from "react-icons/fa6";

const Newspaper = () => {

    const newsData = [
        {
            id: 111,
            image: "/assets/images/newspaper/n1.png",
            category: "U.K. News",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "November 20, 2023",
            size: "large",
        },
        {
            id: 222,
            image: "/assets/images/newspaper/n2.png",
            category: "E.U. News",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "November 20, 2023",
            size: "small",
        },
        {
            id: 333,
            image: "/assets/images/newspaper/n3.png",
            category: "Travel",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "November 20, 2023",
            size: "small",
        },
        {
            id: 444,
            image: "/assets/images/newspaper/n4.png",
            category: "Technology",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "November 20, 2023",
            size: "small",
        },
        {
            id: 555,
            image: "/assets/images/newspaper/n5.png",
            category: "Sport",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "November 20, 2023",
            size: "small",
        },
    ];



    return (
        <div className='pp-newspaper-area'>
            <div className="container">
                <div className="pp-newspaper-heading">
                    <div className="similar-heading">
                        <span><img src="/assets/images/icons/dot.png" alt="dot" />Newspaper</span>
                        <h2>Stay informed and connected to the world</h2>
                        <p>Visit our news portal website to get the latest, accurate and most reliable news from around the world</p>
                    </div>
                    <a className="similar-link" href="#">Explore The News<span className="similar-link-icon"><FaAngleRight /></span> </a>
                </div>
                <div className="pp-newspaper-content">

                    <div className="news-grid">
                        {newsData.map((news) => (
                            <div key={news.id} className={`news-item ${news.size}`}>
                                <img src={news.image} alt="News" />
                                <div className="overlay">
                                    <span className="category">{news.category}</span>
                                    <h3>{news.title}</h3>
                                    <p>{news.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default Newspaper;