import React from 'react'

const Education = () => {
  return (
  <>
  <section id='education' className='bg-gray-100 py-12 px-6 md:px-16 lg:px-24'>
  <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">My Education</h2>
        <div className="space-y-6 text-lg text-gray-700">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">Bachelor's Degree in Computer Science</h3>
            <p className="text-gray-600">XYZ University - 2018 to 2022</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">Diploma in Web Development</h3>
            <p className="text-gray-600">ABC Institute - 2022 to 2023</p>
          </div>
        </div>
      </div>
  </section>
  </>
  )
}

export default Education