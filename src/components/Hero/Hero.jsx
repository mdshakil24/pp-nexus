import './Hero.css';
import { IoIosSearch } from "react-icons/io";
import Categories from '../Categories/Categories'

const Hero = () => {
    return (
        <div className="pp-hero-area">
            <div className="container">
                <div className="pp-hero-content">
                    <div className="pp-hero-top-content">
                        <h1>Find  the Best Solution
                            For Your Needs </h1>
                        <div className="pp-hero-search-content">
                            <div className="pp-hero-search-input">
                                <IoIosSearch className='pp-hero-search-icon' />
                                <input type="search" placeholder='Search cars, properties, jobs, news, articles, and charities' />
                            </div>
                            <button type='submit' className='similar-btn'>Search</button>
                        </div>
                    </div>
                    <Categories></Categories>
                </div>
            </div>
        </div>
    );
};

export default Hero;