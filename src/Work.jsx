import React from 'react';
import './styles/work.css';
import WorkCard from './components/WorkCard';
import toyImg from './assets/toy.png'
import curiousImg from './assets/curious.png'
import budgetImg from './assets/buget.png'

const Work = () => {
    const projects = [
        {
            title: 'Toy Titans',
            description: 'Developed a fully functional e-commerce app enabling users to manage and store data related to action figures.',
            githubLink: 'https://github.com/Chirayu31/toy-titans',
            liveLink: 'https://toy-titans.vercel.app/',
            techStack: 'Next.js, MongoDB, NextAuth, Stripe',
            imageSrc: toyImg
        },
        {
            title: 'Curious',
            description: 'Launched a personal blog to share knowledge and insights. Implemented static paths and optimized navigability for an enhanced user experience.',
            githubLink: 'https://github.com/Chirayu31/curious',
            liveLink: 'https://curious-pi.vercel.app/',
            techStack: 'Next.js, Tailwind CSS',
            imageSrc: curiousImg
        },
        {
            title: 'MyBudget',
            description: 'Built a comprehensive budgeting app using React, Tailwind CSS, and the Context API, allowing users to manage expenses and track budgets.',
            githubLink: 'https://github.com/Chirayu31/MyBudget',
            liveLink: 'https://mybudget31.netlify.app/',
            techStack: 'React.js, Tailwind CSS',
            imageSrc: budgetImg
        },
    ];

    return (
        <>
            <div className="work-container">
                {projects.map((project, index) => (
                    <WorkCard key={index} {...project} />
                ))}
            </div>

            <div className='gradient2'></div>

        </>
    );
};

export default Work;