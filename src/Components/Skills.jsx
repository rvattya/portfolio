import React from 'react'

const Skills = () => {
  return (
    <>
    <section id='skills' className='bg-gray-100 py-12 px-6 md:px-16 lg:px-24'>
    <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg text-gray-700">
          <span className="bg-gray-200 px-4 py-2 rounded-lg">HTML & CSS</span>
          <span className="bg-gray-200 px-4 py-2 rounded-lg">JavaScript</span>
          <span className="bg-gray-200 px-4 py-2 rounded-lg">React.js</span>
          <span className="bg-gray-200 px-4 py-2 rounded-lg">Node.js</span>
          <span className="bg-gray-200 px-4 py-2 rounded-lg">Express.js</span>
          <span className="bg-gray-200 px-4 py-2 rounded-lg">MongoDB</span>
          <span className="bg-gray-200 px-4 py-2 rounded-lg">WordPress</span>
          <span className="bg-gray-200 px-4 py-2 rounded-lg">SEO & Digital Marketing</span>
          <span className="bg-gray-200 px-4 py-2 rounded-lg">UI/UX Design</span>
        </div>
      </div>
    </section>
    </>
  )
}

export default Skills