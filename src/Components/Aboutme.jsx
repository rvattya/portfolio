import React from 'react'

const Aboutme = () => {
  const scrolltosection= (id)=>{
    document.getElementById(id).scrollIntoView({behavior:"smooth"});

  };
  return (
    <>
    <section id='aboutme' className='bg-white py-12 px-6 md:px-16 lg:px-24'>
    <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Hello! I'm a passionate <span className="text-blue-500 font-semibold">Web Developer</span> and 
          <span className="text-blue-500 font-semibold"> Digital Marketer</span> with experience in building 
          user-friendly, responsive websites and crafting effective marketing strategies. I specialize in 
          <span className="font-semibold"> MERN Stack Development</span>, WordPress, and SEO, helping businesses grow online.
        </p>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          My journey in the tech world started 3 years ago, and since then, I have worked on various projects, 
          including <span className="font-semibold">real estate websites, e-commerce platforms</span>, and 
          business listing portals. I thrive on solving complex problems and delivering impactful digital solutions.
        </p>
        <div className="mt-8">
          <button
           onClick={()=>scrolltosection("contact")}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
          >
            Hire Me
          </button>
        </div>
      </div>

    </section>
    </>
  )
}

export default Aboutme