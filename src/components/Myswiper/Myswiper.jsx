import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Pagination style (optional)
import "swiper/css/navigation"; // Navigation style (optional)
import Job from "../Jobs/Job";

// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const MySwiper = () => {
    return (
        <Swiper
            modules={[Pagination, Navigation, Autoplay]} // Enable features
            spaceBetween={20} // Gap between slides
            slidesPerView={1} // Number of slides visible at a time
            loop={true} // Infinite loop
            pagination={{ clickable: true }} // Enable pagination
            navigation={true} // Enable navigation arrows
            autoplay={{ delay: 3000 }} // Auto-slide every 3 sec
        >
            <SwiperSlide>
                <Job></Job>
            </SwiperSlide>
            <SwiperSlide>
                <Job></Job>
            </SwiperSlide>
            <SwiperSlide>
                <Job></Job>
            </SwiperSlide>
        </Swiper>
    );
};

export default MySwiper;
