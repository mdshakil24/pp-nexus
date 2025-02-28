import './Community.css'
import { FaAngleRight } from "react-icons/fa6";
import Singlecommunity from './Singlecommunity';


const Community = () => {

    const communities = [
        {
          "id": "1011",
          "image": "/assets/images/community/community.png",
          "progress": "64%",
          "title": "Lorem Ipsum Dolor Sit Amet",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc",
          "amountRaised": "£128000",
          "goalAmount": "£200000",
          "daysLeft": 20,
          "buttonText": "Donate Now",
          "link": "#"
        },
        {
          "id": "1022",
          "image": "/assets/images/community/community.png",
          "progress": "64%",
          "title": "Lorem Ipsum Dolor Sit Amet",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc",
          "amountRaised": "£128000",
          "goalAmount": "£200000",
          "daysLeft": 20,
          "buttonText": "Donate Now",
          "link": "#"
        },
        {
          "id": "1033",
          "image": "/assets/images/community/community.png",
          "progress": "64%",
          "title": "Lorem Ipsum Dolor Sit Amet",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc",
          "amountRaised": "£128000",
          "goalAmount": "£200000",
          "daysLeft": 20,
          "buttonText": "Donate Now",
          "link": "#"
        },
        {
          "id": "1044",
          "image": "/assets/images/community/community.png",
          "progress": "64%",
          "title": "Lorem Ipsum Dolor Sit Amet",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc",
          "amountRaised": "£128000",
          "goalAmount": "£200000",
          "daysLeft": 20,
          "buttonText": "Donate Now",
          "link": "#"
        }
      ]
      


    return (
        <div className='pp-community-area'>
            <div className="container">
                <div className="pp-community-heading text-center">
                    <div className="similar-heading text-center">
                        <span><img src="/assets/images/icons/dot.png" alt="dot" />Community</span>
                        <h1>Community Empowerment</h1>
                    </div>
                    <p>This nexus between business activity will be reinvested into community empowerment programs to fund non-profit activities including programs for healthy life, clean water, education, and medical care. <a className="similar-link" href="#">Explore The Community Program<span className="similar-link-icon"><FaAngleRight/></span> </a> </p>
                </div>

                <div className="pp-community-content">
                    {
                        communities.map(community => <Singlecommunity key={community.id} community={community}></Singlecommunity>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Community;