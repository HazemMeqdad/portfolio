/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutCard = (props) => {
    return (
        <>
            <div className="details-container">
              <FontAwesomeIcon className="icon" icon={props.icon} />
                <h3>{props.title1}</h3>
                <p>{props.title2} <br />{props.title3}</p>
              </div>
        </>
    )
}

export default AboutCard;
