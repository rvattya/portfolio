import React from 'react'

const Experience = () => {
    const experiences = [
        {
          role: "Digital Marketing Specialist",
          company: "Freelancer",
          duration: "2022 - Present",
          description: "Managed and optimized ad campaigns, SEO, and social media strategies for various clients."
        },
        {
          role: "Web Developer (MERN Stack)",
          company: "Freelancer",
          duration: "2023 - Present",
          description: "Developed responsive web applications using React, Node.js, Express, and MongoDB."
        },
        {
          role: "WordPress Developer",
          company: "Freelancer",
          duration: "2021 - Present",
          description: "Designed and customized WordPress websites for businesses across various industries."
        }
      ];
    
      
  return (
   <>
   
   <div id='experience' className=''>
   <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">My Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white shadow-lg p-5 rounded-2xl border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-gray-700">{exp.role}</h3>
            <p className="text-gray-600">{exp.company} | {exp.duration}</p>
            <p className="text-gray-500 mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
   </div>
   </>
  )
}

export default Experience