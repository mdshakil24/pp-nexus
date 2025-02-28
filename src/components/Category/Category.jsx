import { FaAngleRight } from "react-icons/fa6";

const Category = ({category}) => {

    const {title,icon,viewMore} = category;

    console.log(category)

    return (
        <div className="single-category-item">
            <div className="single-category-icon">
                <img src={icon} alt={`${title}-icon`} />
            </div>
            <h3>{title}</h3>
            <a className="similar-link" href={viewMore.link}>{viewMore.text} <span className="similar-link-icon"><FaAngleRight/></span> </a>
        </div>
    );
};

export default Category;