import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const WomensBottoms = () => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = (event) => {
        event.stopPropagation();
        setExpanded(!isExpanded);
      }

    return (
        <div onClick={toggleExpansion}>
      <div>
        Bottoms
        <span>{isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      {isExpanded && (
        <div>
            <div>
            <a href="">Shop All Bottoms</a>
            </div>
            <div>
            <a href="">Shorts</a>
            </div>
            <div>
            <a href="">Pants</a>
            </div>
            <div>
            <a href="">Leggings</a>
            </div>    
            <div>
            <a href="">Dresses & Skirts</a>
            </div>   
            <div>
            <a href="">Sweatpans & Joggers</a>
            </div>
                   
        </div>
      )}
    </div>
    )
}

export default WomensBottoms