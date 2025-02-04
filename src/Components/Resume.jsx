import React from 'react'
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  const handleDownload = () => {
    // Replace the URL with the actual link to your resume file
    const resumeUrl = "https://example.com/your-resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Your_Resume.pdf";
    link.click();
  };
  return (
    <>
    <section id='resume' className='py-10 px-6 md:px-20'>
    <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Resume</h2>
        <p className="text-lg text-gray-600 mb-6">
          Take a look at my professional experience, skills, and achievements by downloading my resume.
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <FaDownload className="mr-2" /> Download Resume
          </button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Resume