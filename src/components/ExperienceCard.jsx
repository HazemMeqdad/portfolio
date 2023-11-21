/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExperienceCard = (props) => {
    return (
        <>
            <article>
                  <FontAwesomeIcon className="icon" icon={props.icon} />
                  <div>
                    <h3>{props.title}</h3>
                    <p>{props.level}</p>
                  </div>
            </article>
        </>
    )
}

export default ExperienceCard;