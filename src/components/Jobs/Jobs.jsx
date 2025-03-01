import './Jobs.css'
import Job from './Job';
import { FaAngleRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Pagination style (optional)
import "swiper/css/navigation"; // Navigation style (optional)

// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Jobs = () => {

    const jobs = [
        {
            "id": "2011",
            "title": "UI Designer",
            "posted": 10,
            "company": "Meta Platforms, Inc.",
            "employmentType": ["Full-time", "Contract"],
            "description": "UX UI Designer. Senior UX UI Designer required for our client in Edinburgh for an initial 3-month contract position. We are looking for Designers with excellent UX and UI skills, so you must have a wealth of knowledge in both UX and UI.",
            "location": "London",
            "buttonText": "Apply Now",
            "link": "#"
        },
        {
            "id": "2022",
            "title": "UI Designer",
            "posted": 10,
            "company": "Meta Platforms, Inc.",
            "employmentType": ["Full-time"],
            "description": "UX UI Designer. Senior UX UI Designer required for our client in Edinburgh for an initial 3-month contract position. We are looking for Designers with excellent UX and UI skills, so you must have a wealth of knowledge in both UX and UI.",
            "location": "London",
            "buttonText": "Apply Now",
            "link": "#"
        },
        {
            "id": "2033",
            "title": "UI Designer",
            "posted": 10,
            "company": "Meta Platforms, Inc.",
            "employmentType": ["Full-time"],
            "description": "UX UI Designer. Senior UX UI Designer required for our client in Edinburgh for an initial 3-month contract position. We are looking for Designers with excellent UX and UI skills, so you must have a wealth of knowledge in both UX and UI.",
            "location": "London",
            "buttonText": "Apply Now",
            "link": "#"
        }
    ]


    return (
        <section className='pp-jobs-area'>
            <div className="container">
                <div className="pp-jobs-content">
                    <div className="pp-jobs-left-content">
                        <div className="similar-heading">
                            <span><img src="/assets/images/icons/dot.png" alt="dot" />Job Opportunities</span>
                            <h2>Explore The
                                Job Opportunities</h2>
                            <p>Discover a world of exciting career possibilities with a diverse range of job listings across various industries, providing you with access to a comprehensive selection of employment opportunities.</p>
                        </div>
                        <a className="similar-link" href='#'>Let’s Find It Now<span className="similar-link-icon"><FaAngleRight /></span> </a>
                    </div>

                    <div className="pp-jobs-right-content">
                        {
                            jobs.map(job => <Job key={job.id} job={job}></Job>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Jobs;