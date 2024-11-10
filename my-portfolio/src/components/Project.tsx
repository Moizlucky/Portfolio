import React from 'react';
import ProjectCard from './Card'; // Import the new ProjectCard component

function Project() {
  const projects = [
    {
      title: 'Remove Image Background',
      description: 'A simple Remove Image Background built with HtMl , CSS , JavaScript , Python.',
      imageSrc: '/Project-1.jpg',
      link: 'https://remove-image-background-iota.vercel.app/?vercelToolbarCode=DphP4WCep6XpdZ5',
    },
    {
      title: 'Static Interactive Resume',
      description: 'My personal resume website built using Node and HTML.',
      imageSrc: '/Project-2.jpg',
      link: 'https://milestones-1-eosin.vercel.app/?vercelToolbarCode=IMJZynQZJwRfZkh',
    },
    {
      title: 'Dynamic Resume Builder',
      description: 'I created Dynamic Resume Builder.',
      imageSrc: '/project-5.jpg',
      link: 'https://milestones-3-orcin.vercel.app/?vercelToolbarCode=WA-bC3zidNqyzzE',
    },
    {
      title: 'Editable Resume Builder',
      description: 'I created Editable Resume Builder.',
      imageSrc: '/Project-3.jpg',
      link: 'https://milestones-4-six.vercel.app/?vercelToolbarCode=DbIarujaDdsoTWg',
    },
    {
      title: 'Shareable Resume Builder',
      description: 'I Created Shareable Resume Builder.',
      imageSrc: '/Project-4.jpg',
      link: 'https://milestones-5-five.vercel.app/?vercelToolbarCode=7LV8WPdRUB_-hrs',
    },
  ];

  return (
    <div id="projects">
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-400 underline mb-4">My Projects</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-400">
              Each project showcases my commitment to creating user-friendly, efficient, and visually engaging solutions.
            </p>
          </div>

          {/* Grid of Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
