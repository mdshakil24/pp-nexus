import React from 'react';
import './Categories.css'
import Category from '../Category/Category';

const Categories = () => {

    const categories = [
        {
            "id": "C1A12",
            "title": "Communities",
            "icon": "/assets/images/icons/category/people.png",
            "viewMore": {
                "text": "View More",
                "link": "/communities"
            }
        },
        {
            "id": "J2B23",
            "title": "Job Opportunities",
            "icon": "/assets/images/icons/category/pajamas.png",
            "viewMore": {
                "text": "View More",
                "link": "/jobs"
            }
        },
        {
            "id": "P3C34",
            "title": "Properties",
            "icon": "/assets/images/icons/category/home.png",
            "viewMore": {
                "text": "View More",
                "link": "/properties"
            }
        },
        {
            "id": "C4D45",
            "title": "Cars",
            "icon": "/assets/images/icons/category/car.png",
            "viewMore": {
                "text": "View More",
                "link": "/cars"
            }
        },
        {
            "id": "N5E56",
            "title": "Newspaper",
            "icon": "/assets/images/icons/category/newspaper.png",
            "viewMore": {
                "text": "View More",
                "link": "/newspaper"
            }
        }
    ];


    return (
        <div className='hero-category-area'>
            <div className="container">
                <div className="hero-category-heading-text">
                    <h4>Category Service</h4>
                </div>
                <div className="hero-category-content">
                    {
                        categories.map(category => <Category key={category.id} category={category}></Category>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;