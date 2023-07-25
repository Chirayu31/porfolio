
import React from 'react';
import './styles/about.css';
import mainImg from './assets/02.gif'

const About = () => {
    return (
        <div className="about-container">
            <div className="intro">
                <h1>Who Am I?</h1>
                <div className='img-div'>
                    <img src={mainImg} alt="" />
                </div>
                <p>
                    I am Chirayu Pancholi, a passionate and driven individual with a keen interest in full-stack web development. I am currently pursuing a Bachelor's degree in Computer Science Engineering.
                    <br />
                    <br />
                    My focus on front-end technologies like ReactJS, Next.js, and Tailwind CSS has allowed me to create captivating web applications and user interfaces. I am eager to contribute my skills and creativity to meaningful projects and grow as a professional in the field.
                </p>
            </div>
            <h3>Here are my profiles: </h3>
            <div className='profiles'>

                <a href={'https://leetcode.com/chirayu_31/'} target="_blank" rel="noopener noreferrer">
                    <p>LeetCode</p>
                </a>
                <a href={'https://github.com/Chirayu31'} target="_blank" rel="noopener noreferrer">
                    <p>Github</p>
                </a>
                <a href={'https://codeforces.com/profile/chirayu_3107'} target="_blank" rel="noopener noreferrer">
                    <p>CodeForces</p>
                </a>
                <a href={'https://codepen.io/Chirayu_Pancholi'} target="_blank" rel="noopener noreferrer">
                    <p>CodePen</p>
                </a>
            </div>

        </div>
    );
};

export default About;
