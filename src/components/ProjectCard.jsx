/* eslint-disable react/prop-types */

const ProjectCard = (props) => {
    /*
    @title: 
    */
    return (
        <>
            <div className="details-container color-container">
              <div className="article-container">
                {props.image != null ? <img
                  src={props.image}
                  alt="Project 1"
                  className="project-img"
                /> : "" }
              </div>
              <h2 className="experience-sub-title project-title">Project One</h2>
              <div className="btn-container">
                
                <a href={props.github} target="_blank" rel="noopener noreferrer"><button
                  className="btn btn-color-2 project-btn"
                >
                  Github
                </button></a>
                {props.demo != null ? <a href={props.demo} target="_blank" rel="noopener noreferrer"><button
                  className="btn btn-color-2 project-btn"
                >
                  Live Demo
                </button></a> : "" }
                
              </div>
            </div>
        </>
    )
}


export default ProjectCard;
