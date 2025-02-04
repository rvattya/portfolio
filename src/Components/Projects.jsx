import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "Digital Marketing Campaign",
      description: "A successful social media campaign that boosted client engagement by 50%.",
      image: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
      title: "MERN Stack Web App",
      description: "A responsive web application built with React, Node.js, Express, and MongoDB.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "E-commerce WordPress Site",
      description: "A fully functional e-commerce platform built with WordPress and WooCommerce.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Real Estate Landing Page",
      description: "Designed and developed a high-conversion landing page for real estate listings.",
      image: "https://via.placeholder.com/300",
    },
  ];
  return (
   <>
   <section id='projects' className='bg-gray-100 py-10 px-6 md:px-20'>
   <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-700">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    
   </section>
   </>
  )
}

export default Projects