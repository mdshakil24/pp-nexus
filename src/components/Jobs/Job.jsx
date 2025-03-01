import { IoLocationSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper core and required modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Optional: Pagination style
import "swiper/css/navigation"; // Optional: Navigation style
import { Navigation, Pagination } from "swiper/modules"; // Import Swiper modules



const Job = ({ job }) => {

    const { title, posted, company, employmentType, description, location, buttonText, link } = job;


    return (

        <>

            <Swiper
                modules={[Navigation, Pagination]} // Enable features
                spaceBetween={20} // Space between slides
                slidesPerView={1} // Number of slides per view
                navigation // Enable navigation arrows
                pagination={{ clickable: true }} // Enable pagination dots
            >
                <SwiperSlide>
                    <div className="pp-single-job">
                        <h3>{title}</h3>
                        <div className="post-date">
                            <p>{`Posted ${posted} days ago by`} <a href="#">{company}</a></p>
                        </div>
                        <ul className="d-flex align-items-center job-types">
                            {employmentType.map(type => <li>{type}</li>)}
                        </ul>
                        <div className="pp-single-job-desc">
                            <p>{description}</p>
                        </div>
                        <div className="pp-single-job-location">
                            <IoLocationSharp />
                            <p>{location}</p>
                        </div>
                        <div className="pp-single-job-btn">
                            <a className="similar-btn" href={link}>{buttonText}</a>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>

        </>

    );
};

export default Job;