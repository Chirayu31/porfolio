import React from 'react';

const WorkCard = ({ title, description, techStack, githubLink, liveLink, imageSrc }) => {
    return (
        <div className="work-card">
            <div className="image-container">
                <img src={imageSrc} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p><b>Tech Stack: </b>{techStack}</p>
            <div className="links">
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                    Live Preview
                </a>
            </div>
        </div>
    );
};

export default WorkCard;
